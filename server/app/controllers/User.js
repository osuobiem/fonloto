'use strict'

const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('../libs/jwt')

let user = new UserModel()

module.exports = {
  async create(data) {
    return new Promise((resolve, reject) => {
      this.get({ email: data.email }).then(res => {
        if (res.length > 0) {
          reject('Email has been taken!')
        } else {
          this.get({ phone: data.phone }).then(res => {
            if (res.length > 0) {
              reject('Phone number has been taken!')
            } else {
              bcrypt.hash(data.password, 10, async (err, hash) => {
                if (err) {
                  console.log(err)
                  reject('Opps! Could not create user')
                }

                data.password = hash

                user.attr = data
                user
                  .add()
                  .then(res => {
                    this.get({ id: res.insertId })
                      .then(resp => {
                        resolve(resp[0])
                      })
                      .catch(er => {
                        console.log(er)
                        reject('Opps! Could not create user')
                      })
                  })
                  .catch(err => {
                    console.log(err)
                    reject('Opps! Could not create user')
                  })
              })
            }
          })
        }
      })
    })
  },

  async get(criteria = {}) {
    return await user.get(criteria)
  },

  async update(data, criteria) {
    return new Promise((resolve, reject) => {
      this.get(criteria).then(res => {
        if (res.length < 1) {
          reject('Account does not exist!')
        } else {
          user.attr = data

          if (data.hasOwnProperty('password') && data.password.length > 0) {
            bcrypt.hash(data.password, 10, async (err, hash) => {
              if (err) {
                console.log(err)
                reject('Opps! Could not update user')
              }

              data.password = hash
              user
                .update(criteria)
                .then(() => {
                  this.get(criteria)
                    .then(resp => {
                      resolve(resp[0])
                    })
                    .catch(er => {
                      console.log(er)
                      reject('Opps! Could not update user')
                    })
                })
                .catch(err => {
                  console.log(err)
                  reject('Opps! Could not update user')
                })
            })
          } else {
            user.attr.password = res[0].password
            user
              .update(criteria)
              .then(() => {
                this.get(criteria)
                  .then(resp => {
                    resolve(resp[0])
                  })
                  .catch(er => {
                    console.log(er)
                    reject('Opps! Could not update user')
                  })
              })
              .catch(err => {
                console.log(err)
                reject('Opps! Could not update user')
              })
          }
        }
      })
    })
  },

  async delete(criteria = {}) {
    return await user.delete(criteria)
  },

  async login(data) {
    return new Promise((resolve, reject) => {
      let q = {}
      if (data.hasOwnProperty('email')) {
        q = { email: data.email }
      } else if (data.hasOwnProperty('phone')) {
        q = { phone: data.phone }
      } else {
        reject('No email or phone field available!')
      }

      this.get(q)
        .then(res => {
          res.length < 1 ? reject('Invalid Credentials!') : null

          this.comparePassword(data.password, res[0].password)
            .then(() => {
              res[0].token = jwt.issue({
                id: res[0].id,
                email: res[0].email
              })

              resolve(res[0])
            })
            .catch(err => {
              reject(err)
            })
        })
        .catch(err => {
          console.log(err)
          reject('Oops! Could not login')
        })
    })
  },

  comparePassword(password, encryptedPassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, encryptedPassword, (err, matched) => {
        if (err) {
          console.log(err)
          reject('Oops! Could not login')
        }
        if (matched) resolve(true)
        else {
          reject('Invalid Credentials')
        }
      })
    })
  }
}

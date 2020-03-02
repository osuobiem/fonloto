'use strict'

const AdminModel = require('../models/AdminModel')
const bcrypt = require('bcrypt')
const validate = require('../libs/validate')

let admin = new AdminModel()

module.exports = {
  async create(data) {
    return new Promise((resolve, reject) => {
      this.get({ username: data.username }).then(res => {
        if (res.length > 0) {
          reject('Username has been taken!')
        } else {
          bcrypt.hash(data.password, 10, async (err, hash) => {
            if (err) {
              console.log(err)
              reject('Opps! Could not create admin')
            }

            data.password = hash

            admin.attr = data
            admin
              .add()
              .then(res => {
                this.get({ id: res.insertId })
                  .then(resp => {
                    resolve(resp[0])
                  })
                  .catch(er => {
                    console.log(er)
                    reject('Opps! Could not create admin')
                  })
              })
              .catch(err => {
                console.log(err)
                reject('Opps! Could not create admin')
              })
          })
        }
      })
    })
  },

  async get(criteria = {}) {
    return await admin.get(criteria)
  },

  async update(data, criteria) {
    return new Promise((resolve, reject) => {
      this.get(criteria).then(res => {
        if (res.length < 1) {
          reject('Account does not exist!')
        } else {
          admin.attr = data

          if (data.password && data.password.length > 0) {
            bcrypt.hash(data.password, 10, async (err, hash) => {
              if (err) {
                console.log(err)
                reject('Opps! Could not update admin')
              }

              data.password = hash
              admin
                .update(criteria)
                .then(() => {
                  this.get(criteria)
                    .then(resp => {
                      resolve(resp[0])
                    })
                    .catch(er => {
                      console.log(er)
                      reject('Opps! Could not update admin')
                    })
                })
                .catch(err => {
                  console.log(err)
                  reject('Opps! Could not update admin')
                })
            })
          } else {
            admin.attr.password = res[0].password
            admin
              .update(criteria)
              .then(() => {
                this.get(criteria)
                  .then(resp => {
                    resolve(resp[0])
                  })
                  .catch(er => {
                    console.log(er)
                    reject('Opps! Could not update admin')
                  })
              })
              .catch(err => {
                console.log(err)
                reject('Opps! Could not update admin')
              })
          }
        }
      })
    })
  },

  async delete(criteria = {}) {
    return await admin.delete(criteria)
  },

  async login(data) {
    return new Promise((resolve, reject) => {
      this.get({ username: data.username })
        .then(res => {
          res.length < 1 ? reject('Invalid Credentials!') : null

          this.comparePassword(data.password, res[0].password)
            .then(() => {
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

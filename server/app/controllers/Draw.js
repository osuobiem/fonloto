'use strict'

const DrawModel = require('../models/DrawModel')

let draw = new DrawModel()

module.exports = {
  async create(data) {
    return new Promise((resolve, reject) => {
      draw.attr = data
      draw
        .add()
        .then(res => {
          this.get({ id: res.insertId })
            .then(resp => {
              resolve(resp[0])
            })
            .catch(er => {
              console.log(er)
              reject('Opps! Could not create draw')
            })
        })
        .catch(err => {
          console.log(err)
          reject('Opps! Could not create draw')
        })
    })
  },

  async get(criteria = {}) {
    return await draw.get(criteria)
  },

  async update(data, criteria) {
    return new Promise((resolve, reject) => {
      this.get(criteria).then(res => {
        if (res.length < 1) {
          reject('Draw does not exist!')
        } else {
          draw.attr = data
          draw
            .update(criteria)
            .then(() => {
              this.get(criteria)
                .then(resp => {
                  resolve(resp[0])
                })
                .catch(er => {
                  console.log(er)
                  reject('Opps! Could not update draw')
                })
            })
            .catch(err => {
              console.log(err)
              reject('Opps! Could not update draw')
            })
        }
      })
    })
  },

  async delete(criteria = {}) {
    return await draw.delete(criteria)
  }
}

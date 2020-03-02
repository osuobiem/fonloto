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
    draw.attr = data
    return await draw.update(criteria)
  },

  async delete(criteria = {}) {
    return await draw.delete(criteria)
  }
}

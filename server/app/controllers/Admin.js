'use strict'

const AdminModel = require('../models/AdminModel')
const bcrypt = require('bcrypt')

let admin = new AdminModel()

module.exports = {
  async create(data) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(data.password, 10, async (err, hash) => {
        if (err) reject({ status: false, message: err })

        data.password = hash

        admin.attr = data
        admin
          .add()
          .then(res => {
            this.get({ id: res.insertId })
              .then(resp => {
                resolve(resp)
              })
              .catch(er => {
                reject(er)
              })
          })
          .catch(err => {
            reject(err)
          })
      })
    })
  },

  async get(criteria = {}) {
    return await admin.get(criteria)
  },

  async update(data, criteria) {
    admin.attr = data
    return await admin.update(criteria)
  },

  async delete(criteria = {}) {
    return await admin.delete(criteria)
  }
}

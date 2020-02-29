'use strict'

const AdminModel = require('../models/AdminModel')

let admin = new AdminModel()

module.exports = {
  async create(data) {
    admin.attr = data

    return await admin.add()
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

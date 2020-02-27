'use strict'

const AdminModel = require('../models/AdminModel')

let admin = new AdminModel()

module.exports = {
  async create(data) {
    admin.attr = data

    return await admin.add()
  }
}

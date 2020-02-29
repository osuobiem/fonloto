'use strict'

const DrawModel = require('../models/DrawModel')

let draw = new DrawModel()

module.exports = {
  async create(data) {
    draw.attr = data

    return await draw.add()
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

'use strict'

const CountryModel = require('../models/CountryModel')

let country = new CountryModel()

module.exports = {
  async get(criteria = {}) {
    return await country.get(criteria)
  }
}

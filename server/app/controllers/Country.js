'use strict'

const CountryModel = require('../models/CountryModel')
const axios = require('axios')

let country = new CountryModel()

module.exports = {
  async get(criteria = {}) {
    return await country.get(criteria)
  },

  async getByIP(ip) {
    return await country.get({ code: 'NGN' })
  }
}

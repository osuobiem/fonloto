'use strict'

const Model = require('../../core/model')

class CountryModel extends Model {
  attr = {
    id: '',
    name: '',
    currency: '',
    code: '',
    symbol: ''
  }

  constructor() {
    super('countries')
  }
}

module.exports = CountryModel

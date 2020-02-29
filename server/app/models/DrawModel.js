'use strict'

const Model = require('../../core/model')

class DrawModel extends Model {
  attr = {
    id: '',
    name: '',
    description: '',
    image: '',
    amount: '',
    will_begin: '',
    price_per_ticket: '',
    country: '',
    active: ''
  }

  constructor() {
    super('draws')
  }
}

module.exports = DrawModel

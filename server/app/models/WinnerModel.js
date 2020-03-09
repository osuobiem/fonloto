'use strict'

const Model = require('../../core/model')

class WinnerModel extends Model {
  attr = {
    id: '',
    user: '',
    draw: ''
  }

  constructor() {
    super('winners')
  }
}

module.exports = WinnerModel

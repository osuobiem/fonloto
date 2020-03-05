'use strict'

const Model = require('../../core/model')

class SettingModel extends Model {
  attr = {
    id: '',
    name: '',
    value: ''
  }

  constructor() {
    super('settings')
  }
}

module.exports = SettingModel

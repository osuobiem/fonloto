'use strict'

const Model = require('../../core/model')

class SettingModel extends Model {
  attr = {
    id: '',
    name: '',
    options: ''
  }

  constructor() {
    super('settings')
  }
}

module.exports = DrawModel

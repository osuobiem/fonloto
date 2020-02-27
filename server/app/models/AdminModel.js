'use strict'

const Model = require('../../core/model')

class AdminModel extends Model {
  attr = {
    id: '',
    name: '',
    username: '',
    password: '',
    level: '',
    active: ''
  }

  constructor() {
    super('admins')
  }
}

module.exports = AdminModel

'use strict'

const Model = require('../../core/model')

class UserModel extends Model {
  attr = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    country: '',
    photo: '',
    active: '',
    remember_token: ''
  }

  constructor() {
    super('users')
  }
}

module.exports = UserModel

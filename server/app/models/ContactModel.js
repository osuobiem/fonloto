'use strict'

const Model = require('../../core/model')

class ContactModel extends Model {
  attr = {
    id: '',
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  constructor() {
    super('contacts')
  }
}

module.exports = ContactModel

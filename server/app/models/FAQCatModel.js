'use strict'

const Model = require('../../core/model')

class FAQCatModel extends Model {
  attr = {
    id: '',
    name: ''
  }

  constructor() {
    super('faq_categories')
  }
}

module.exports = FAQCatModel

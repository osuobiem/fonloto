'use strict'

const Model = require('../../core/model')

class FAQModel extends Model {
  attr = {
    id: '',
    question: '',
    answer: '',
    category: ''
  }

  constructor() {
    super('faqs')
  }
}

module.exports = FAQModel

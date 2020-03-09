'use strict'

const WinnerModel = require('../models/WinnerModel')

let winner = new WinnerModel()

module.exports = {
  async create(data) {
    return new Promise((resolve, reject) => {
      winner.attr = data
      winner
        .add()
        .then(res => {
          this.get({ id: res.insertId })
            .then(resp => {
              resolve(resp[0])
            })
            .catch(er => {
              console.log(er)
              reject('Opps! Could not create winner')
            })
        })
        .catch(err => {
          console.log(err)
          reject('Opps! Could not create winner')
        })
    })
  },

  async get(criteria = {}) {
    if (criteria.$ext) {
      criteria.$ext = {
        $ord: {
          created_at: 'DESC'
        },
        $lim: criteria.$ext.$lim
      }
    } else {
      criteria.$ext = {
        $ord: {
          created_at: 'DESC'
        }
      }
    }

    return await winner.get(criteria)
  },

  async delete(criteria = {}) {
    return await winner.delete(criteria)
  }
}

const app = require('express')()

const report = require('./app/libs/report')

// CONTROLLERS
const Admin = require('./app/controllers/Admin')

/** ADMIN ROUTES */

app.post('/admins/new', (req, res) => {
  Admin.create(req.body)
    .then(resp => {
      report.success(res, 'Creation Successful')
    })
    .catch(err => {
      report.failure(res, 'Creation Failed')
    })
})

/** END ADMIN ROUTES */

module.exports = {
  path: '/api',
  handler: app
}

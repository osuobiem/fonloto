const app = require('express')()

const report = require('./app/libs/report')

// CONTROLLERS
const Admin = require('./app/controllers/Admin')

/** ADMIN ROUTES */
// Create
app.post('/admins/new', (req, res) => {
  Admin.create(req.body)
    .then(resp => {
      report.success(res, 'Creation Successful')
    })
    .catch(err => {
      report.failure(res, 'Creation Failed')
    })
})

// Get
app.get('/admins', (req, res) => {
  Admin.get()
    .then(data => {
      report.success(res, data)
    })
    .catch(err => {
      report.failure(res, err, 'Could not fetch data')
    })
})

// Get One
app.get('/admins/:id', (req, res) => {
  Admin.get({ id: parseInt(req.params.id) })
    .then(data => {
      report.success(res, data[0])
    })
    .catch(err => {
      report.failure(res, err, 'Could not fetch data')
    })
})

// Delete
app.get('/admins/delete/:id', (req, res) => {
  Admin.delete({ id: parseInt(req.params.id) })
    .then(data => {
      report.success(res, data[0])
    })
    .catch(err => {
      report.failure(res, err, 'Could not delete data')
    })
})

// Update
app.post('/admins/update/:id', (req, res) => {
  Admin.update(req.body, { id: parseInt(req.params.id) })
    .then(data => {
      report.success(res, data[0])
    })
    .catch(err => {
      report.failure(res, err, 'Could not update data')
    })
})

/** END ADMIN ROUTES */

module.exports = {
  path: '/api',
  handler: app
}

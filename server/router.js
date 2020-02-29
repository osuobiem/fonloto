const app = require('express')()

const report = require('./app/libs/report')
const validate = require('./app/libs/validate')

// CONTROLLERS
const Admin = require('./app/controllers/Admin')
const Draw = require('./app/controllers/Draw')

/** ADMIN ROUTES */
{
  // Create
  app.post('/admins/new', (req, res) => {
    validate.empty(req.body)
    !validate.status ? report.failure(res, validate.report()) : null

    Admin.create(req.body)
      .then(resp => {
        report.success(res, 'Creation Successful')
      })
      .catch(err => {
        report.failure(res, 'Creation Failed', err)
      })
  })

  // Get
  app.get('/admins', (req, res) => {
    Admin.get()
      .then(data => {
        report.success(res, data)
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })

  // Get One
  app.get('/admins/:id', (req, res) => {
    Admin.get({ id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })

  // Delete
  app.get('/admins/delete/:id', (req, res) => {
    Admin.delete({ id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not delete data', err)
      })
  })

  // Update
  app.post('/admins/update/:id', (req, res) => {
    validate.exempt = ['password']
    validate.empty(req.body)
    !validate.status ? report.failure(res, validate.report()) : null

    Admin.update(req.body, { id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not update data', err)
      })
  })
}
/** END ADMIN ROUTES */

/** DRAW ROUTES */
{
  // Create
  app.post('/draws/new', (req, res) => {
    validate.empty(req.body)
    !validate.status ? report.failure(res, validate.report()) : null

    Draw.create(req.body)
      .then(resp => {
        report.success(res, 'Creation Successful')
      })
      .catch(err => {
        report.failure(res, 'Creation Failed', err)
      })
  })

  // Get
  app.get('/draws', (req, res) => {
    Draw.get()
      .then(data => {
        report.success(res, data)
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })

  // Get One
  app.get('/draws/:id', (req, res) => {
    Draw.get({ id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })

  // Delete
  app.get('/draws/delete/:id', (req, res) => {
    Draw.delete({ id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not delete data', err)
      })
  })

  // Update
  app.post('/draws/update/:id', (req, res) => {
    validate.empty(req.body)
    !validate.status ? report.failure(res, validate.report()) : null

    Draw.update(req.body, { id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not update data', err)
      })
  })
}
/** END DRAW ROUTES */

module.exports = {
  path: '/api',
  handler: app
}

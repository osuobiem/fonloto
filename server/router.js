const app = require('express')()

const report = require('./app/libs/report')
const validate = require('./app/libs/validate')

// CONTROLLERS
const Admin = require('./app/controllers/Admin')
const Draw = require('./app/controllers/Draw')
const Setting = require('./app/controllers/Setting')

/** ADMIN ROUTES */
{
  // Create
  app.post('/admins/new', (req, res) => {
    validate.empty(req.body)
    if (validate.status) {
      Admin.create(req.body)
        .then(resp => {
          report.success(res, resp)
        })
        .catch(err => {
          report.failure(res, err)
        })
    } else {
      report.failure(res, validate.report())
    }
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
    if (validate.status) {
      Admin.update(req.body, { id: req.params.id })
        .then(resp => {
          report.success(res, resp)
        })
        .catch(err => {
          report.failure(res, err)
        })
    } else {
      report.failure(res, validate.report())
    }
  })

  // Login
  app.post('/admins/login', (req, res) => {
    validate.empty(req.body)
    if (validate.status) {
      Admin.login(req.body)
        .then(resp => {
          report.success(res, resp)
        })
        .catch(err => {
          report.failure(res, err)
        })
    } else {
      report.failure(res, validate.report())
    }
  })
}
/** END ADMIN ROUTES */

/** DRAW ROUTES */
{
  // Create
  app.post('/draws/new', (req, res) => {
    validate.empty(req.body)
    if (validate.status) {
      Draw.create(req.body)
        .then(resp => {
          report.success(res, resp)
        })
        .catch(err => {
          report.failure(res, err)
        })
    } else {
      report.failure(res, validate.report())
    }
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
    if (validate.status) {
      Draw.update(req.body, { id: req.params.id })
        .then(resp => {
          report.success(res, resp)
        })
        .catch(err => {
          report.failure(res, err)
        })
    } else {
      report.failure(res, validate.report())
    }
  })
}
/** END DRAW ROUTES */

/** SETTING ROUTES */
{
  // Create
  app.post('/settings/new', (req, res) => {
    validate.empty(req.body)
    if (validate.status) {
      Setting.create(req.body)
        .then(resp => {
          report.success(res, resp)
        })
        .catch(err => {
          report.failure(res, err)
        })
    } else {
      report.failure(res, validate.report())
    }
  })

  // Get
  app.get('/settings', (req, res) => {
    Setting.get()
      .then(data => {
        report.success(res, data)
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })

  // Get One
  app.get('/settings/:id', (req, res) => {
    Setting.get({ id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })

  // Delete
  app.get('/settings/delete/:id', (req, res) => {
    Setting.delete({ id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not delete data', err)
      })
  })

  // Update
  app.post('/settings/update/:id', (req, res) => {
    validate.empty(req.body)
    if (validate.status) {
      Setting.update(req.body, { id: req.params.id })
        .then(resp => {
          report.success(res, resp)
        })
        .catch(err => {
          report.failure(res, err)
        })
    } else {
      report.failure(res, validate.report())
    }
  })
}
/** END SETTING ROUTES */

module.exports = {
  path: '/api',
  handler: app
}

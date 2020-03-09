const app = require('express')()

const report = require('./app/libs/report')
const validate = require('./app/libs/validate')
const AccessFilter = require('./app/middlewares/AccessFilter')

// CONTROLLERS
const Admin = require('./app/controllers/Admin')
const Draw = require('./app/controllers/Draw')
const Setting = require('./app/controllers/Setting')
const Contact = require('./app/controllers/Contact')
const Winner = require('./app/controllers/Winner')
const FAQCat = require('./app/controllers/FAQCategory')

AccessFilter.exempt = ['/admins/login']
app.use(AccessFilter.filter)

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

/** CONTACT ROUTES */
{
  // Create
  app.post('/contacts/new', (req, res) => {
    validate.empty(req.body)
    if (validate.status) {
      Contact.create(req.body)
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
  app.get('/contacts', (req, res) => {
    Contact.get()
      .then(data => {
        report.success(res, data)
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })
}
/** END CONTACT ROUTES */

/** WINNER ROUTES */
{
  // Create
  app.post('/winners/new', (req, res) => {
    validate.empty(req.body)
    if (validate.status) {
      Winner.create(req.body)
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

  // Get All
  app.get('/winners', (req, res) => {
    Winner.get()
      .then(data => {
        report.success(res, data)
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })

  // Get With Limit
  app.get('/winners/limit/:limit', (req, res) => {
    Winner.get({
      $ext: {
        $lim: req.params.limit
      }
    })
      .then(data => {
        report.success(res, data)
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })

  // Get One
  app.get('/winners/:id', (req, res) => {
    Winner.get({ id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })

  // Delete
  app.get('/winners/delete/:id', (req, res) => {
    Winner.delete({ id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not delete data', err)
      })
  })
}
/** END WINNER ROUTES */

/** FAQ CATEGORY ROUTES */
{
  // Create
  app.post('/faq-cats/new', (req, res) => {
    validate.empty(req.body)
    if (validate.status) {
      FAQCat.create(req.body)
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

  // Get All
  app.get('/faq-cats', (req, res) => {
    FAQCat.get()
      .then(data => {
        report.success(res, data)
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })

  // Get One
  app.get('/faq-cats/:id', (req, res) => {
    FAQCat.get({ id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not fetch data', err)
      })
  })

  // Update
  app.post('/faq-cats/update/:id', (req, res) => {
    validate.empty(req.body)
    if (validate.status) {
      FAQCat.update(req.body, { id: req.params.id })
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

  // Delete
  app.get('/faq-cats/delete/:id', (req, res) => {
    FAQCat.delete({ id: parseInt(req.params.id) })
      .then(data => {
        report.success(res, data[0])
      })
      .catch(err => {
        report.failure(res, 'Could not delete data', err)
      })
  })
}
/** END WINNER ROUTES */

module.exports = {
  path: '/api',
  handler: app
}

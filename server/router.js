const app = require('express')()

app.use(log)

module.exports = {
  path: '/api',
  handler: app
}

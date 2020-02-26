const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.join(__dirname, '../../.env')
})

module.exports = {
  driver: process.env.DB_DRIVER,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}

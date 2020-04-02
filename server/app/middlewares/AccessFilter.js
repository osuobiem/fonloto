const jwt = require('../libs/jwt')

let AF = {
  exempt: [],

  filter(req, res, next) {
    split(req)
    clean(req, res, next)
  }
}

function split(req) {
  let parts = []

  AF.exempt.forEach((el, i) => {
    parts = el.split(':')
    if (parts.length > 1) {
      AF.exempt[i] = req.path
    }
  })
}

function clean(req, res, next) {
  if (AF.exempt.length > 0) {
    if (inArray(AF.exempt, req.path)) {
      next()
    } else {
      verify(req, res, next)
    }
  } else {
    verify(req, res, next)
  }
}

function inArray(haystack, needle) {
  let res = false

  ;[...haystack].forEach(element => {
    if (element === needle) {
      res = true
    }
  })

  return res
}

function verify(req, res, next) {
  if (req.headers.token) {
    jwt.verify(req.headers.token, err => {
      if (err) {
        res.send({
          status: false,
          message: 'Access denied'
        })
      } else {
        next()
      }
    })
  } else {
    res.send({
      status: false,
      message: 'Access denied'
    })
  }
}

module.exports = AF

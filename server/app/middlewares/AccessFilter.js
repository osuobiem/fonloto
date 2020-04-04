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
  let num = 0
  let url_ar = []

  AF.exempt.forEach((el, i) => {
    parts = el.split(':')
    url_ar = req.path.split('/')

    if (parts.length > 1) {
      num = parts[1]
      for (let k = 0; k < num; k++) {
        url_ar.pop()
      }

      AF.exempt[i] =
        AF.exempt[i] == url_ar.join('/') + '/:' + num ? req.path : AF.exempt[i]
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

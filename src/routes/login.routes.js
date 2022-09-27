const route = require('express').Router()
const { login } = require('../controllers/Login.controller')

route.post('/', login)

module.exports = route;
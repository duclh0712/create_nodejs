const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home.Controller')

router.get('/', homeController.home)

module.exports = router

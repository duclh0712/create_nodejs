const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home.Controller')


router.post('/logged', homeController.logged)
router.post('/registed', homeController.registed)
router.get('/sign-up', homeController.signUp)
router.get('/login', homeController.login)
router.get('/', homeController.home)

module.exports = router

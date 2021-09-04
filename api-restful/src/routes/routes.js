const router = require('express').Router()

const ProductControllers = require('../controllers/controllersProducts')

router.get('/products', ProductControllers.get)

module.exports = router
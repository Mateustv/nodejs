const router = require('express').Router()

const ProductControllers = require('../controllers/controllersProducts')

router.get('/products/:id?', ProductControllers.get)
router.post('/products', ProductControllers.post)
router.put('/products/:id', ProductControllers.put)

module.exports = router
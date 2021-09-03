const router = require('express').Router()

const CustomersController = require('../controllers/customers')

router.get('/', (req, res) => {
  res.render('main',{ 
    title: 'Fazer um teste'
  })
})
router.get('/register', (req, res) => {
  res.render('register',{ 
    title: 'Form'
  })
})
router.post('/register/add',CustomersController.add)
module.exports = router
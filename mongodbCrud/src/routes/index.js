const router = require('express').Router()

const CustomersController = require('../controllers/customers')

router.get('/', (req, res) => {
  res.render('main',{ 
    title: 'Fazer um teste',
    titleh1: 'HOME'
  })
})
router.get('/register', (req, res) => {
  res.render('register',{ 
    title: 'Form',
    titleh1: 'Formularios',
  })
})
router.post('/register/add',CustomersController.add)

router.get('/list', CustomersController.listUsers)


module.exports = router
const router = require('express').Router()

const CustomersController = require('../controllers/customers')

//Minhas rodas dentro do site

//home
router.get('/', (req, res) => {
  res.render('main',{ 
    title: 'Fazer um teste',
    titleh1: 'HOME'
  })
})

//Colcoar contatos
router.get('/register', (req, res) => {
  res.render('register',{ 
    title: 'Form',
    titleh1: 'Formularios',
  })
})
router.post('/register/add',CustomersController.add)

// listar contato
router.get('/list', CustomersController.listUsers)

//editar contatos
router.get('/edit', CustomersController.indexEdit)
router.post('/edit/:id',CustomersController.edit)

module.exports = router
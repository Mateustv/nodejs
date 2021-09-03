const CustomersModel = require('../models/costumers') 
const {crypto} = require('../utils/password')

async function add (req, res){
  const { 
    name,
    age,
    email,
    password,
  } = req.body
  
  const passwordCriptor = await crypto(password)
  
  const register = new CustomersModel({
    name,
    age,
    email,
    password:passwordCriptor,
  })
  register.save()
  
  res.render('register',{
    title: 'Form',
    titleh1: 'Formularios',
    message:'Cadastro realizado com sucesso'
  })
}

async function listUsers (req, res){
  
  const users = await CustomersModel.find()

  res.render('listUser', { 
    title: 'Lista de Usuario',
    titleh1: 'Lista De Usuarios',
    users,
  })
}

module.exports = {
  add,
  listUsers,
}
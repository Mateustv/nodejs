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

async function indexEdit (req, res){
  
  const { id } = req.query
  const user = await CustomersModel.findById(id)
  
  res.render('edit',{
    title: 'Editar',
    titleh1: 'Editar Usuarios',
    user,
  })
}

async function edit (req, res){
  const { 
    name,
    age,
    email,
  } = req.body
  
  const {id}= req.params 
  const user = await CustomersModel.findById(id)

  user.name = name
  user.age = age
  user.email = email
  user.save()

  res.render('edit',{
    title: 'Editar',
    titleh1: 'Editar Usuarios',
    user,
    message: 'Usuario editado com sucesso' 
  })
}


module.exports = {
  add,
  listUsers,
  indexEdit,
  edit,
}
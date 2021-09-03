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
  res.send('Deu certo')
}

module.exports = {
  add
}
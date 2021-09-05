//Modulos
const express = require('express')
const path = require('path')
//meus modulos
const db = require('./database/database')
const routes = require('./routes/routes')

//começando o servidor
const app = express()
//conectando com o banco de dados
db.connect()

// Habilitar para receber dados por via post
app.use(express.json())

//Rotas
app.use('/api', routes)


const port = process.env.PORT || 8080
app.listen(port, () =>{
  console.log(`Server is listening on port ${port}`)
})
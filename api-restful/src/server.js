//Modulos
const express = require('express')
const cors = require('cors')
//meus modulos
const db = require('./database/database')
const routes = require('./routes/routes')

//começando o servidor
const app = express()
//conectando com o banco de dados
db.connect()

/****** permicoes de cors *********/

//caso queria habilitar mais de um
const allowedOrigin = ['http://127.0.0.1:5500', 'http://127.0.0.1:5550']
app.use(cors({
  origin: function (origin,callback){
    let allowed = true
    if(!origin) allowed = true
    if(!allowedOrigin.includes(origin)) allowed = false

    callback(null, allowed)
  }
}))
/* Especificando qual mandar*/
// app.use(cors({
//   origin: 'http://127.0.0.1:5500'
// }))
/*Quando qualquer um pode fazer */
// app.use(cors())

// Habilitar para receber dados por via post
app.use(express.json())

//Rotas
app.use('/api', routes)


const port = process.env.PORT || 8080
app.listen(port, () =>{
  console.log(`Server is listening on port ${port}`)
})
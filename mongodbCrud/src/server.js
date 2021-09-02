const express = require('express')
const path = require('path')
//meus modulos
const db = require('./database')
const routes = require('./routes')

//começando o servidor
const app = express()

db.connect()

// definir meu tamplate engine
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

// Definir onde estao meus arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilitar para receber dados por via post
app.use(express.urlencoded({ extended: true}))

//Rotas
app.use('/', routes)


//Quando não achar a rota
app.use((req, res)=>{
  res.send('Pagina não encontrada')
})

const port = process.env.PORT || 8080
app.listen(port, () =>{
  console.log(`Server is listening on port ${port}`)
})
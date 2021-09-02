//****/inicializando com express*****//

// const express = require('express');

// const app = express();
// const PORT = process.env.PORT || 8080  
// app.listen(PORT, ()=>{console.log('o servido esta escutando')})

//****/Criando Rotas ******// 
const express = require('express');
const path = require('path');
const app = express();

//Definindo os arquivos estaticos

const staticFolder = path.join(__dirname,'views')
const expressStatic = express.static(staticFolder)
app.use(expressStatic)
//app.use(express.static(path.join(__dirname,'views')))

//Defininfo os arquivos publicos

// const publicFolder = path.join(__dirname,'public')
// const expressPublic = express.static(publicFolder)
// app.use(expressPublic)
app.use(express.static(path.join(__dirname,'public')))//maneira mais comum



//Rotas
app.get('/', (req, res) => {
  res.render(views/index)
})
app.get('/sobre', (req, res) => {
  res.send('Sobre')
})
app.use((req, res)=>{
  res.send('pagina não encotrada')
})



const PORT = process.env.PORT || 8080  
app.listen(PORT, ()=>{console.log('o servido esta escutando')})
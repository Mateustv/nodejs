//****************************************//
//*******inicializando com express*******//
//***************************************//

// const express = require('express');

// const app = express();
// const PORT = process.env.PORT || 8080
// app.listen(PORT, ()=>{console.log('o servido esta escutando')})

//****************************//
//*******Criando Rotas *******//
//****************************//

// const express = require('express');
// const path = require('path');
// const app = express();

// //Definindo os arquivos estaticos

// const staticFolder = path.join(__dirname,'views')
// const expressStatic = express.static(staticFolder)
// app.use(expressStatic)
// //app.use(express.static(path.join(__dirname,'views')))

// //Defininfo os arquivos publicos

// // const publicFolder = path.join(__dirname,'public')
// // const expressPublic = express.static(publicFolder)
// // app.use(expressPublic)
// app.use(express.static(path.join(__dirname,'public')))//maneira mais comum

// //Rotas
// app.get('/', (req, res) => {
//   res.render(views/index)
// })
// app.get('/sobre', (req, res) => {
//   res.send('Sobre')
// })
// app.use((req, res)=>{
//   res.send('pagina não encotrada')
// })

// const PORT = process.env.PORT || 8080
// app.listen(PORT, ()=>{console.log('o servido esta escutando')})

//***********************************//
//*******Template Engine EJS *******//
//*********************************//

const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express();

app.set("view engine", "ejs")

//não precisamos mostrar o caminho mais com ejs, lembra de mudar o nome do .html para .ejs
// //Definindo os arquivos estaticos
// app.use(express.static(path.join(__dirname,'views')))

//Defininfo os arquivos publicos
app.use(express.static(path.join(__dirname, "public"))); //maneira mais comum

//Defindo para recerber conteudo
app.use(express.urlencoded({ extended: true }));

//Rotas
app.get("/", (req, res) => {
  res.render("index", {
    title: "Mateus Tavares",
  });
});

app.get("/sobre", (req, res) => {
  res.render("Sobre", {
    title: "Mateus Tavares - Sobre",
    post: [
      {
        title: "Title 1",
        content:
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nam repellat ducimus accusantium delectus. Dolorem dolores accusamus rem odit temporibus, provident ea nesciunt nobis repudiandae. Odio optio mollitia obcaecati ipsa.",
        stars: 2,
      },
      {
        title: "Title 1",
        content:
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nam repellat ducimus accusantium delectus. Dolorem dolores accusamus rem odit temporibus, provident ea nesciunt nobis repudiandae. Odio optio mollitia obcaecati ipsa.",
        stars: 5,
      },
      {
        title: "Title 1",
        content:
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nam repellat ducimus accusantium delectus. Dolorem dolores accusamus rem odit temporibus, provident ea nesciunt nobis repudiandae. Odio optio mollitia obcaecati ipsa.",
      },
    ],
  });
});

app.get("/formulario", (req, res) => {
  const {deuCerto} = req.query
  res.render("formulario", {
    title: "Formulario",
    cadastrado: deuCerto,
  });
});

app.post("/salvar-post", (req, res) => {
  const { texto, infor } = req.body;
  const data = fs.readFileSync('./store/post.json')
  const post = JSON.parse(data)
  post.push({
    texto,
    infor,
  })

  const postString = JSON.stringify(post)

  fs.writeFileSync('./store/post.json', postString)

  res.redirect('/formulario?deuCerto=1')
})


app.use((req, res) => {
  res.send("pagina não encotrada");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("o servido esta escutando");
});

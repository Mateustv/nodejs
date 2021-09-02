const http = require('http')   //importando o modulo http
const fs = require('fs')


const server = http.createServer(function(request, response) {     //resquest e o que esta vindo na requisicao
  if(request.url === '/'){                                        // response a resposta que vou dar para essa requisicao
    fs.readFile('../client/index.html', function(error, content){
      response.end(content)
    })}
  if(request.url === '/teste'){
    response.end('ok deuc certo')
  }
})

server.listen(8080)
console.log('servidor executando')
const http = require('http')   //importando o modulo http

const server = http.createServer(function(request, response) {     //resquest e o que esta vindo na requisicao
  console.log(request)                                        // response a resposta que vou dar para essa requisicao
  response.end('Hello World!')
})

server.listen(8080)
console.log('servidor executando')
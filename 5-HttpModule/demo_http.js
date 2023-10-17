let http = require('http')

http.createServer(function(req, res) {
  res.write('Hello World') //escreve a resposta para o cliente
  res.end() //finaliza a resposta
}).listen('8080') //o server se encontra na porta 8080
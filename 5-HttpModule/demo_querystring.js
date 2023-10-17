let http = require('http')
let url = require('url')

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  let q = url.parse(req.url, true).query //PARSE analisa uma string json e retorna um objeto js
  let txt = q.year + ' ' + q.month //irá retornar na tela o ano e mês que estará na url
  res.end(txt)
}).listen(8080)
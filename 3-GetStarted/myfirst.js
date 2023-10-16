let http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('Hello World!')
}).listen(8080)

//Os arquivos Node.js devem ser iniciados no programa "Command Line Interface"
//http://localhost:8080
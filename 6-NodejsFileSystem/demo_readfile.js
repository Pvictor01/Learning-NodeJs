let http = require('http')
let fs = require('fs')

http.createServer(function(req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Conten-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
}).listen(8080)
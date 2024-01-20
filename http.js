const http= require('http')
const PORT = 3000

const server= http.createServer((req, res) => {
    //res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Hello World\n')
    res.end('Hello World del end\n')
}).listen(PORT)

console.log(`escuchando en el servidor del port ${PORT}`)
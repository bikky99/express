

//every name in node js is module and with private scope

// (function(exports, require, module, __filename, __dirname) {
//     const name = 'xyz'

//     console.log(name);
// })

// var a = 'jhj'

// informational response = 100-199
// Successful response = 200-299
//Redirects = 300-399
//client errors = 400-499
// Server error = 500-599

// const http = require('http');
// const fs = require('fs');

// const data = fs.readFileSync(`${__dirname}/apihai.json`, 'utf-8')
//     // console.log(data);
    
//     const gg = JSON.parse(data)


// const server = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.end('<h1>Other side heelo</h1>')
//     }
//     else if (req.url == '/userapi') {
//         res.writeHead(200, {'content-type':'application/json'})
//         res.end(gg[1].firstName)
//     }
//     else {
//         res.writeHead(404, {'Content-type':'text/html'})
//         res.end('')
    
//     }
// })

// server.listen('3000', () => {
//     console.log('Listening');
// })

// const bio = {
//     name: 'xyz',
//     age: 24
// }

// const json = JSON.stringify(bio)
// console.log(json);


// const EventEmitter = require('events');

// const event = new EventEmitter();

// event.on('sayMyName', () => {
//     console.log('Here we go!')
// })

// event.emit('sayMyName');

// event.on('checkPage', (sc, msg) => {
//     console.log(`status code is ${sc} and the page is ${msg}`)
// })

// event.emit('checkPage', 200, "ok")

//

const { log } = require('console');
const fs = require('fs')
const http = require('http');

const server = http.createServer();

// server.on('request', (req, res) =>{
//     // fs.writeFile('input.txt', 'hyyy', (err) => {
//     //     res.end('HI');
//     // })

//     const rstream = fs.createReadStream('input.txt')
//     rstream.on('data', (chunkdata) => {
//         res.write(chunkdata)
//     }
// )
// rstream.on('end', () =>{
//     res.end();
// })
// })

server.listen(3000)


const fs = require('fs');
const http = require('http');
const os = require('os');

const { data } = require('./data');

console.log('Hello Node.js');

// Logging global objects
console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(exports);
console.log(module.exports === exports);

// Blocking vs Non-blocking IO
const content = fs.readFileSync('./data.js', 'utf8');
console.log(content);

fs.readFile('./data.js', 'utf8', (err, content) => {
  console.log(content);
});

// Logging the content of the data
console.log(data);

// Creating a server
http
  .createServer((req, res) => {
    switch (req.url) {
      case '/api/data':
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.write(JSON.stringify(data));
        break;
      case '/api/online':
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(200);
        res.write(os.uptime().toString());
        break;
    }
    res.end();
  })
  .listen(3000);

console.log('Listening on port 3000');

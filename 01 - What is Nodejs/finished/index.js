const fs = require('fs');

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

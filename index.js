const http = require('node:http'); // to create a server
const fs = require('node:fs'); // to read and right pages (fs => file system)
const url = require('node:url'); // to get urls
// must install dotenv (npm install dotenv --save)
// make an .env (add it to gitignore) and in the .env put the environment variables 
// then use process.env.NAME of variable
// require("dotenv").config(); // import like so

const routes = {
  '/': './index.html',
  '/about-me': './about.html',
  '/contact-me': './contact-me.html',
}

const server = http.createServer((req, res) => {
  let path = url.parse(req.url).pathname;
  path = routes[path] || './404.html';
  
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.write('<h1>500 Internal Server Error</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
    }
    res.end();
  });
})

server.listen(8080);
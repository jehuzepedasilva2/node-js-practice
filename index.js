const http = require('node:http');
const fs = require('node:fs');
const url = require('node:url');

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
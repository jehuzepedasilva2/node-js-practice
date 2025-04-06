const express = require('express');
require('dotenv').config();

const app = express();
// __dirname is name of this directory
// e.g /Users/jehuzepeda-silva/Desktop/Odin/repos/node-js-practice

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/about-me', (req, res) => { 
  res.sendFile('about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
  res.sendFile('contact-me.html', { root: __dirname });
});

/**
 * GET /odin/messages/79687378 will have this log
 * { username: "odin", messageId: "79687378" }
 */
app.get("/:username/messages/:messageId", (req, res) => {
  res.send(req.params.username);
});

// Query parameters are a unique and optional part of a URL that appear at the end. 
// A ? denotes the start of the query parameters, 
// with each query being a key-value pair with the format key=value,
// and each query separated by an &
/**
 *  GET /odin/messages?sort=date&sort=likes&direction=ascending will log
* Params: { username: "odin" }
* Query: { sort: ["date", "likes"], direction: "ascending" }
*/
app.get("/:username/messages", (req, res) => {
 console.log("Params:", req.params);
 console.log("Query:", req.query);
  res.end();
});


// catches all, order matters, this cant be first
// In Express 4.x, the * character in regular expressions is not interpreted in the usual way. As a workaround, use {0,} instead of *. This will likely be fixed in Express 5.
app.get('/{0,}', (req, res) => {
  res.sendFile('404.html', { root: __dirname });
})

app.listen(process.env.PORT);



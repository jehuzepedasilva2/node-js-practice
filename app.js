const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/about-me', (req, res) => {
  res.sendFile('about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
  res.sendFile('contact-me.html', { root: __dirname });
});

app.listen(process.env.PORT);



const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = name => {
    res.sendFile(path.join(__dirname, `/views/${name}show`));
  };
  next();
})

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});
app.get('/contact', (req, res) => {
  res.show('contact.html');
});
app.get('/info', (req, res) => {
  res.show('info.html');
});
app.get('/history', (req, res) => {
  res.show('history.html');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
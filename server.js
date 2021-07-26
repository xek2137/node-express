const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));


app.use((req, res, next) => {
  res.show = name => {
    res.sendFile(path.join(__dirname, `views/${name}`));
  };
  next();
});
app.use('/user/:id', (req, res, next) => {
  res.show('forbidden.html');
  next()
})

app.get(['/', '/home'], (req, res) => {
  res.show('home.html');
});
app.get('/about', (req, res) => {
  res.show('about.html');
});
app.get('/contact', (req, res) => {
  res.show('contact.html');
});
app.get('/user', (req, res) => {
  res.show('forbidden.html')
});
app.get('/history', (req, res) => {
  res.show('history.html');
});

app.use((req, res) => {
  res.status(404).show('404.html');
});
app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});

const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();
app.engine('hbs', hbs({extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main'}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.get(['/', '/home/'], (req, res) => {
  res.render('home');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});
app.get('/info', (req, res) => {
  res.render('info');
});
app.get('/history', (req, res) => {
  res.render('history');
});

app.use((req, res) => {
  res.status(404).render('404', {layout: false});
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});

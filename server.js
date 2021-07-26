const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();
app.engine('hbs', hbs({extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main'}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.use('/user/:id', (req, res, next) => {
  res.render('forbidden', {layout: false});
  next()
})

app.get(['/hello/:name', '/hello'], (req, res) => {
  res.render('hello', {layout: false, name: req.params.name});
});
app.get(['/', '/home/'], (req, res) => {
  res.render('home', {layout: false});
});
app.get('/about', (req, res) => {
  res.render('about', {layout: false});
});
app.get('/user', (req, res) => {
  res.render('forbidden', {layout: false})
});

app.use((req, res) => {
  res.status(404).render('404', {layout: false});
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});

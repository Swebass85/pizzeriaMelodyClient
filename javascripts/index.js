const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    year: new Date().getFullYear()
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
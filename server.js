const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/create', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  console.log(name);
  res.render("resume.ejs", {
    name: name,
    email: email,
    phone: phone,
    address: address,
  })
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

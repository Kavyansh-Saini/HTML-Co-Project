const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware for parsing application/json
app.use(bodyParser.json());
// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
  res.render('index');
});

// Route for the create page
app.get('/create', (req, res) => {
  res.render('create', {
    title: 'Web Resume - Create Professional Resumes in Minutes',
    heading: 'Web Resume',
    description: 'Create stunning, professional resumes in minutes. Stand out from the crowd and land your dream job with our easy-to-use resume builder.',
    buttonText: 'Create Your Resume Now',
    features: [
      { title: 'Professional Templates', description: 'Choose from a variety of ATS-friendly designs.' },
      { title: 'Easy Customization', description: 'Tailor your resume with our intuitive editor.' },
      { title: 'Instant Download', description: 'Get your resume in PDF format immediately.' }
    ]
  });
});


// Route to handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.send(`Form submitted! Name: ${name}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

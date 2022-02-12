// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const snackController = require('./controllers/snackController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use('/snacks', snackController);

// ROUTES
app.get('/', (_, response) => {
  response.status(200).json('Welcome to our Snack App');
});

// EXPORT
module.exports = app;

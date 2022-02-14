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
  response.status(200).send("Get Snack'n at Snack-a-log!");
});

app.get('*', (_, response) => {
  response.status(200).json({ route: "'/*' get route" });
});

// EXPORT
module.exports = app;

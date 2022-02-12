// import express
const express = require('express');

//create our controller
const snackController = express.Router();

//create "/" route
snackController.get('/', (_, response) => {
  response.status(200).json({ route: '/snacks' });
});

// export our controller
module.exports = snackController;

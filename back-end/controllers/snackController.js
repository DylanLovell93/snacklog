// import express
const express = require('express');

//create our controller
const snackController = express.Router();

//create "/" get route
snackController.get('/', (_, response) => {
  response.status(200).json({ route: '/snacks route' });
});

//create "/:id" get route
snackController.get('/:id', (request, response) => {
  const { id } = request.params;
  response.status(200).json({ route: `/snacks/${id} route` });
});

// export our controller
module.exports = snackController;

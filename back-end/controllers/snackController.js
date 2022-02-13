// import express
const express = require('express');

//create our controller
const snackController = express.Router();

//create "/" get route
snackController.get('/', (_, response) => {
  response.status(200).json({ route: '/snacks get route' });
});

//create "/:id" get route
snackController.get('/:id', (request, response) => {
  const { id } = request.params;
  response.status(200).json({ route: `/snacks/${id} get route` });
});

//create "/:id" delete route
snackController.delete('/:id', (request, response) => {
  const { id } = request.params;
  response.status(200).json({ route: `/snacks/${id} delete route` });
});

//create "/" post route
snackController.post('/:id', (request, response) => {
  const { body: newPost } = request;
  response.status(200).json({ route: '/snacks post route' });
});

// export our controller
module.exports = snackController;

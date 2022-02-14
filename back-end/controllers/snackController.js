// import express
const express = require('express');
const res = require('express/lib/response');

//create our controller
const snackController = express.Router();

//import db queries
const {
  getAllSnacks,
  getOneSnack,
  deleteSnack,
  updateSnack,
  addSnack,
} = require('../queries/snacks');

//create "/" get route
snackController.get('/', async (_, response) => {
  try {
    const allSnacks = await getAllSnacks();
    response.status(200).json(allSnacks);
  } catch (error) {
    response.status(500).json(error);
  }
});

//create "/:id" get route
snackController.get('/:id', async (request, response) => {
  const { id } = request.params;
  try {
    const targetSnack = await getOneSnack(id);
    response.status(200).json({ success: true, payload: targetSnack });
  } catch (error) {
    response.status(404).json({ success: false, payload: 'not found' });
  }
});

//create "/:id" delete route
snackController.delete('/:id', async (request, response) => {
  const { id } = request.params;
  try {
    const deletedSnack = await deleteSnack(id);
    response.status(200).json({ success: true, payload: deletedSnack });
  } catch (error) {
    response.status(404).json({ success: false, payload: 'not found' });
  }
});

//create "/" post route
snackController.post('/', (request, response) => {
  const { body: newPost } = request;
  response.status(200).json({ route: '/snacks post route' });
});

//create "/:id" put route
snackController.put('/:id', (request, response) => {
  const { id } = request.params;
  response.status(200).json({ route: `/snacks/${id} put route` });
});

// export our controller
module.exports = snackController;

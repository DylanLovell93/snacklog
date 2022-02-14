// import express
const express = require('express');

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

//import helper functions
const { formatSnack } = require('../helpers/helperfuncs');
const { confirmHealth } = require('../confirmHealth.js');

//create "/" get route
snackController.get('/', async (_, response) => {
  try {
    const allSnacks = await getAllSnacks();
    response.status(200).json({ success: true, payload: allSnacks });
  } catch (error) {
    response.status(404).json({ success: false, payload: error });
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
snackController.post('/', async (request, response) => {
  const newPost = formatSnack(request.body);
  console.log(confirmHealth(newPost));
  try {
    const addedSnack = await addSnack(newPost);
    response.status(200).json({ success: true, payload: addedSnack });
  } catch (error) {
    response.status(500).json({ success: false });
  }
});

//create "/:id" put route
snackController.put('/:id', async (request, response) => {
  const { id } = request.params;
  const newPost = formatSnack(request.body);
  newPost.is_healthy = confirmHealth(newPost);
  try {
    const editedPost = await updateSnack(id, newPost);
    response.status(200).json({ success: true, payload: editedPost });
  } catch (error) {
    response.status(404).json({ success: false, payload: error });
  }
});

// export our controller
module.exports = snackController;

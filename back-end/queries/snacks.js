//import database
const db = require('../db/dbConfig.js');

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any('SELECT * FROM snacks');
    return allSnacks;
  } catch (error) {
    throw error;
  }
};

const getOneSnack = async (id) => {
  try {
    const targetSnack = await db.one('SELECT * FROM snacks WHERE id=$1', id);
    return targetSnack;
  } catch (error) {
    throw error;
  }
};

const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      'DELETE from snacks WHERE id=$1 RETURNING *',
      id
    );
    return deletedSnack;
  } catch (error) {
    throw error;
  }
};

const updateSnack = async (
  id,
  { name, image, fiber, protein, added_sugar, is_healthy }
) => {
  const queryArr = [name, image, fiber, protein, added_sugar, is_healthy, id];
  try {
    const updatedSnack = db.one(
      'UPDATE snacks SET WHERE name=$1, image=$2, fiber=$3, protein=$4, added_sugar=$5, is_healthy=$6 id=$7 RETURNING *',
      queryArr
    );
    return updatedSnack;
  } catch (error) {
    throw error;
  }
};

const addSnack = async ({
  name,
  image,
  fiber,
  protein,
  added_sugar,
  is_healthy,
}) => {
  const queryArr = [name, image, fiber, protein, added_sugar, is_healthy];
  try {
    const addedSnack = db.one(
      'INSERT INTO snacks (name, image, fiber, protein, added_sugar, is_healthy) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      queryArr
    );
    return addedSnack;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSnacks,
  getOneSnack,
  deleteSnack,
  updateSnack,
  addSnack,
};

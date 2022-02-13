//import database
const db = require('../db/dbConfig.js');

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any('SELECT * FROM snacks');
    return allSnacks;
  } catch (error) {
    return error;
  }
};

const getOneSnack = async (id) => {
  try {
    const targetSnack = await db.one('SELECT * FROM snacks WHERE id=$1', id);
    return targetSnack;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllSnacks, getOneSnack };

const confirmHealth = ({ protein, fiber, added_sugar }) => {
  const validInputs =
    typeof protein === 'number' &&
    typeof fiber === 'number' &&
    typeof added_sugar === 'number';
  const isHealthy = (protein >= 5 || fiber >= 5) && added_sugar < 5;
  return validInputs ? isHealthy : null;
};

module.exports = { confirmHealth };

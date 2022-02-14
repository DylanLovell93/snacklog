const formatSnack = (snack) => {
  //grab name out of snack
  const { name } = snack;
  //format the name
  const formatName = name
    .split(' ')
    .map((e) =>
      e.length > 2 ? e[0].toUpperCase() + e.slice(1).toLowerCase() : e
    )
    .join(' ');
  //put it back in the snack
  snack.name = formatName;
  // if the snack doesn't have a picture, give it one
  snack.image =
    snack.image ||
    'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image';
  //return snack
  return snack;
};

module.exports = { formatSnack };

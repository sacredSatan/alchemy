const getPirateById = (Pirate) => {
  return (req, res, next) => {
    Pirate.find({
      where: {
        id: req.params.pirateId,
      }
    })
    .then((pirate) => {
      if(pirate) {
        req.pirate = pirate;
        next();
      } else {
        res.status(404).send('No pirate found!');
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  }
}

export {getPirateById};

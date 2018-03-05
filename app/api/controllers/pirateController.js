const pirateListController = (Pirate) => {
  const post = (req, res) => {
    Pirate.create(req.body)
    .then((savedPirate) => {
      res.status(201).send(savedPirate);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  };
  const get = (req, res) => {
    Pirate.findAll()
    .then((pirates) => {
      res.json(pirates);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  };
  return {
    post,
    get,
  };
};

const pirateDetailController = (Pirate) => {
  const get = (req, res) => {
    res.json(req.pirate);
  }

  const put = (req, res) => {
    if(req.body.name) {
      req.pirate.name = req.body.name;
      req.pirate.save()
        .then((savedPirate) => {
          res.json(savedPirate);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    } else {
      res.status(500).send('Invalid value for name.');
    }
  };

  const patch = put;

  const del = (req, res) => {
    req.pirate.destroy()
      .then(() => {
        res.status(204).send('Pirate removed!');
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  return {
    get,
    put,
    patch,
    del,
  };
};

export {pirateListController, pirateDetailController};

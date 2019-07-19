const models = require('../models');
const Treasury = models.Treasury;

module.exports = {

  index: function(req, res, next) {
    Treasury.findAll()
      .then((treasuries) => {res.json({treasuries});})
      .catch((error) => {console.log(error); })
  },

  show: function (req, res, next) {
      Treasury.findByPk(req.params.id)
        .then((treasury) => {res.json({ treasury });})
        .catch((error) => res.status(500).json({ error }));
    },

  update: function(req, res, next){
    Treasury.findByPk(req.params.id)
      .then((treasury) => {
        treasury.update({
          totalNormalTickets: req.body.totalNormalTickets,
          totalDeluxeTickets: req.body.totalDeluxeTickets,
          photos: req.body.photos,
          meals: req.body.meals,
          drinks: req.body.drinks,
          totalCash: req.body.totalCash
        })
          .then((updatedTreasury) => {res.json({ treasury: updatedTreasury }); })
          .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
      },

  create: function(req, res, next){
    Treasury.create ({
      totalNormalTickets: req.body.totalNormalTickets,
      totalDeluxeTickets: req.body.totalDeluxeTickets,
      photos: req.body.photos,
      meals: req.body.meals,
      drinks: req.body.drinks,
      totalCash: req.body.totalCash
    })
      .then((treasury) => {res.json({ treasury });})
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error });
      });
  },

  delete: function(req, res, next){
    Treasury.findByPk(req.params.id)
        .then((treasury) => {
          treasury.destroy()
            .then((treasury) => { res.json({ message: 'treasury has been deleted !' }); })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error)
        );

  }
};

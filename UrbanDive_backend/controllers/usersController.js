const models = require('../models');
const User = models.User;

module.exports = {

  index: function(req, res, next) {
    User.findAll()
      .then((users) => {res.json({users});})
      .catch((error) => {console.log(error); })
  },

  show: function (req, res, next) {
      User.findByPk(req.params.id)
        .then((user) => {res.json({ user });})
        .catch((error) => res.status(500).json({ error }));
    },

  update: function(req, res, next){
    User.findByPk(req.params.id)
      .then((user) => {
        user.update({
          pseudo: req.body.pseudo,
          poolId: req.body.poolId,
          ticket: true,
          message: req.body.message,
          vote: req.body.vote,
          photo: true,
          nbPhoto: req.body.nbPhoto
        })
          .then((updatedUser) => {res.json({ user: updatedUser }); })
          .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
      },

  create: function(req, res, next){
    User.create ({
      pseudo: req.body.pseudo,
      poolId: req.body.poolId,
      ticket: true,
      message: req.body.message,
      vote: req.body.vote,
      photo: true,
      nbPhoto: req.body.nbPhoto
    })
      .then((user) => {res.json({ user });})
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error });
      });
  },

  delete: function(req, res, next){
    User.findByPk(req.params.id)
        .then((user) => {
          user.destroy()
            .then((user) => { res.json({ message: 'user has been deleted !' }); })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error)
        );

  }
};

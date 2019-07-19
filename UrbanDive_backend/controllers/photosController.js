const models = require('../models');
const Photo = models.Photo;

module.exports = {

  index: function(req, res, next) {
    Photo.findAll()
      .then((photos) => {res.json({photos});})
      .catch((error) => {console.log(error); })
  },

  show: function (req, res, next) {
      Photo.findByPk(req.params.id)
        .then((photo) => {res.json({ photo });})
        .catch((error) => res.status(500).json({ error }));
    },

  update: function(req, res, next){
    Photo.findByPk(req.params.id)
      .then((photo) => {
        photo.update({
          userId:req.body.userId
        })
          .then((updatedPhoto) => {res.json({ photo: updatedPhoto }); })
          .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
      },

  create: function(req, res, next){
    Photo.create ({
      userId:req.body.userId
    })
      .then((photo) => {res.json({ photo });})
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error });
      });
  },

  delete: function(req, res, next){
    Photo.findByPk(req.params.id)
        .then((photo) => {
          photo.destroy()
            .then((photo) => { res.json({ message: 'photo has been deleted !' }); })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error)
        );

  }
};

const models = require('../models');
const Pool = models.Pool;

module.exports = {

  index: function(req, res, next) {
    Pool.findAll()
      .then((pools) => {res.json({pools});})
      .catch((error) => {console.log(error); })
  },

  show: function (req, res, next) {
      Pool.findByPk(req.params.id)
        .then((pool) => {res.json({ pool });})
        .catch((error) => res.status(500).json({ error }));
    },

  update: function(req, res, next){
    Pool.findByPk(req.params.id)
      .then((pool) => {
        pool.update({
          name: req.body.name,
          totalUsers: req.body.totalUsers,
          normalUsers: req.body.normalUsers,
          deluxeUsers: req.body.deluxeUsers
        })
          .then((updatedPool) => {res.json({ pool: updatedPool }); })
          .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
      },

  create: function(req, res, next){
    Pool.create ({
      name: req.body.name,
      totalUsers: req.body.totalUsers,
      normalUsers: req.body.normalUsers,
      deluxeUsers: req.body.deluxeUsers
    })
      .then((pool) => {res.json({ pool });})
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error });
      });
  },

  delete: function(req, res, next){
    Pool.findByPk(req.params.id)
        .then((pool) => {
          pool.destroy()
            .then((pool) => { res.json({ message: 'pool has been deleted !' }); })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error)
        );

  }
};

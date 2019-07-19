var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');
/* GET users listing. */
router.get('/',usersController.index);

router.get('/:id',usersController.show);

router.post('/', usersController.create);

router.put('/:id', usersController.update);

router.delete('/:id',usersController.delete );


module.exports = router;

var express = require('express');
var router = express.Router();

const poolsController = require('../controllers/poolsController');
/* GET pools listing. */
router.get('/',poolsController.index);

router.get('/:id',poolsController.show);

router.post('/', poolsController.create);

router.put('/:id', poolsController.update);

router.delete('/:id',poolsController.delete );


module.exports = router;

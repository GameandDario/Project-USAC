var express = require('express');
var router = express.Router();

const photosController = require('../controllers/photosController');
/* GET photos listing. */
router.get('/',photosController.index);

router.get('/:id',photosController.show);

router.post('/', photosController.create);

router.put('/:id', photosController.update);

router.delete('/:id',photosController.delete );


module.exports = router;

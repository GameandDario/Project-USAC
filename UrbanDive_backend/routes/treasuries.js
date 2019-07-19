var express = require('express');
var router = express.Router();

const treasuriesController = require('../controllers/treasuryController');
/* GET treasuries listing. */
router.get('/',treasuriesController.index);

router.get('/:id',treasuriesController.show);

router.post('/', treasuriesController.create);

router.put('/:id', treasuriesController.update);

router.delete('/:id',treasuriesController.delete );


module.exports = router;


   
var express = require('express');
const { route } = require('.');
var router = express.Router();

const flightsCtrl = require('../controllers/flights')


/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);


module.exports = router;
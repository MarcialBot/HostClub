const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');


router.get('/', eventsCtrl.index);
router.get('/:id', eventsCtrl.show);
router.get('/new', eventsCtrl.new);
router.post('/', eventsCtrl.create);
router.delete('/:id', eventsCtrl.delete);

module.exports = router;
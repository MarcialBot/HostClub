const router = require('express').Router();
const suppliesCtrl = require('../controllers/supplies');

router.get('/supplies/new', suppliesCtrl.new);
router.post('/supplies', suppliesCtrl.create);
router.post('/events/:id/supplies', suppliesCtrl.addToSupplies);



//-------- /:id/supplies/:supply_id


module.exports = router;
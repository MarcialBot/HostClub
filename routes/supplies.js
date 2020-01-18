const router = require('express').Router();
const suppliesCtrl = require('../controllers/supplies');

router.get('/', suppliesCtrl.index);
router.get('/supplies/new', suppliesCtrl.newSupply);
router.post('/supplies', suppliesCtrl.create);
router.get('/:id', suppliesCtrl.show);
router.delete('/:id', suppliesCtrl.deleteSupply);
router.post('/events/:id/supplies', suppliesCtrl.addSupplies);

module.exports = router;
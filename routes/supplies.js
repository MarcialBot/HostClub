const router = require('express').Router();
const suppliesCtrl = require('../controllers/supplies');

router.get('/', suppliesCtrl.index);
router.get('/new', suppliesCtrl.newSupply);
router.get('/:id', suppliesCtrl.show);
router.post('/', suppliesCtrl.create);
router.delete('/:id', suppliesCtrl.deleteSupply);

module.exports = router;
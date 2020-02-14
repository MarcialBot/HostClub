const router = require('express').Router();
const suppliesCtrl = require('../controllers/supplies');

router.get('/', suppliesCtrl.index);
router.get('/new', suppliesCtrl.newSupply);
router.post('/', suppliesCtrl.create);
router.get('/:id', suppliesCtrl.show);
router.delete('/:id', suppliesCtrl.deleteSupply);



//-------- /:id/supplies/:supply_id


module.exports = router;
const router = require('express').Router();
const userCtrl = require('../controllers/users');


router.get('users', isLoggedIn, userCtrl.index);
router.post('/events', isLoggedIn, userCtrl.addEvent);
router.delete('/events/:id', isLoggedIn, userCtrl.deleteEvent);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;
const express= require('express');
const router = express.Router();

router.post('./login', (req, res) => {
	passport.authenticate('local', {
		successRedirect: '/dashboard',
		failureRedirect: '/login',
	}) (req, res);
});

router.get('/logout', (req, res) => {
	req.logout();
	res.render("enter logout page here");
})

module.exports = router;
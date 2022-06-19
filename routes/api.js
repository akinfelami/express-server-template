var express = require('express');
var router = express.Router();

// Admin user route. Basic auth to make end point private

router.get('/', (req, res) => {
	res.send({ result: 'Welcome to the api' });
});

module.exports = router;

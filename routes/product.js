var express = require('express');
var router = express.Router();
var User = require("../models/product.model")

/* GET users listing. */
router.get('/', function (req, res, next) {
	User.find(function (err, items) {
		if (err) {
			return next(err);
		}
		res.render('product', {
			title: 'Product List',
			data: items
		});
		// res.json(items); // Dòng này chỉ bật khi viết API
	});

});

module.exports = router;

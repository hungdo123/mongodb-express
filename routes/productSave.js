var express = require('express');
var crypto = require("crypto")
var router = express.Router();
var Product = require("../models/product.model")

router.post('/', function (req, res, next) {
	let {
		ProductCode,
		ProductName,
		Price
	} = req.body;

	let hashKey = crypto.randomBytes(5).toString('hex') + '-' + crypto.randomBytes(10).toString('hex') + '-' + crypto.randomBytes(5).toString('hex') + '-' + crypto.randomBytes(5).toString('hex');
	
	var myData = new Product({
		key: hashKey,
		productCode: ProductCode,
		productName: ProductName,
		price: Price
	});
	myData.save().then(item => {
		res.redirect("/product")
			// res.send(item); // Chỉ bật lên khi viết APIs
		})
		.catch(err => {
			next(err);
			res.status(400).send("unable to save to database");
		});
})

module.exports = router;

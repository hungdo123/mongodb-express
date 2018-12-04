var mongoose = require('mongoose')
var Schema = mongoose.Schema

var productSchema = new Schema({
	key: String,
	productCode: String,
	productName: String,
	price: String,
}, {
	timestamps: true
})

var Product = mongoose.model('Product', productSchema)

module.exports = Product

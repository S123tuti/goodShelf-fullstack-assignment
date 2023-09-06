const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  oneLiner: String,
  price: Number,
  quantity: Number,
  sectionName: String,
  image: String,
});

module.exports = mongoose.model('Product', productSchema);

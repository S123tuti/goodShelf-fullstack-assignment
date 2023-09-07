const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');
const app = express();


mongoose.connect("mongodb+srv://stuti3007:w14E1dmx6wAE1h7i@cluster0.rrvbnsb.mongodb.net/goodshelf" , { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})

  .then(() =>console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  app.listen(process.env.PORT || 3000, function(){
    console.log("express is running port" + (process.env.PORT||3000))

  } )

//   API route for fetching the data......

  app.get('/api/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

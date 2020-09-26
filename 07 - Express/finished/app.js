const express = require('express');
const morgan = require('morgan');

const productRoutes = require('./routes/products');

const app = express();

// Setting up middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting up routes
app.use('/products', productRoutes);

// Creating a server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

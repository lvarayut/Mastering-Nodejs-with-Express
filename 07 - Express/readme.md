## 07 Express

### Installing Postman for testing routes

1. Install the [Postman](postman.com/downloads/) application

### Setting up a server using Express

1. Create a new file called `app.js`
2. Install the `express` package and save it to the list of dependencies
3. Inside the `app.js`

   - Import the `express` and create a server that listens to port 3000
   - Set the `express.json` and `express.urlencoded` middleware:

     ```js
     app.use(express.json());
     app.use(express.urlencoded({ extended: false }));
     ```

### Updating the scripts

1. In the `package.json`, update the scripts to run `app.js` instead of `index.js`:

   ```json
   "scripts": {
      "start": "node app.js",
      "dev": "nodemon app.js"
   }
   ```

2. Run `npm run dev` to test the server

### Creating routes

1. Create a new folder called `routes` in the root directory
2. Create a new file inside the `routes` folder called `products.js`
3. In the `product.js` file, it should have the following routes:

   - GET `/api/products` returns the content of the `data.js` as an array in JSON format
   - GET `/api/products/:id` returns only one product that matches the given id in JSON format
   - POST `/api/products` creates a new product based on the given `req.body`. After creating the new product, return it in JSON format

     > Note that the product id must be automatically generated

     ```js
     let currentProductId = 9;
     router.post('/', (req, res) => {
        // When creating the product, make sure to increase the currentProductId by 1
     }
     ```

   - PUT `/api/products/:id` updates a product, which matches the given id, with the new product data. After updating the product, return it in JSON format
   - DELETE `/api/products/:id` deletes a product that matches the given id. After deleting the product, send a `204` status

4. Use Postman to call to each API route

### Setting up middleware

1. Install the `morgan` package and save it to the list of dev dependencies
2. Set it up as the Application Level Middleware:

   ```js
   app.use(morgan('tiny'));
   ```

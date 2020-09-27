## 08 Postgres

### Installing dependencies

1. Install `sequelize`, `pg`, and `pg-hstore` packages and save them to the dependencies list

### Setting up the Postgres database

1. In your Postgres database, create a database called `mastering-nodejs-with-express`
1. Create a new folder called `config` in the root directory
1. Create a `database.js` file inside the `config` folder
1. In the `database.js` file, create a new sequelize instance that connects to your local Postgres database

   ```js
   const sequelize = new Sequelize(
     'mastering-nodejs-with-express', // Database name
     'postgres', // Username
     'postgres', // Password
     {
       host: 'localhost', // Connect to your local database
       dialect: 'postgres' // Tell sequelize to use Postgres
     }
   );
   ```

1. Create a function called `connect` that is used to test the connection by using the `sequelize.authenticate` method
1. Create a function called `sync` that is used to sync the sequelize with the database by using the `sequelize.sync` method
1. Export the `sequelize`, `connect`, `sync` variables, therefore, you can use them in other files

   ```js
   module.exports = { sequelize, connect, sync };
   ```

### Connecting to Postgres

1. In the `app.js` file, import the `connect` and `sync` variables from `database.js`

2. Create a function called `initializeDatabase` that uses the `connect` and `sync` functions:

   ```js
   async function initializeDatabase() {
     await connect();
     await sync();
   }
   initializeDatabase();
   ```

### Creating a Product model

1. Create a new folder called `models` in the root directory
2. Create a new file inside the `models` folder called `products.js`
3. Define a model called `Product` that has the following columns

   - `name` has a string type
   - `imageURL` has a string type
   - `type` has a string type

4. Export the model instance, therefore, you can use it in other files

### Updating the routes

1. In your Postgres database, manually add all products in the `data.js` file to the Product table
2. Import the `Product` object from the `models/products` file
3. Update all the routes to use data from Postgres

   - GET `/api/products` uses the `findAll` method to fetch the products data from the database
   - GET `/api/products/:id` uses the `findOne` method to fetch only one product that matches the given id
   - POST `/api/products` uses the `creates` method to create a new product and save it to the database
   - PUT `/api/products/:id` uses the `findOne` method to fetch a product. Then, it uses the `save` method to save a new updated product to the database
   - DELETE `/api/products/:id` uses the `destroy` method to delete a product that matches the given id.

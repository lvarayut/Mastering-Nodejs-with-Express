## 03 - Node Package Manager

### Understanding the differences between `npm` and `npx` commands

1. Install the `cowsay` package globally

2. Run the `cowsay Learning Node.js!` command

3. Uninstall the `cowsay` package

4. Use the `npx` command to run the `cowsay Learning Node.js!` command without installing it in your local machine

### Initializing a new project

1. Create the `package.json` file by using the `npm init` command

2. Install the `nodemon` package without using the `--save-dev` flag

3. Look at the `package.json` file, notice the `nodemon` has been added to the dependencies

4. Install the `nodemon` package using the `--save-dev` flag

5. Look at the `package.json` file once again, and notice the dependencies change

### Setting up the scripts

1. In the `package.json` file, add the following scripts

   ```json
   "scripts": {
      "start": "node index.js",
      "dev": "nodemon index.js"
   }
   ```

2. Run the script by using `npm run dev`

3. Update anything inside the `index.js` file and notice that the server is automatically restarted

## 02 - Modules

### Using the require function

1. In the `index.js` file, use the `require` function to import the `data.js` module

2. Print the content out using the `console.log` method

### Understanding the differences between the `module.exports` and `exports` objects

1. In the `data.js` file, use `exports` instead of `module.exports`

2. In the `index.js` file, import the module and print the content out using the `console.log` method

3. Take time to understand their differences

### Creating a sever

1. In the `index.js` file:
   - Create a server using the `http` module. It must listen to port `3000`
   - Access the server in your web browser, http://localhost:3000/. Notice that the web browser is hanging because you did not send any response back to the web browser yet
   - Understand the differences between the `request` and `response` objects by printing them out using the `console.log` method
   - Return the server uptime in number of seconds. Note that the returned value must be in string type

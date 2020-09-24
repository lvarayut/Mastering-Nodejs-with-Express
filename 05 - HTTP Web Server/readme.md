## 05 HTTP Web Server

### Setting up routing system

1. In the `index.js` file, add the routing system to the server

   - `/api/data`
   - `/api/online`

2. The routes should return the following content

   - If the path is `/api/data`, return the content of the `data.js` in JSON format.
     > Note that you need to use the `JSON.stringify` method to convert the data content into JSON before sending it back
   - If the path is `/api/online`, return the server uptime in number of seconds
     > The `text/plain` content type can be used to send back a plain string

3. Access the API in your web browser:
   - http://localhost:3000/api/data
   - http://localhost:3000/api/online

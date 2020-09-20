## 01 - What is Node.js?

### Running your first Node.js application

1. Create a folder called `mastering-nodejs-with-express`

2. Inside the folder, create a file called `index.js` with the following content:

   ```js
   console.log('Hello Node.js');
   ```

3. Run the file using Node.js:

   ```bash
   node index.js
   ```

### Exploring the global objects

1. Use `console.log` to print out the following variables:

   - global
   - \_\_dirname
   - \_\_filename
   - module
   - exports

2. Take time to understand each variable

3. Check if the `module.exports` object is equal to the `exports` object

### Blocking vs Non-blocking I/O

1. Create a new file called `data.js` with the following data:

   ```js
   const data = [
     {
       id: 1,
       name: 'Silver necklace',
       imageURL: 'necklace.jpg',
       type: 'Indie, Necklace, Woman'
     },
     {
       id: 2,
       name: 'Rayban sun-glasses',
       imageURL: 'sun-glasses.jpg',
       type: 'Black, Rayban, Sun glasses'
     },
     {
       id: 3,
       name: 'Super skinny wool suit',
       imageURL: 'suit.jpg',
       type: 'Suite, Wedding, Black, Man'
     },
     {
       id: 4,
       name: 'Vintage smart watch',
       imageURL: 'watch.jpg',
       type: 'Smart watch, Vintage'
     },
     {
       id: 5,
       name: 'Colorful high heel shoes',
       imageURL: 'shoes.jpg',
       type: 'Shoes, Woman, Indie'
     },
     {
       id: 6,
       name: 'Rectangular vintage purse',
       imageURL: 'purse.jpg',
       type: 'Leather, Resin, Shoulder bag'
     },
     {
       id: 7,
       name: 'Corduroy Shirt',
       imageURL: 'shirt.jpg',
       type: 'T-shirt, Soft cotton'
     },
     {
       id: 8,
       name: 'Ring',
       imageURL: 'ring.jpg',
       type: 'White gold, Diamond, Right'
     },
     {
       id: 9,
       name: 'Maxi yellow Skirt for woman',
       imageURL: 'skirt.jpg',
       type: 'High-waist skirt, Causal skirt'
     }
   ];

   module.exports = data;
   ```

2. In the `index.js` file, read the content inside the `data.js` file (try both blocking and non-blocking methods)

3. Print the content out using the `console.log`

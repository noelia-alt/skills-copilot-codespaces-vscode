// Create web server
// Create a web server that listens on port 3000.
// When you visit http://localhost:3000/comments, it should return the following JSON:
// [
//   {
//     "username": "dilbert",
//     "comment": "I'm a comment!"
//   },
//   {
//     "username": "calvin",
//     "comment": "I'm another comment!"
//   }
// ]
// The server should return the appropriate Content-Type header.

const http = require('http');

const comments = [
  {
    username: 'dilbert',
    comment: 'I\'m a comment!'
  },
  {
    username: 'calvin',
    comment: 'I\'m another comment!'
  }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(comments));
});

server.listen(3000);
console.log('Server listening on port 3000');
// Test it by running node comments.js and visiting http://localhost:3000/comments in your browser.
// You should see the JSON response.
// You can also test it using curl: curl -i http://localhost:3000/comments
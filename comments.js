// Create web server
// Start server
// Create a route for /comments
// Add a POST route for /comments
// Add a GET route for /comments
// Add a DELETE route for /comments
// Add a PUT route for /comments
// Add a PATCH route for /comments
// Add a HEAD route for /comments
// Add a OPTIONS route for /comments
// Add a TRACE route for /comments
// Add a CONNECT route for /comments
// Add a GET route for /comments/:id
// Add a DELETE route for /comments/:id
// Add a PUT route for /comments/:id
// Add a PATCH route for /comments/:id
// Add a HEAD route for /comments/:id
// Add a OPTIONS route for /comments/:id
// Add a TRACE route for /comments/:id
// Add a CONNECT route for /comments/:id

const express = require('express');
const app = express();

app.use(express.json());

const comments = [];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.send(comment);
});

app.delete('/comments', (req, res) => {
  comments.length = 0;
  res.send('All comments are deleted');
});

app.put('/comments', (req, res) => {
  res.send('PUT request to the homepage');
});

app.patch('/comments', (req, res) => {
  res.send('PATCH request to the homepage');
});

app.head('/comments', (req, res) => {
  res.send('HEAD request to the homepage');
});

app.options('/comments', (req, res) => {
  res.send('OPTIONS request to the homepage');
});

app.trace('/comments', (req, res) => {
  res.send('TRACE request to the homepage');
});

app.connect('/comments', (req, res) => {
  res.send('CONNECT request to the homepage');
});

app.get('/comments/:id', (req, res) => {
  res.send(comments[req.params.id]);
});

app.delete('/comments/:id', (req, res) => {
  comments.splice(req.params.id, 1);
  res.send('Comment is deleted');
});

app.put('/comments/:id', (req, res) => {
  res.send('PUT request to the homepage');
});

app.patch('/comments/:id', (req, res) => {
  res.send('PATCH request to the homepage');
});

app.head('/comments/:id', (req, res) => {
  res.send('HEAD request to the homepage');
});

app.options('/comments/:id', (req, res) => {
  res.send('OPTIONS request to the homepage');
});

app.trace('/comments/:id', (req, res) => {
  res.send('TRACE request to the homepage');
});

app.connect('/comments/:id', (req, res) => {
  res.send('CONNECT request to the homepage');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
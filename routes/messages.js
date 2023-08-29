// Importing the dependencies
const express = require('express');

// Importing the middlewares
const auth = require('../middleware/auth');
const { admin, developer, client } = require('../middleware/roles');

// Creating a counter for generating ID
let counter = 100;

// Creating a dummy data to show as a message
let messages = [
  {
    id: counter,
    name: 'Baibhav KC',
    content:
      'This is your developer. I recently created this api to have more understanding of jwt token as well as creating a secured REST API using Node and Express',
  },
];

// Setup the router for express
const router = express.Router();

// Creating route handlers / doing the CRUD operations
router.get('/', [auth, client], async (req, res) => {
  // Send the response
  res.send({
    success: true,
    result: messages,
  });
});

router.post('/', [auth, developer], async (req, res) => {
  // Make a new message and add it
  messages.push({
    id: counter++,
    name: req.body.name,
    content: req.body.content,
  });

  // Finally send the response
  res.status(200).send({
    success: true,
    result: messages,
  });
});

router.delete('/', [auth, admin], async (req, res) => {
  // Delete the message
  messages = messages.filter((message) => {
    message.id !== req.body.id;
  });

  // Finally send the response
  res.status(200).send({
    success: true,
    result: messages,
  });
});

module.exports = router;

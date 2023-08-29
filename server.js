// Importing dependencies
const express = require('express');

// Setup the express server
const app = express();
const port = 3000;

// Importing middlewares into express
app.use(express.json());

// Importing routes
const authRouter = require('./routes/auth');

// Setup all the routes
app.use('/api/auth', authRouter);

// At last starting the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Importing dependencies
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');

// Setting up the express server router at first
const router = express.Router();

// Now on post method
router.post('/', async (req, res) => {
  // Let's create a dummy data so that we don't have to setup a database for storing and fetching the userdata
  const users = [
    {
      email: 'baibhavkc11@gmail.com',
      password: '',
      roles: ['admin', 'developer', 'user'],
    },
  ];

  // Getting the user from the database(right now data is coming from users), if the user is not there then we return an error
  let user = users.find((user) => user.email === req.body.email);
  if (!user) {
    throw new Error('Invalid email or password. Please try again!');
  }

  // Now comparing the password with the password in the database
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) {
    throw new Error('Invalid email or password. Please try again!');
  }

  // Creating a jwt token for more security
  const token = jwt.sign(
    {
      id: user._id,
      roles: user.roles,
    },
    'jwtPrivateKey',
    { expiresIn: '15m' }
  );

  res.send({
    ok: true,
    token: token,
  });
});

// At last exporting the router
module.exports = router;

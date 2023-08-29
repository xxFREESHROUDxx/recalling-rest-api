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
      password: '$2b$11$cHyxTXbU3EVxwrcgwxt/l.cwKV1iHGRsgshCbVAwbkBD9rMi8A4hW',
      roles: ['admin', 'developer', 'client'],
    },
  ];

  // Getting the user from the database(right now data is coming from users), if the user is not there then we return an error
  let user = users.find((user) => user.email === req.body.email);
  if (!user) {
    return res.status(401).send({
      error: 'Invalid email. Please try again with valid email.',
    });
  }

  // Now comparing the password with the password in the database
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) {
    return res.status(401).send({
      error: 'Invalid Password. Please try again with valid password.',
    });
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
    success: true,
    token: token,
  });
});

// At last exporting the router
module.exports = router;

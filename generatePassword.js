// Importing dependencies
const bcrypt = require('bcrypt');

// Just for generating a password using bcrypt to add to the dummydata as we don't have a database for storing that.
(async () => {
  // Hashing the password
  const salt = await bcrypt.genSalt(11);
  console.log(await bcrypt.hash('Qwerty@123', salt));
})();

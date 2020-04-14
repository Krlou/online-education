/* 
    this needs to be on server side, this is just example
*/
const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPass = (password) => {
  let hashedPassword = null;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      // Store hash in your password DB.
      hashedPassword = hash;
    });
  });
  return hashedPassword;
};

const checkPass = (password, hash) => {
  let isValid = false;
  bcrypt.compare(password, hash, function (err, result) {
    // result: boolean, true if password === hash
    isValid = true;
  });
  return isValid;
};

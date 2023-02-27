const { body } = require('express-validator');

exports.validateLoginData = [
  body('email')
    .isEmail()
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .trim()
];

const { body } = require('express-validator');
const validator = require('validator');

exports.validateLoginData = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .trim()
    .customSanitizer(value => validator.escape(value)),
  body('password')
    .isLength({ min: 6 })
    .trim()
    .customSanitizer(value => validator.escape(value))
];

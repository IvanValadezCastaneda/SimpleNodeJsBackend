const { body } = require('express-validator');

exports.validateLoginData = [
  body('name')
    .isName()
    .normalizeName()
    .isLength({ min: 3 })
    .trim()
];

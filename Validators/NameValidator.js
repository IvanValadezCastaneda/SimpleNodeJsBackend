const { body } = require('express-validator');
const validator = require('validator');

const blacklistPattern = /[*|\":<>[\]{}`\\()';@&$]/g;

exports.validateNameData = [
  body('name')
    .isLength({ min: 3 })
    .blacklist(blacklistPattern)
    .withMessage('Name must be at least 3 characters long')
    .custom((value, { req }) => {
      if (!validator.isAlpha(value.replace(/\s/g, ''), 'en-US', {ignore: ' ' })) {
        throw new Error('Name must contain only letters');
      }
      return true;
    })
    .withMessage('Name must contain only letters')
    .trim()
];

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('Creating a new user');
});

router.get('/', (req, res) => {
    res.send('Here is where you should have your users. You can create a new user by making a POST request to the /users endpoint, fetch a users profile by making a GET request to /users/:id and update a users profile by making a PUT request to /users/:id');
});

router.get('/:id', (req, res) => {
    // fetch a user's profile
});

router.put('/:id', (req, res) => {
    // update a user's profile
});

module.exports = router;

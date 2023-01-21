const express = require('express');
const router = express.Router();

router.post('/users', (req, res) => {
    // create a new user
    res.send('Creating a new user');
});

router.get('/users/:id', (req, res) => {
    // fetch a user's profile
    res.send('Here is where you should have your users. You can create a new user by making a POST request to the /users endpoint, fetch a users profile by making a GET request to /users/:id and update a users profile by making a PUT request to /users/:id');
});

router.put('/users/:id', (req, res) => {
    // update a user's profile
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.post('/users', (req, res) => {
    res.send('Creating a new user');
});

router.get('/users', (req, res) => {
    res.send('Here is where you should have your users. You can create a new user by making a POST request to the /users endpoint, fetch a users profile by making a GET request to /users/:id and update a users profile by making a PUT request to /users/:id');
});

//Here is the User Get by Id, right now is disabled but when you are ready to use it beware that you should
//remove this comments and then erase the first get

/*
router.get('/users/:id', (req, res) => {
    // fetch a user's profile
});
*/
router.put('/users/:id', (req, res) => {
    // update a user's profile
});

module.exports = router;

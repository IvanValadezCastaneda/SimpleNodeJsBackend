const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // create a new planta
    res.send('Creating a new planta');
});

router.get('/', (req, res) => {
    res.send("Here is where you should have your plantas. You can create a new planta by making a POST request to the /plantas endpoint, fetch a planta by making a GET request to /plantas/:id and update a planta by making a PUT request to /plantas/:id");
});

router.get('/:id', (req, res) => {
    // fetch a planta's 
});

router.put('/:id', (req, res) => {
    // update a planta's 
});

module.exports = router;
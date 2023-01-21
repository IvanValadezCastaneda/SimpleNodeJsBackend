const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // create a new requisicion
    res.send('Creating a new requisicion');
});

router.get('/', (req, res) => {
    res.send("Here is where you should have your requisiciones. You can create a new requisicion by making a POST request to the /requisiciones endpoint, fetch a requisicion by making a GET request to /requisiciones/:id and update a requisicion by making a PUT request to /requisiciones/:id");
});

router.get('/:id', (req, res) => {
    // fetch a requisicion
});

router.put('/:id', (req, res) => {
    // update a requisicion
});

module.exports = router;
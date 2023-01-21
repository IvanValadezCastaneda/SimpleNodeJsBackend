const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // create a new catalogo
    res.send('Creating a new catalogo');
});

router.get('/', (req, res) => {
    res.send("Here is where you should have your catalog. You can create a new catalog by making a POST request to the /catalog endpoint, fetch a catalog by making a GET request to /catalog/:id and update a catalog by making a PUT request to /catalog/:id");
});

router.get('/:id', (req, res) => {
    // fetch a catalogo
});

router.put('/:id', (req, res) => {
    // update a catalogo
});

module.exports = router;
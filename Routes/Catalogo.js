const express = require('express');
const router = express.Router();

router.post('/catalogos', (req, res) => {
    // create a new catalogo
    res.send('Creating a new catalogo');
});

router.get('/catalogos/:id', (req, res) => {
    // fetch a catalogo
});

router.put('/catalogos/:id', (req, res) => {
    // update a catalogo
});

module.exports = router;
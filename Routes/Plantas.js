const express = require('express');
const router = express.Router();

router.post('/plantas', (req, res) => {
    // create a new planta
    res.send('Creating a new planta');
});

router.get('/plantas/:id', (req, res) => {
    // fetch a planta's 
});

router.put('/plantas/:id', (req, res) => {
    // update a planta's 
});

module.exports = router;
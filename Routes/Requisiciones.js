const express = require('express');
const router = express.Router();

router.post('/requisiciones', (req, res) => {
    // create a new requisicion
    res.send('Creating a new requisicion');
});

router.get('/requisiciones/:id', (req, res) => {
    // fetch a requisicion
});

router.put('/requisiciones/:id', (req, res) => {
    // update a requisicion
});

module.exports = router;
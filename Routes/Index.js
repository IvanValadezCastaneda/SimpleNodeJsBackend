const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to my Simple Node.Js Backend! Here you can create, read, update and delete users, catalogo, requisiciones and plantas');
});

module.exports = router;

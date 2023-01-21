const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    console.log('Welcome to my Simple Node.Js Backend!');
});

app.get('/', (req, res) => {
    res.send('Welcome to my Simple Node.Js Backend!');
});

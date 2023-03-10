//The request of the Enviorment File as entry to avoid the config lines
//require ("dotenv").config();

//To avoid Dos attacks you should limit your rate, this will help
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later",
  });
  

const express = require('express');
const app = express();
//const fs = require('fs');

// Read JSON data from files and store in memory as objects
/*
const catalogoData = JSON.parse(fs.readFileSync('./Data/Catalogo.json'));
const requisicionesData = JSON.parse(fs.readFileSync('./Data/Requisiciones.json'));
const usersData = JSON.parse(fs.readFileSync('./Data/Usuarios.json'));
const plantasData = JSON.parse(fs.readFileSync('./Data/Plantas.json'));
*/
// Import route handlers
const indexRoutes = require('./Routes/Index');
const userRoutes = require('./Routes/Users');
const catalogoRoutes = require('./Routes/Catalogo');
const requisicionesRoutes = require('./Routes/Requisiciones');
const plantasRoutes = require('./Routes/Plantas');

// Use the imported routes
app.use('/', indexRoutes,limiter);
app.use('/users', userRoutes,limiter);
app.use('/catalogo', catalogoRoutes,limiter);
app.use('/requisiciones', requisicionesRoutes,limiter);
app.use('/plantas', plantasRoutes,limiter);

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    console.log('Welcome to my Simple Node.Js Backend!');
});

app.get('/', (req, res) => {
    res.send('Welcome to my Simple Node.Js Backend!');
});




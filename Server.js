const express = require('express');
const app = express();

// Import route handlers
const indexRoutes = require('./Routes/Index');
const userRoutes = require('./Routes/Users');
const catalogoRoutes = require('./Routes/Catalogo');
const requisicionesRoutes = require('./Routes/Requisiciones');
const plantasRoutes = require('./Routes/Plantas');

// Use the imported routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/catalogo', catalogoRoutes);
app.use('/requisiciones', requisicionesRoutes);
app.use('/plantas', plantasRoutes);

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

/*
routes/
    |
    |__ User.js
    |__ Requisiciones.js
    |__ Plantas.js
    |__ Catalogo.js
    |__ Index.js
Server.js
package-lock.json
package.json
*/

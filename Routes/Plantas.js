const PlantasPool = require('../Database/DataBase');

const express = require('express');
const router = express.Router();

//"Here is where you should have your plantas. You can create a new planta
// by making a POST request to the /plantas endpoint, fetch a planta by making a GET request to /plantas/:id and update a planta by making a PUT request to /plantas/:id"

router.post('/', (req, res) => {
  const { name, location } = req.body;
  PlantasPool.query('INSERT INTO plantas (name, location) VALUES ($1, $2)', [name, location], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating planta');
    } else {
      res.status(201).send('Planta created successfully');
    }
  });
});

// get all plantas
router.get('/', (req, res) => {
  PlantasPool.query('SELECT * FROM plantas', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching plantas');
    } else {
      res.send(result.rows);
    }
  });
});

// get a planta by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  PlantasPool.query('SELECT * FROM plantas WHERE id = $1', [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(`Error fetching planta with id ${id}`);
    } else if (result.rows.length === 0) {
      res.status(404).send(`Planta with id ${id} not found`);
    } else {
      res.send(result.rows[0]);
    }
  });
});

// update a planta by id
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, location } = req.body;
  PlantasPool.query('UPDATE plantas SET name = $1, location = $2 WHERE id = $3', [name, location, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(`Error updating planta with id ${id}`);
    } else if (result.rowCount === 0) {
      res.status(404).send(`Planta with id ${id} not found`);
    } else {
      res.send(`Planta with id ${id} updated successfully`);
    }
  });
});

module.exports = router;
const CatalogoPool = require('../Database/DataBase');

const express = require('express');
const router = express.Router();

//"Here is where you should have your catalog. You can create a new catalog by making a POST request to the /catalog endpoint, 
//fetch a catalog by making a GET request to /catalog/:id and update a catalog by making a PUT request to /catalog/:id"

router.post('/', (req, res) => {
    const { name, price } = req.body;
    CatalogoPool.query('INSERT INTO catalog (name, price) VALUES ($1, $2)', [name, price], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error creating catalog');
      } else {
        res.status(201).send('Catalog created successfully');
      }
    });
});

router.get('/', (req, res) => {
    CatalogoPool.query('SELECT * FROM catalog', (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching catalog');
        } else {
          res.send(result.rows);
        }
      });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    CatalogoPool.query('SELECT * FROM catalog WHERE id = $1', [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching catalog');
      } else {
        if (result.rowCount === 0) {
          res.status(404).send('Catalog not found');
        } else {
          res.send(result.rows[0]);
        }
      }
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    CatalogoPool.query('UPDATE catalog SET name = $1, price = $2 WHERE id = $3', [name, price, id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating catalog');
      } else {
        if (result.rowCount === 0) {
          res.status(404).send('Catalog not found');
        } else {
          res.send('Catalog updated successfully');
        }
      }
    });
});

module.exports = router;
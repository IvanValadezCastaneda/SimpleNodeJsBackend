const CatalogoPool = require('../Database/DataBase');

const express = require('express');
const router = express.Router();

//"Here is where you should have your catalogo. You can create a new catalogo by making a POST request to the /catalogo endpoint, 
//fetch a catalogo by making a GET request to /catalogo/:id and update a catalogo by making a PUT request to /catalogo/:id"

router.post('/', (req, res) => {
    const { name, price } = req.body;
    CatalogoPool.query('INSERT INTO catalogo (item_name, price) VALUES ($1, $2)', [name, price], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error creating catalog');
      } else {
        res.status(201).send('Catalog created successfully');
      }
    });
});

router.get('/', (req, res) => {
    CatalogoPool.query('SELECT * FROM catalogo', (err, result) => {
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
    CatalogoPool.query('SELECT * FROM catalogo WHERE item_id = $1', [id], (err, result) => {
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
    CatalogoPool.query('UPDATE catalogo SET item_name = $1, price = $2 WHERE item_id = $3', [name, price, id], (err, result) => {
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
const CatalogoPool = require('../Database/DataBase');

const express = require('express');
const router = express.Router();

//"Here is where you should have your catalogo. You can create a new catalogo by making a POST request to the /catalogo endpoint, 
//fetch a catalogo by making a GET request to /catalogo/:id and update a catalogo by making a PUT request to /catalogo/:id"

router.post('/', (req, res) => {
    const { item_name, brand, price_MXN, price_USD, SKU, shipping_time, weight, size } = req.body;
    CatalogoPool.query('INSERT INTO catalogo (item_name, brand, price_MXN, price_USD, SKU, shipping_time, weight, size) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [item_name, brand, price_MXN, price_USD, SKU, shipping_time, weight, size], (err, result) => {
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
    const { item_name, brand, price_MXN, price_USD, SKU, shipping_time, weight, size } = req.body;
    CatalogoPool.query('UPDATE catalogo SET item_name = $1, brand = $2, price_MXN = $3, price_USD = $4, SKU = $5, shipping_time = $6, weight = $7, size = $8 WHERE item_id = $9', [item_name, brand, price_MXN, price_USD, SKU, shipping_time, weight, size, id], (err, result) => {
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

const RequisicionesPool = require('../Database/DataBase');

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // create a new requisicion
  res.send('Creating a new requisicion');
});

router.get('/', (req, res) => {
  RequisicionesPool.query('SELECT * FROM requisiciones', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching requisiciones');
    } else {
      res.send(result.rows);
    }
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  RequisicionesPool.query('SELECT * FROM requisiciones WHERE id = $1', [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching requisicion');
    } else if (result.rows.length === 0) {
      res.status(404).send('Requisicion not found');
    } else {
      res.send(result.rows[0]);
    }
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { Proyecto, Proveedor, Costo } = req.body;
  RequisicionesPool.query('UPDATE requisiciones SET Proyecto = $1, Proveedor = $2, Costo = $3 WHERE id = $4',
    [Proyecto, Proveedor, Costo, id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating requisicion');
      } else if (result.rowCount === 0) {
        res.status(404).send('Requisicion not found');
      } else {
        res.send('Requisicion updated successfully');
      }
    });
});

module.exports = router;

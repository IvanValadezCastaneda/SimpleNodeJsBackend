const UsersPool = require ('../Database/DataBase');

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email } = req.body;
    UsersPool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error creating user');
      } else {
        res.send('creating the user');
        res.status(201).send('User created successfully');
      }
    });
  });

  router.get('/', (req, res) => {
    UsersPool.query('SELECT * FROM users', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching users');
      } else {
        res.json(result.rows);
      }
    });
  });
  
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    UsersPool.query('SELECT * FROM users WHERE id = $1', [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching user');
      } else if (result.rows.length === 0) {
        res.status(404).send('User not found');
      } else {
        res.json(result.rows[0]);
      }
    });
  });
  
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    UsersPool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating user');
      } else if (result.rowCount === 0) {
        res.status(404).send('User not found');
      } else {
        res.send('User updated successfully');
      }
    });
  });

module.exports = router;

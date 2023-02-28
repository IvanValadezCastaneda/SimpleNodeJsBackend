const UsersPool = require ('../Database/DataBase');


const {validateLoginData} = require ('../Validators/EmailValidatior');
const {validateNameData} = require('../Validators/NameValidator');


const express = require('express');
const router = express.Router();

router.post('/', [
  validateNameData,
  validateLoginData
], (req, res) => {
  const { name, email } = req.body;
  UsersPool.query('INSERT INTO usuarios (name, emails) VALUES ($1, $2)', [name, email], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating user');
    } else {
      res.status(201).send('User created successfully');
    }
  });
});


  router.get('/', (req, res) => {
    UsersPool.query('SELECT * FROM usuarios', (err, result) => {
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
    UsersPool.query('SELECT * FROM usuarios WHERE id = $1', [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(`Error fetching usuario with id ${id}`);
      } else if (result.rows.length === 0) {
        res.status(404).send(`usuario with id ${id} not found`);
      } else {
        res.send(result.rows[0]);
      }
    });
  });


  router.put('/:id', (req, res) => {
    const id = validator.escape(req.params.id); // Sanitize user input
    const { name, email } = req.body;
    const sanitizedName = validator.escape(name); // Sanitize user input
    const sanitizedEmail = validator.escape(email); // Sanitize user input
    UsersPool.query('UPDATE usuarios SET name = $1, email = $2 WHERE id = $3', [sanitizedName, sanitizedEmail, id], (err, result) => {
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

const { Pool } = require('pg');

const pool = new Pool({
  user: 'SimpleNodeJsMaster',
  host: 'Localhost',
  database: 'SimpleNodeJsDataBase',
  password: 'SimpleNodeJsMasterPswd',
  port: 5432,
});

module.exports = pool;

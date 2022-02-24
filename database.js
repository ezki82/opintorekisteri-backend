const Pool = require('pg').Pool;
const connection = new Pool({
  user: 'express',
  host: 'localhost',
  database: 'opintorekisteri',
  password: 'admin',
  port: 5432,
});
module.exports = connection;
const db = require('../database');
const borrower = {
  get: function(callback) {
    return db.query('select * from borrower order by id_borrower desc', callback);
  },
  getByid_borrower: function(id_borrower, callback) {
    return db.query('select * from borrower where id_borrower=$1', [id_borrower], callback);
  },
  add: function(borrower, callback) {
    console.log(borrower);
    return db.query(
      'insert into borrower (first_name, last_name, streetaddress) values($1,$2,$3)',
      [borrower.first_name, borrower.last_name, borrower.streetaddress],
      callback
    );
  },
  delete: function(id_borrower, callback) {
    return db.query('delete from borrower where id_borrower=$1', [id_borrower], callback);
  },
  update: function(id_borrower, borrower, callback) {
    return db.query(
      'update borrower set first_name=$1,last_name=$2, streetaddress=$3 where id_borrower=$4',
      [borrower.first_name, borrower.last_name, borrower.streetaddress, id_borrower],
      callback
    );
  }
};
module.exports = borrower;
const db = require('../database');
const opintojakso = {
  get: function(callback) {
    return db.query('select * from opintojakso order by id desc', callback);
  },
  getByid_opintojakso: function(id_opintojakso, callback) {
    return db.query('select * from opintojakso where id=$1', [id_opintojakso], callback);
  },
  add: function(opintojakso, callback) {
    console.log(opintojakso);
    return db.query(
      'insert into opintojakso (koodi, laajuus, nimi) values($1,$2,$3)',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where id=$1', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set koodi=$1,laajuus=$2, nimi=$3 where id=$4',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi, id],
      callback
    );
  }
};
module.exports = opintojakso;
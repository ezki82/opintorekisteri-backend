const db = require('../database');
const arviointi = {
  get: function(callback) {
    return db.query('select * from arviointi order by id desc', callback);
  },
  getByid_arviointi: function(id, callback) {
    return db.query('select * from arviointi where id=$1', [id], callback);
  },
  add: function(arviointi, callback) {
    console.log(arviointi);
    return db.query(
      'insert into arviointi (paivamaara, arvosana, id_opiskelija, id_opintojakso) values($1,$2,$3,$4)',
      [arviointi.paivamaara, arviointi.arvosana, arviointi.id_opiskelija, arviointi.id_opintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where id=$1', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set paivamaara=$1,arvosana=$2, id_opiskelija=$3, id_opintojakso=$4 where id=$5',
      [arviointi.paivamaara, arviointi.arvosana, arviointi.id_opiskelija, arviointi.id_opintojakso, id],
      callback
    );
  }
};
module.exports = arviointi;
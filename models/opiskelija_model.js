const db = require('../database');

const opiskelija = {
  get: function (callback) {
    return db.query('select * from opiskelija', callback);
  },
  getById: function (id, callback) {
    return db.query('select * from opiskelija where id=?', [id], callback);
  },
  add: function (opiskelija, callback) {
    return db.query('insert into opiskelija (etunimi, sukunimi, osoite, luokkatunnus) values($1,$2, $3, $4)',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus], callback);
  },
  delete: function (id, callback) {
    return db.query('delete from opiskelija where id=$1', [id], callback);
  },
  update: function (id, opiskelija, callback) {
    return db.query('update opiskelija set etunimi=$1, sukunimi=$2, osoite=$3, luokkatunnus=$4 where id=$5',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus, id], callback);
  }

}

module.exports = opiskelija;
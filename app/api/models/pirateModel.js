import Sequelize from 'sequelize';

export default (db) => {
  return db.define('pirate', {
    name: Sequelize.STRING
  });
}

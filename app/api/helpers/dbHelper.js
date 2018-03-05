import Sequelize from 'sequelize';

const getDb = () => {
    return new Sequelize('db', null, null, {
      dialect: 'sqlite',
      storage: './db.sqlite'
    });
  };

export {getDb};

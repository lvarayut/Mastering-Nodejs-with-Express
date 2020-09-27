const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'mastering-nodejs-with-express',
  'postgres',
  'postgres',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

async function sync() {
  try {
    await sequelize.sync();
    console.log('Connection synced successfully');
  } catch (error) {
    console.error('Unable to sync to the database:', error);
  }
}

module.exports = {
  sequelize,
  connect,
  sync
};

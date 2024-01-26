import Sequelize from 'sequelize';

const dbOptions = {
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'social-core',
  dialect: 'postgres'
};

// Declare the Sequelize instance
export const sequelize = new Sequelize(dbOptions);

// Check the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log(
      'Connection to the database has been established successfully.'
    );
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

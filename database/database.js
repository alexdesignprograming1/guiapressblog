const Sequelize = require("sequelize");
const connection = new Sequelize('guiapress', 'root', '987654', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;
const Sequelize = require('sequelize');
const sequelize = new Sequelize("test", "admin", "password", {dialect: "mysql", host: "localhost"});

module.exports = sequelize;
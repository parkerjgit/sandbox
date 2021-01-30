const Sequelize = require('sequelize');
const db = new Sequelize('posgres://localhost:3000/rad');
module.exports = { db, ...require('./') }

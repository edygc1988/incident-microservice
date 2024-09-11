const { Sequelize } = require('sequelize');
const config = require('../../config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config);

const IncidentModel = require('./models/incidentModel')(sequelize);

sequelize.sync();

module.exports = { sequelize, IncidentModel };
const express = require('express');
const { sequelize } = require('../database/sequelize');
const incidentRoutes = require('./routes/incidentRoutes');

const app = express();

app.use(express.json());
app.use('/api', incidentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  await sequelize.authenticate();
  console.log('Base de datos conectada');
});
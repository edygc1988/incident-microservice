const IncidentRepository = require('../../../domain/repositories/incidentRepository');
const{ IncidentModel } = require('../../database/sequelize');
const RegisterIncident = require('../../../application/use-cases/incidentUseCase');
const { obtenerUsuario } = require('../../../interfaces/http/userService');

const incidentRepository = new IncidentRepository({ IncidentModel });

// Crear una nueva incidencia
exports.crearIncidencia = async (req, res) => {
  try {
    const incidentData = req.body;
    const userId = req.userId; // El usuario ID del token JWT
    const registerIncident = new RegisterIncident(incidentRepository);

    // Llama al servicio de usuarios para obtener más detalles del usuario
    const usuario = await obtenerUsuario(userId, req.headers.authorization);

    const incident = await registerIncident.execute(incidentData);

    res.status(201).json({ incident, usuario });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
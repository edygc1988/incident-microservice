const express = require('express');
const router = express.Router();
const IncidentHttpController = require('../controllers/incidentHttpController');
const IncidentUseCase = require('../../../application/use-cases/incidentUseCase');
const IncidentRepository = require('../../../domain/repositories/incidentRepository');
const { models } = require('../../../infrastructure/database/sequelize');

const incidentRepository = new IncidentRepository({ IncidentModel: models.Incident });
const incidentUseCase = new IncidentUseCase({ incidentRepository });
const incidentController = new IncidentHttpController({ incidentUseCase });

router.post('/', (req, res) => incidentController.createIncident(req, res));

module.exports = router;
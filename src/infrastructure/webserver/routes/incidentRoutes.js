const express = require('express');
const incidentController = require('../controllers/incidentController');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

router.post('/incidents', authMiddleware, incidentController.crearIncidencia);

module.exports = router;
    
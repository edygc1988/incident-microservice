class IncidentHttpController {
    constructor({ incidentUseCase }) {
      this.incidentUseCase = incidentUseCase;
    }
  
    async createIncident(req, res) {
      try {
        const incidentData = { ...req.body, createdBy: req.user.id };
        const incident = await this.incidentUseCase.registerIncident(incidentData);
        res.status(201).json(incident);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  }
  
  module.exports = IncidentHttpController;
  
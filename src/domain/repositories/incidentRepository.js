class IncidentRepository {
    constructor({ IncidentModel }) {
      this.IncidentModel = IncidentModel;
    }
  
    async createIncident(incidentData) {
      return this.IncidentModel.create(incidentData);
    }
  }
  
  module.exports = IncidentRepository;
class IncidentUseCase {
    constructor({ incidentRepository }) {
      this.incidentRepository = incidentRepository;
    }
  
    async execute(incidentData) {
      return await this.incidentRepository.create(incidentData);
    }
  }
  
  module.exports = IncidentUseCase;
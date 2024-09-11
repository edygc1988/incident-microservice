class Incident {
    constructor({ incidentType, date, description, status, userId, createdBy, updatedBy }) {
      this.incidentType = incidentType,
      this.date = date,
      this.description = description;
      this.status = status;
      this.userId = userId;
      this.createdBy = createdBy;
      this.updatedBy = updatedBy;
    }
  }
  
  module.exports = Incident;
  
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const IncidentModel = sequelize.define('Incident', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    incidentType: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
    state: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    createdBy: { type: DataTypes.STRING },
    updatedBy: { type: DataTypes.STRING },
    // Campos de auditoría
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "Incident",
    timestamps: true, // Añade automáticamente createdAt y updatedAt
    paranoid: true, // Añade automáticamente deletedAt para soft delete
  }
);

  return IncidentModel;
};
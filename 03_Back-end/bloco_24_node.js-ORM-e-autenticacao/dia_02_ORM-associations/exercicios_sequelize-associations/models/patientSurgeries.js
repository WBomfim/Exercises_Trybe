const PatientSurgeries = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define(
    'PatientSurgeries',
    {},
    {
      timestamps: false,
      tableName: 'Patient_surgeries',
    }
  );

  PatientSurgeries.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, {
      through: PatientSurgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });

    models.Patients.belongsToMany(models.Surgeries, {
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };
  
  return PatientSurgeries;
};

module.exports = PatientSurgeries;

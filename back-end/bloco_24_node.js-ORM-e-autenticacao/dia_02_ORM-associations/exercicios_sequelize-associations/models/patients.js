const patients = (sequelize, DataTypes) => {
  const patients = sequelize.define('Patients', {
    patient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    fullname: DataTypes.STRING,
    plan_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  }, { timestamps: false });

  patients.associate = (models) => {
    patients.belongsTo(models.Plans, { foreignKey: 'plan_id' });
  };

  return patients;
};

module.exports = patients;

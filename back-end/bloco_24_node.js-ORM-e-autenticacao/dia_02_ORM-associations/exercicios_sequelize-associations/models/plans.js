const plans = (sequelize, DataTypes) => {
  const plans = sequelize.define('Plans', {
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true 
    },
    coverage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  },
  {
    timestamps: false,
  });

  plans.associate = (models) => {
    plans.hasMany(models.Patients, { foreignKey: 'plan_id', as: 'patients' });
  };

  return plans;
};

module.exports = plans

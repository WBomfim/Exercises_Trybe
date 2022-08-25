const plans = (sequelize, DataTypes) => {
  const plans = sequelize.define('Plans', {
    plan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  }, { timestamps: false });

  plans.associate = (models) => {
    plans.hasMany(models.Patients, { foreignKey: 'plan_id' });
  };

  return plans;
};

module.exports = plans

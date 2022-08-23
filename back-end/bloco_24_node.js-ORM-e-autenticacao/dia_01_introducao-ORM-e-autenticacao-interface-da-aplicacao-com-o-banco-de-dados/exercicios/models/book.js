const book = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    page_quantity: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return book;
};

module.exports = book;

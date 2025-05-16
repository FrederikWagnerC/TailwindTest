module.exports = (sequalize, Sequelize) => {
  const Product = sequalize.define(
    "Product",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: "Not available",
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: "Not available",
      },
      description: {
        type: Sequelize.TEXT,
        defaultValue: "Not available",
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      roast: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      underscored: true,
    }
  );
  return Product;
};

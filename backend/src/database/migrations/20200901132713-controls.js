module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('controls', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    plate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    destiny: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    enter: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    exit: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('controls'),
};

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('controls', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    pedestrian_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'pedestrians', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',

    },
    vehicle_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'vehicles', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',

    },
    date: {
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


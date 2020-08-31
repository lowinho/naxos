import Sequelize, { Model } from "sequelize";

export default class Control extends Model {
    static init(sequelize) {
        super.init({

          date: {
            type: Sequelize.STRING,
            defaultValue: ''
            },

            destiny: {
                type: Sequelize.STRING,
                defaultValue: ''
            },

            plate: {
              type: Sequelize.STRING,
              defaultValue: ''
            },

            enter: {
                type: Sequelize.STRING,
                defaultValue: ''
            },

            exit: {
                type: Sequelize.STRING,
                defaultValue: ''
            },
        }, {
            sequelize,
        });

        return this;
    }

  //   static associate(models) {
  //     this.belongsTo(models.Pedestrian, { foreignKey: "pedestrian_id", as: 'pedestrian' });
  //     this.belongsTo(models.Vehicle, { foreignKey: "vehicle_id", as: 'vehicle' });
  // }
}

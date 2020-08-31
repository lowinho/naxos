import Sequelize, { Model } from "sequelize";

export default class Pedestrian extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue:''
            },

            rg: {
                type: Sequelize.STRING,
                defaultValue:''
            },

            cpf: {
                type: Sequelize.STRING,
                defaultValue:''
            },

            street: {
              type: Sequelize.STRING,
              defaultValue:''
            },

            number: {
              type: Sequelize.INTEGER,
              defaultValue:''
            },

            district: {
              type: Sequelize.STRING,
              defaultValue:''
            },

            city: {
              type: Sequelize.STRING,
              defaultValue:''
            },

            uf: {
              type: Sequelize.STRING,
              defaultValue:''
            },

            phone: {
              type: Sequelize.STRING,
              defaultValue:''
            },
        }, {
            sequelize,
        });
        return this;
      }

      // static associate(models) {
      //   this.hasMany(models.Control, { foreignKey: "pedestrian_id", as: 'pedestrian'});
      // }
    }


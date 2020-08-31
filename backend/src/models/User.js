import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
    static init(sequelize) {
        super.init({
            user: {
                type: Sequelize.STRING,

            },

            email: {
                type: Sequelize.STRING,

            },

            password_hash: {
                type: Sequelize.STRING,

            },

            password: {
                type: Sequelize.VIRTUAL,
            },
        }, {
            sequelize,
        });


        // esse hook foi criado para antes de salvar enviado o password_hash para o password
        this.addHook("beforeSave", async user => {
            if (user.password) {
                user.password_hash = await bcryptjs.hash(user.password, 8);
            }
        });

        return this;
    }

    passwordIsValid(password) {
        return bcryptjs.compare(password, this.password_hash);
    }
}

import jwt from "jsonwebtoken";
import User from "../models/User";

class TokenController {
    async store(req, res) {
        const { user = "", password = "" } = req.body;

        if (!user || !password) {
            return res.status(401).json({
                errors: ["Invalid Credentials"]
            });
        }

        const users = await User.findOne({ where: { user } });

        if (!users) {
            return res.status(401).json({
                errors: ["User not found"]
            });
        }

        if (!(await users.passwordIsValid(password))) {
            return res.status(401).json({
                errors: ["Invalid Password"]
            });
        }
        const { id } = users;
        const token = jwt.sign({ id, user }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION,
        });

        return res.json({ token, id });
    }
}


export default new TokenController();

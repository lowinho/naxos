import jwt from "jsonwebtoken";
import User from "../models/User";


export default async(req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors: ["Login Required"]
        });
    }

    const [token] = authorization.split(" ");

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, user } = dados;

        const users = await User.findOne({
            where: {
                id,
                user,
            }
        });

        if (!users) {
            return res.status(401).json({
                errors: ["Invalid User"]
            });
        }

        req.userId = id;
        req.userUser = user;
        return next();
    } catch (e) {
        return res.status(401).json({
            errors: ["Token expired or invalid"]
        });
    }
};

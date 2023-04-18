import {
    Router
} from "express";
import dotenv from "dotenv"
dotenv.config();
import groups from "../controllers/groups.contr.js";
const groupsRoute = Router();
import users from "../schemas/user.schema.js"
import {
    JWT
} from "../utils/jwt.js";
async function checkToken(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({
            message: "Xatolik: Kirish uchun token kerak yoki sizning xuquqingiz yo'q"
        });
    }
    try {
        let {
            contact
        } = await users.findOne({
            contact: JWT.VERIFY(token).id
        });
        if (contact == JWT.VERIFY(token).id) {
            next();
        }
    } catch (error) {
        return res.status(401).json({
            message: "Xatolik: Noto'g'ri yoki amalga oshirilmagan token"
        });
    }
}
groupsRoute.get("/groups", checkToken, groups.find);
groupsRoute.get("/groups/:id", checkToken, groups.find);
groupsRoute.post("/groups", checkToken, groups.create);
groupsRoute.put("/groups/:id", checkToken, groups.update);
groupsRoute.delete("/groups/:id", checkToken, groups.delete);

export default groupsRoute;
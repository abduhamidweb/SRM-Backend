import {
    Router
} from "express";
import outlay from "../controllers/outlay.contr.js";
import users from "../schemas/user.schema.js"
import { JWT } from "../utils/jwt.js";
async function checkUser(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({
            message: "Xatolik: Kirish uchun token kerak yoki sizning xuquqingiz yo'q"
        });
    }
    try {
        let {
            _id
        } = await users.findOne({
            _id: JWT.VERIFY(token).id
        });
        _id ? next() : res.status(401).json({
            message: "Xatolik: Noto'g'ri yoki amalga oshirilmagan token"
        })

    } catch (error) {
        return res.status(401).json({
            message: "Xatolik: Noto'g'ri yoki amalga oshirilmagan token"
        });
    }
}
const outlayRoute = Router();
outlayRoute.get("/outlay", outlay.find);
outlayRoute.get("/outlay/:id", outlay.find);
outlayRoute.post("/outlay", checkUser, outlay.create);
outlayRoute.put("/outlay/:id", checkUser, outlay.update);
outlayRoute.delete("/outlay/:id", outlay.delete);

export default outlayRoute;
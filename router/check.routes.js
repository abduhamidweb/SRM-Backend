import {
    Router
} from "express";
import check from "../controllers/check.contr.js";
const checkRoute = Router();
import users from "../schemas/user.schema.js"
import {
    JWT
} from "../utils/jwt.js";
async function checkTeacher(req, res, next) {
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
checkRoute.get("/check", checkToken, check.find);
checkRoute.get("/check/:id", check.find);
checkRoute.post("/check", check.create);
checkRoute.put("/check/:id", checkTeacher,check.update);
checkRoute.delete("/check/:id", check.delete);

export default checkRoute;
import {
    Router
} from "express";
import User from "../controllers/user.contr.js";
const userRoute = Router();
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
        })
        _id ? next() : res.status(401).json({
            message: "Xatolik: Noto'g'ri yoki amalga oshirilmagan token"
        })

    } catch (error) {
        return res.status(401).json({
            message: "Xatolik: Noto'g'ri yoki amalga oshirilmagan token"
        });
    }
}

userRoute.post("/users/login", User.userLogin);
userRoute.get("/users", checkUser, User.find);
userRoute.get("/adminget/users", checkToken, User.allUsers);

userRoute.get("/users/:id", checkToken, User.find);
userRoute.post("/users", checkToken, User.create);
userRoute.post("/admin/login", User.login);
userRoute.get("/pass/code", User.confirm);
userRoute.get("/pass/code/:id", checkToken, User.confirm);
userRoute.put("/users/:id", checkToken, User.update);
userRoute.delete("/users/:id", User.delete);

export default userRoute;
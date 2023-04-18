import {
    Router
} from "express";
import incomes from "../controllers/incomes.contr.js";
import users from "../schemas/user.schema.js"
import { JWT } from "../utils/jwt.js";
const incomesRoute = Router();
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
incomesRoute.get("/incomes", incomes.find);
incomesRoute.get("/incomes/:id", incomes.find);
incomesRoute.post("/incomes", checkUser, incomes.create);
incomesRoute.put("/incomes/:id", checkUser, incomes.update);
incomesRoute.delete("/incomes/:id", incomes.delete);

export default incomesRoute;
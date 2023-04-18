import {
    Router
} from "express";
import positions from "../controllers/positions.contr.js";
const positionsRoute = Router();
// positionsRoute.get("/departments/positions", positions.find);
// positionsRoute.get("/departments/positions/:id", positions.find);
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
positionsRoute.post("/positions",checkToken, positions.create);
positionsRoute.put("/positions/:id",checkToken, positions.update);
positionsRoute.delete("/positions/:id",checkToken, positions.delete);

export default positionsRoute;
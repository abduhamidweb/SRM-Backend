import {
    Router
} from "express";
import departments from "../controllers/departments.contr.js";
import directions from "../controllers/directions.contr.js";
import positions from "../controllers/positions.contr.js";
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
const departmentsRoute = Router();
departmentsRoute.get("/departments", checkToken, departments.find);
departmentsRoute.get("/departments/positions", checkToken, positions.find);
departmentsRoute.get("/departments/directions", checkToken, directions.find);
departmentsRoute.get("/departments/positions/:id", checkToken, positions.find);
departmentsRoute.get("/departments/directions/:id", checkToken, directions.find);
departmentsRoute.get("/departments/:id", checkToken, departments.find);
departmentsRoute.post("/departments", checkToken, departments.create);
departmentsRoute.put("/departments/:id", checkToken, departments.update);
departmentsRoute.delete("/departments/:id", checkToken, departments.delete);

export default departmentsRoute;
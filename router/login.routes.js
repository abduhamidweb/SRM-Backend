import { Router } from "express";
import login from "../controllers/login.contr.js";
const loginRoute = Router();

loginRoute.get("/login", login.find);
loginRoute.get("/login/:id", login.find);
loginRoute.post("/login", login.create);
loginRoute.put("/login/:id", login.update);
loginRoute.delete("/login/:id", login.delete);

export default loginRoute;

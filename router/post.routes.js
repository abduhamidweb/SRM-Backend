import { Router } from "express";
import post from "../controllers/post.contr.js";
const postRoute = Router();

postRoute.get("/posts", post.find);
postRoute.get("/posts/:id", post.find);
postRoute.post("/posts", post.create);
postRoute.put("/posts/:id", post.update);
postRoute.delete("/posts/:id", post.delete);

export default postRoute;

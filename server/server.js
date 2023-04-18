import express from "express";
import "../utils/mongo.js";
import userRoute from "../router/user.routes.js";
import postRoute from "../router/post.routes.js";
import centerRoute from "../router/center.routes.js";
import departmentsRoute from "../router/departments.routes.js";
import positions from "../router/positions.routes.js";
import directions from "../router/directions.routes.js";
import groups from "../router/groups.routes.js";
import incomes from "../router/incomes.routes.js";
import check from "../router/check.routes.js";
import login from "../router/login.routes.js";
import outlayRoute from "../router/outlay.routes.js";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(userRoute);
app.use(postRoute);
app.use(centerRoute);
app.use(departmentsRoute);
app.use(positions);
app.use(directions);
app.use(groups);
app.use(incomes);
app.use(check);
app.use(login);
app.use(outlayRoute)
app.listen(PORT, () => {
    console.log("Service listening on port " + PORT);
});
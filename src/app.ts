import express, { json, urlencoded } from "express";
import cors from "cors";
import router from "./routes/index.route";

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api", router);

export default app;

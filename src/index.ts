import express, { Request, Response } from "express"
import httpStatus from "http-status";
import router from "./routers/index-router";
import dotenv from "dotenv";

dotenv.config()

const app = express();

app.use(express.json())
app.use(router)

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK);
  });

const port = +process.env.PORT || 5000;

app.listen(port, () => {
    console.log("está funcionando")
})
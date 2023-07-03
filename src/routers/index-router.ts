import { Router } from "express";
import transactionRouter from "./transaction-router";

const router = Router();

router.use(transactionRouter);

export default router;

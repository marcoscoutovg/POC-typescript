import { Router } from "express";
import * as transactionController from "../controllers/transaction-controller";
import validateSchema from "../middlewares/validate-schema-middleware";
import { createdTransactionSchema, updateTransactionSchema } from "../schemas/transaction-schema";

const transactionRouter = Router();

transactionRouter.get("/transactions", transactionController.getTransactions);
transactionRouter.post("/transactions", validateSchema(createdTransactionSchema), transactionController.createTransaction);
transactionRouter.put("/transactions/:id", validateSchema(updateTransactionSchema), transactionController.updateTransaction);
transactionRouter.delete("/transactions/:id", transactionController.deleteTransaction);

export default transactionRouter;
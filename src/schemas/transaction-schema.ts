import Joi from "joi";
import { CreateTransaction } from "../protocols/transaction-protocol";

export const createdTransactionSchema = Joi.object<CreateTransaction>({
    description: Joi.string().required(),
    price: Joi.number().required(),
    status: Joi.string().required(),
    date: Joi.string().required()
})

export const updateTransactionSchema = Joi.object({
    description: Joi.string(),
    price: Joi.number(),
    status: Joi.string(),
    date: Joi.string()
})
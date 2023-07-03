import { Request, Response } from "express";
import httpStatus from "http-status";
import * as transactionService from "../services/transaction-service";

export async function getTransactions(req: Request, res: Response) {

    try {
        const result = await transactionService.getTransaction();

        return res.status(httpStatus.OK).send(result);
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

export async function createTransaction(req: Request, res: Response) {

    try {
        const result = await transactionService.createTransaction(req.body);

        return res.status(httpStatus.CREATED).send(result);
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

export async function deleteTransaction(req: Request, res: Response) {

    const { id } = req.params;

    try {
        await transactionService.deleteTransaction(Number(id));

        return res.sendStatus(httpStatus.OK);
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

export async function updateTransaction(req: Request, res: Response) {

    const { id } = req.params;

    try {
        await transactionService.updateTransaction(Number(id), req.body);

        return res.sendStatus(httpStatus.OK);
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}
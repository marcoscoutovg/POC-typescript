import * as transactionRepository from "../repositories/transaction-repository";
import { CreateTransaction, EditTransaction } from "../protocols/transaction-protocol";

export async function createTransaction(transaction: CreateTransaction) {
  return transactionRepository.createTransaction(transaction);
}

export async function getTransaction() {
  try {
    const transactions = await transactionRepository.getTransactions();
    return transactions;
  } catch (err) {
    console.log(err);
    throw new Error("Erro na busca das transações!");
  }
}

export async function updateTransaction(id: number, editTransaction: EditTransaction) {
  return transactionRepository.updateTransaction(id, editTransaction);
}

export async function deleteTransaction(id: number) {
  return transactionRepository.deleteTransaction(id);
}
import { connection } from "../database/database.connection";
import { CreateTransaction, EditTransaction, Transaction } from "../protocols/transaction-protocol";

export async function createTransaction(transaction: CreateTransaction) {
  const { description, price, status, date } = transaction;

  try {
    const newTransaction = await connection.query<Transaction>(
      `INSERT INTO transactions (description, price, status, date)
      VALUES ($1, $2, $3, $4)`,
      [description, price, status, date]
    );

    return newTransaction.rows[0];

  } catch (err) {
    console.log(err);
    throw new Error("Erro na criação da transação!");
  }
}

export async function getTransactions() {
  try {
    const getTransaction = await connection.query<Transaction>(`SELECT * FROM transactions`);
    return getTransaction.rows;
  } catch (err) {
    console.log(err);
    throw new Error("Erro na busca das transações!");
  }
}

export async function updateTransaction(id: number, editTransaction: EditTransaction) {
  const { description, price, status, date } = editTransaction;
  try {
    const updateTransaction = await connection.query<EditTransaction>(
      `UPDATE transactions SET description = $1, price = $2, status = $3, date = $4 WHERE id = $5`,
      [description, price, status, date, id]
    );

    if (updateTransaction.rowCount === 0) {
      throw new Error("id inexistente");
    }
    return updateTransaction.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("Erro na atualização da transação!");
  }
}

export async function deleteTransaction(id: number) {
  try {
    const deleteTransaction = await connection.query<EditTransaction>(
      `DELETE FROM transactions WHERE "id" = $1`,
      [id]
    );
    return deleteTransaction.rowCount > 0;
  } catch (err) {
    console.log(err);
    throw new Error("Erro ao deletar a transação!");
  }
}
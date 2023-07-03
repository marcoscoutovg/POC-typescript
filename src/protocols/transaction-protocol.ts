export type Error = {
    name: string;
    message: string;
  };

export type Transaction = {
    id?: number,
    description: string,
    price: number,
    status: string,
    date: string,
}

export type EditTransaction = {
  id?: number,
  description: string,
  price: number,
  status: string,
  date: string;
}

export type CreateTransaction = Omit<Transaction, "id">;
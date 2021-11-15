export interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export type TransactionInputProps = Omit<TransactionProps, "id" | "createdAt">;

export interface TransactionProviderProps {
  children: React.ReactNode;
}

export interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInputProps) => Promise<void>;
}

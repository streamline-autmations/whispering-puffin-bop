import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TransactionFormValues } from '@/lib/validators';

// --- Data Types ---
export interface TransactionData extends TransactionFormValues {
  id: string;
}

export interface BudgetData {
  id: string;
  name: string; // This will be the project name
  amount: number;
}

// --- Context Type ---
interface FinancialContextType {
  transactions: TransactionData[];
  addTransaction: (transaction: TransactionFormValues) => void;
  budgets: BudgetData[];
  addBudget: (budget: Omit<BudgetData, 'id'>) => void;
}

// --- Context Creation ---
const FinancialContext = createContext<FinancialContextType | undefined>(undefined);

// --- Provider Component ---
export const FinancialProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  const [budgets, setBudgets] = useState<BudgetData[]>([]);

  const addTransaction = (transaction: TransactionFormValues) => {
    const newTransaction: TransactionData = {
      ...transaction,
      id: new Date().toISOString(),
    };
    setTransactions(prev => [newTransaction, ...prev]);
  };

  const addBudget = (budget: Omit<BudgetData, 'id'>) => {
    const newBudget: BudgetData = {
      ...budget,
      id: new Date().toISOString(),
    };
    setBudgets(prev => [newBudget, ...prev]);
  };

  const value = {
    transactions,
    addTransaction,
    budgets,
    addBudget,
  };

  return (
    <FinancialContext.Provider value={value}>
      {children}
    </FinancialContext.Provider>
  );
};

// --- Custom Hook ---
export const useFinancials = () => {
  const context = useContext(FinancialContext);
  if (context === undefined) {
    throw new Error('useFinancials must be used within a FinancialProvider');
  }
  return context;
};
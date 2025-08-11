import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  type: "income" | "expense";
}

const dummyTransactions: Transaction[] = [
  { id: "1", description: "Groceries", amount: -75.50, date: "2024-07-25", category: "Food", type: "expense" },
  { id: "2", description: "Salary", amount: 2500.00, date: "2024-07-24", category: "Work", type: "income" },
  { id: "3", description: "Coffee Shop", amount: -5.25, date: "2024-07-24", category: "Food", type: "expense" },
  { id: "4", description: "Online Subscription", amount: -12.99, date: "2024-07-23", category: "Entertainment", type: "expense" },
  { id: "5", description: "Freelance Payment", amount: 500.00, date: "2024-07-22", category: "Work", type: "income" },
  { id: "6", description: "Dinner with friends", amount: -45.00, date: "2024-07-21", category: "Social", type: "expense" },
];

const RecentTransactions: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell className={`text-right ${transaction.type === "expense" ? "text-red-500" : "text-green-500"}`}>
                  {transaction.type === "expense" ? "-" : "+"}${Math.abs(transaction.amount).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
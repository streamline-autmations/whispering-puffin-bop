import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TransactionData } from '@/contexts/FinancialContext';
import { format } from 'date-fns';

interface RecentTransactionsProps {
  transactions: TransactionData[];
  limit?: number;
}

const formatCurrency = (amount: number, currency: 'ZAR' | 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions, limit }) => {
  const displayedTransactions = limit ? transactions.slice(0, limit) : transactions;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-auto">
          <Table>
            {displayedTransactions.length === 0 && <TableCaption>No transactions added yet.</TableCaption>}
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Tag</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{format(transaction.date, "yyyy-MM-dd")}</TableCell>
                  <TableCell className="font-medium">{transaction.description}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.category}</Badge>
                  </TableCell>
                  <TableCell>
                    {transaction.tagType === 'Project' 
                      ? `Project: ${transaction.project}` 
                      : transaction.tagType}
                  </TableCell>
                  <TableCell className={`text-right font-semibold ${transaction.type === "expense" ? "text-red-500" : "text-green-500"}`}>
                    {transaction.type === "expense" ? "-" : "+"}
                    {formatCurrency(transaction.amount, transaction.currency)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
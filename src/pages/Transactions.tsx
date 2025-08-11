import React, { useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import RecentTransactions from '@/components/RecentTransactions';
import { AddTransactionDialog } from '@/components/AddTransactionDialog';
import { TransactionFormValues } from '@/lib/validators';
import { useFinancials } from '@/contexts/FinancialContext';

const Transactions: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { transactions, addTransaction } = useFinancials();

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Transactions"
        description="View and manage all your financial transactions."
      />
      <div className="flex justify-end">
        <Button onClick={() => setIsDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Transaction
        </Button>
      </div>
      <RecentTransactions transactions={transactions} />
      <Card>
        <CardHeader>
          <CardTitle>Transaction Filters</CardTitle>
          <CardDescription>Filter transactions by date, type, or category.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Filter controls will go here.</p>
        </CardContent>
      </Card>
      <AddTransactionDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onAddTransaction={addTransaction}
      />
    </div>
  );
};

export default Transactions;
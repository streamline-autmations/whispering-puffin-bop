import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import RecentTransactions from '@/components/RecentTransactions'; // Reusing the component

const Transactions: React.FC = () => {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Transactions"
        description="View and manage all your financial transactions."
      />
      <div className="flex justify-end">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Transaction
        </Button>
      </div>
      <RecentTransactions /> {/* Reusing the recent transactions table */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction Filters</CardTitle>
          <CardDescription>Filter transactions by date, type, or category.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Placeholder for filter controls */}
          <p className="text-muted-foreground">Filter controls will go here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
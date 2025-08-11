import React, { useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useFinancials } from '@/contexts/FinancialContext';
import { CreateBudgetDialog } from '@/components/CreateBudgetDialog';
import BudgetCard from '@/components/BudgetCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Budgets: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { budgets, transactions } = useFinancials();

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Project Budgets"
        description="Set and track your spending limits for different projects."
      />
      <div className="flex justify-end">
        <Button onClick={() => setIsDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Budget
        </Button>
      </div>

      {budgets.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {budgets.map(budget => (
            <BudgetCard key={budget.id} budget={budget} transactions={transactions} />
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>No Budgets Found</CardTitle>
            <CardDescription>You haven't created any project budgets yet.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Click the "Create New Budget" button to get started.
            </p>
          </CardContent>
        </Card>
      )}

      <CreateBudgetDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
};

export default Budgets;
import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import BudgetOverviewChart from '@/components/BudgetOverviewChart'; // Reusing the component
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const Budgets: React.FC = () => {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Budgets"
        description="Set and track your spending limits for different categories."
      />
      <div className="flex justify-end">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Budget
        </Button>
      </div>
      <BudgetOverviewChart /> {/* Reusing the budget chart */}
      <Card>
        <CardHeader>
          <CardTitle>Budget List</CardTitle>
          <CardDescription>Manage your active and past budgets.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Placeholder for budget list */}
          <p className="text-muted-foreground">Your budget list will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Budgets;
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BudgetData, TransactionData } from '@/contexts/FinancialContext';

interface BudgetCardProps {
  budget: BudgetData;
  transactions: TransactionData[];
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ZAR', // Assuming budgets are in ZAR for now
  }).format(amount);
};

const BudgetCard: React.FC<BudgetCardProps> = ({ budget, transactions }) => {
  const spentAmount = transactions
    .filter(t => t.tagType === 'Project' && t.project === budget.name && t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const remainingAmount = budget.amount - spentAmount;
  const progressPercentage = (spentAmount / budget.amount) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{budget.name}</CardTitle>
        <CardDescription>Allocated Budget: {formatCurrency(budget.amount)}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Progress value={progressPercentage} />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Spent: {formatCurrency(spentAmount)}</span>
          <span>Remaining: {formatCurrency(remainingAmount)}</span>
        </div>
      </CardContent>
      <CardFooter>
        {remainingAmount < 0 ? (
          <p className="text-sm font-medium text-red-500">
            You are {formatCurrency(Math.abs(remainingAmount))} over budget.
          </p>
        ) : (
          <p className="text-sm text-green-600">
            You are on track.
          </p>
        )}
      </CardFooter>
    </Card>
  );
};

export default BudgetCard;
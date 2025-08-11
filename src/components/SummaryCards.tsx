import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingDown, PiggyBank } from "lucide-react";
import { useFinancials } from '@/contexts/FinancialContext';

interface SummaryCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  iconColorClass: string;
}

const formatCurrency = (amount: number) => {
  // For simplicity, defaulting to ZAR. A more robust solution would handle multiple currencies.
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(amount);
};

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, description, icon: Icon, iconColorClass }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 text-muted-foreground ${iconColorClass}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const SummaryCards: React.FC = () => {
  const { transactions } = useFinancials();

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const netSavings = totalIncome - totalExpenses;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <SummaryCard
        title="Total Income"
        value={formatCurrency(totalIncome)}
        description="Total income received"
        icon={DollarSign}
        iconColorClass="text-green-500"
      />
      <SummaryCard
        title="Total Expenses"
        value={formatCurrency(totalExpenses)}
        description="Total expenses paid"
        icon={TrendingDown}
        iconColorClass="text-red-500"
      />
      <SummaryCard
        title="Net Savings"
        value={formatCurrency(netSavings)}
        description="Income minus expenses"
        icon={PiggyBank}
        iconColorClass="text-blue-500"
      />
    </div>
  );
};

export default SummaryCards;
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  iconColorClass: string;
}

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
  // Dummy data for demonstration
  const totalIncome = "$5,200.00";
  const totalExpenses = "$3,150.00";
  const totalSavings = "$2,050.00";

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <SummaryCard
        title="Total Income"
        value={totalIncome}
        description="+20.1% from last month"
        icon={DollarSign}
        iconColorClass="text-green-500"
      />
      <SummaryCard
        title="Total Expenses"
        value={totalExpenses}
        description="-5.3% from last month"
        icon={TrendingDown}
        iconColorClass="text-red-500"
      />
      <SummaryCard
        title="Total Savings"
        value={totalSavings}
        description="+15.8% from last month"
        icon={PiggyBank}
        iconColorClass="text-blue-500"
      />
    </div>
  );
};

export default SummaryCards;
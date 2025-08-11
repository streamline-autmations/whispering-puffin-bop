import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import SummaryCards from '@/components/SummaryCards';
import RecentTransactions from '@/components/RecentTransactions';
import BudgetOverviewChart from '@/components/BudgetOverviewChart';
import { useFinancials } from '@/contexts/FinancialContext';

const Overview: React.FC = () => {
  const { transactions } = useFinancials();

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Dashboard Overview"
        description="A summary of your personal finances."
      />
      <SummaryCards />
      <div className="grid gap-6 lg:grid-cols-2">
        <RecentTransactions transactions={transactions} limit={5} />
        <BudgetOverviewChart />
      </div>
    </div>
  );
};

export default Overview;
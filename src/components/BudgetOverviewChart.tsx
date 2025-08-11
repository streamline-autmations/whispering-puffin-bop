import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFinancials } from '@/contexts/FinancialContext';

const BudgetOverviewChart: React.FC = () => {
  const { budgets, transactions } = useFinancials();

  const chartData = budgets.map(budget => {
    const spent = transactions
      .filter(t => t.type === 'expense' && t.tagType === 'Project' && t.project === budget.name)
      .reduce((sum, t) => sum + t.amount, 0);
    
    return {
      name: budget.name,
      allocated: budget.amount,
      spent: spent,
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent>
        {chartData.length > 0 ? (
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(value)} />
                <Legend />
                <Bar dataKey="allocated" fill="#8884d8" name="Allocated" />
                <Bar dataKey="spent" fill="#82ca9d" name="Spent" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            <p>No budget data to display. Create a budget to see the chart.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BudgetOverviewChart;
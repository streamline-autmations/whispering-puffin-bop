import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BudgetData {
  name: string;
  allocated: number;
  spent: number;
}

const dummyBudgetData: BudgetData[] = [
  { name: "Food", allocated: 500, spent: 450 },
  { name: "Housing", allocated: 1200, spent: 1150 },
  { name: "Transport", allocated: 200, spent: 180 },
  { name: "Entertainment", allocated: 150, spent: 170 },
  { name: "Utilities", allocated: 100, spent: 90 },
  { name: "Savings", allocated: 300, spent: 320 },
];

const BudgetOverviewChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dummyBudgetData}
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
              <Tooltip />
              <Legend />
              <Bar dataKey="allocated" fill="#8884d8" name="Allocated" />
              <Bar dataKey="spent" fill="#82ca9d" name="Spent" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetOverviewChart;
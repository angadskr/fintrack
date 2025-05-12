"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useEffect, useState } from "react"

export function MonthlySpendingChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/spending-data')
      const result = await response.json()

      // Process the result to calculate monthly spending
      const monthlyData = result.map((item: { month: any; amount: any }) => ({
        name: item.month, // Assuming each item has a 'month' property
        amount: item.amount // Assuming each item has an 'amount' property
      }));

      setData(monthlyData);
    }

    fetchData()
  }, [])

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis tickLine={false} axisLine={false} fontSize={12} tickFormatter={(value) => `₹${value / 1000}k`} />
          <Tooltip
            formatter={(value) => [`₹${value}`, "Amount"]}
            labelStyle={{ color: "var(--foreground)" }}
            contentStyle={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              borderRadius: "var(--radius)",
            }}
          />
          <Bar dataKey="amount" fill="var(--primary)" radius={[4, 4, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}


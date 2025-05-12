"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { useEffect, useState } from "react"

interface DataEntry {
  value: number;
  color: string; // Add other properties as needed
}

export function ExpensesByCategoryChart() {
  const [data, setData] = useState<DataEntry[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/expenses') // Adjust the API endpoint as needed
      const result = await response.json()
      setData(result) // Assuming the backend returns the data in the expected format
    }

    fetchData()
  }, [])

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`₹${value}`, "Amount"]}
            contentStyle={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              borderRadius: "var(--radius)",
            }}
          />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            formatter={(value, entry, index) => <span style={{ color: "var(--foreground)" }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}


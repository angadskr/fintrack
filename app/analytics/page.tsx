"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Calendar, DollarSign, Download, LogOut, Settings, User } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const monthlyData = [
  { name: "Jan", amount: 18000 },
  { name: "Feb", amount: 16500 },
  { name: "Mar", amount: 19200 },
  { name: "Apr", amount: 17800 },
  { name: "May", amount: 22400 },
  { name: "Jun", amount: 24500 },
]

const categoryData = [
  { name: "Groceries", value: 7200, color: "#3b82f6" },
  { name: "Entertainment", value: 4800, color: "#10b981" },
  { name: "Shopping", value: 3600, color: "#8b5cf6" },
  { name: "Food", value: 3200, color: "#f59e0b" },
  { name: "Transport", value: 2900, color: "#ef4444" },
  { name: "Others", value: 2800, color: "#6b7280" },
]

const weekdayData = [
  { name: "Mon", amount: 3200 },
  { name: "Tue", amount: 2800 },
  { name: "Wed", amount: 3500 },
  { name: "Thu", amount: 4100 },
  { name: "Fri", amount: 5200 },
  { name: "Sat", amount: 4800 },
  { name: "Sun", amount: 3900 },
]

const timeOfDayData = [
  { name: "Morning", value: 3500, color: "#3b82f6" },
  { name: "Afternoon", value: 5200, color: "#10b981" },
  { name: "Evening", value: 6800, color: "#8b5cf6" },
  { name: "Night", value: 2500, color: "#f59e0b" },
]

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState("6months")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <DollarSign className="h-6 w-6 text-primary" />
            <span>FinTrack</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/transactions"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Transactions
            </Link>
            <Link href="/analytics" className="text-sm font-medium transition-colors hover:text-primary">
              Analytics
            </Link>
            <Link
              href="/settings"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Settings
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>RP</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <div className="flex items-center gap-2">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Spending</CardTitle>
                  <CardDescription>Your spending over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          fontSize={12}
                          tickFormatter={(value) => `₹${value / 1000}k`}
                        />
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
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Expenses by Category</CardTitle>
                  <CardDescription>Breakdown of your spending by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {categoryData.map((entry, index) => (
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
                          formatter={(value, entry, index) => (
                            <span style={{ color: "var(--foreground)" }}>{value}</span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Spending by Day of Week</CardTitle>
                  <CardDescription>Which days you spend the most</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weekdayData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          fontSize={12}
                          tickFormatter={(value) => `₹${value / 1000}k`}
                        />
                        <Tooltip
                          formatter={(value) => [`₹${value}`, "Amount"]}
                          labelStyle={{ color: "var(--foreground)" }}
                          contentStyle={{
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border)",
                            borderRadius: "var(--radius)",
                          }}
                        />
                        <Bar dataKey="amount" fill="var(--primary)" radius={[4, 4, 0, 0]} barSize={30} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Spending by Time of Day</CardTitle>
                  <CardDescription>When you spend the most during the day</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={timeOfDayData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {timeOfDayData.map((entry, index) => (
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
                          formatter={(value, entry, index) => (
                            <span style={{ color: "var(--foreground)" }}>{value}</span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="categories" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Category Analysis</CardTitle>
                <CardDescription>Detailed breakdown of spending by category</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Category analysis content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Spending Trends</CardTitle>
                <CardDescription>Analyze your spending patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Trends analysis content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="predictions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Future Predictions</CardTitle>
                <CardDescription>Forecast of your future spending based on current patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Predictions content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


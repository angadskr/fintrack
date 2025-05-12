"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowUpRight,
  Bell,
  CreditCard,
  DollarSign,
  Download,
  LineChart,
  LogOut,
  Plus,
  Settings,
  ShoppingBag,
  User,
  ShoppingCart,
  Film,
  Umbrella,
  Coffee,
  Airplay,
  Lightbulb,
} from "lucide-react"
import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExpensesByCategoryChart } from "@/components/expenses-by-category-chart"
import { MonthlySpendingChart } from "@/components/monthly-spending-chart"
import { RecentTransactions } from "@/components/recent-transactions"
import { SavingsSuggestions } from "@/components/savings-suggestions"
import { MsMargaretSuggestions } from "@/components/ms-margaret-suggestions"

export default function DashboardPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [newCategory, setNewCategory] = useState("")

  const [categories, setCategories] = useState([
    {
      name: "Groceries",
      icon: ShoppingCart,
      color: "bg-sage",
      expenses: [
        { name: "Supermarket", amount: 1500 },
        { name: "Local market", amount: 500 },
      ],
    },
    {
      name: "Medical",
      icon: Umbrella,
      color: "bg-lavender",
      expenses: [
        { name: "Doctor visit", amount: 1000 },
        { name: "Medicines", amount: 500 },
      ],
    },
    {
      name: "Entertainment",
      icon: Film,
      color: "bg-purple",
      expenses: [
        { name: "Movie tickets", amount: 400 },
        { name: "Netflix subscription", amount: 200 },
      ],
    },
    {
      name: "Shopping",
      icon: ShoppingBag,
      color: "bg-gold",
      expenses: [
        { name: "Clothes", amount: 2000 },
        { name: "Electronics", amount: 5000 },
      ],
    },
    {
      name: "Travel",
      icon: Airplay,
      color: "bg-blue",
      expenses: [
        { name: "Flight tickets", amount: 12000 },
        { name: "Hotel booking", amount: 8000 },
      ],
    },
    {
      name: "Utilities",
      icon: Lightbulb,
      color: "bg-yellow",
      expenses: [
        { name: "Electricity bill", amount: 3000 },
        { name: "Water bill", amount: 1500 },
      ],
    },
    {
      name: "Dining",
      icon: Coffee,
      color: "bg-orange",
      expenses: [
        { name: "Restaurant", amount: 2500 },
        { name: "Takeout", amount: 1000 },
      ],
    },
  ])

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, { name: newCategory, icon: Coffee, color: "bg-forest", expenses: [] }])
      setNewCategory("")
      
    }
  }

  const handleNavigation = (path: string) => {
    try {
      router.push(path)
    } catch (error) {
      console.error("Navigation error:", error)
      window.location.href = path
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-sage">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-forest">
            <DollarSign className="h-6 w-6 text-forest" />
            <span>FinTrack</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button 
              onClick={() => handleNavigation("/dashboard")} 
              className="text-sm font-medium text-forest"
            >
              Dashboard
            </button>
            <button 
              onClick={() => handleNavigation("/transactions")} 
              className="text-sm font-medium text-forest/60 hover:text-forest"
            >
              Transactions
            </button>
            <button 
              onClick={() => handleNavigation("/analytics")} 
              className="text-sm font-medium text-forest/60 hover:text-forest"
            >
              Analytics
            </button>
            <button 
              onClick={() => handleNavigation("/settings")} 
              className="text-sm font-medium text-forest/60 hover:text-forest"
            >
              Settings
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-forest" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-medium text-forest">
                3
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" width={32} height={32} />
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
                <DropdownMenuItem onClick={() => router.push("/")}>
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
          <h1 className="text-3xl font-bold tracking-tight text-forest">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex text-forest border-forest hover:bg-lavender">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList className="bg-white">
            <TabsTrigger value="overview" className="text-forest data-[state=active]:bg-lavender">
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-forest data-[state=active]:bg-lavender">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="categories" className="text-forest data-[state=active]:bg-lavender">
              Categories
            </TabsTrigger>
            <TabsTrigger value="assistant" className="text-forest data-[state=active]:bg-lavender">
              Ms. Margaret
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-forest">Total Balance</CardTitle>
                  <DollarSign className="h-4 w-4 text-forest" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-forest">₹42,500</div>
                  <p className="text-xs text-forest/60">+₹4,200 from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-forest">Monthly Spending</CardTitle>
                  <CreditCard className="h-4 w-4 text-forest" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-forest">₹24,500</div>
                  <p className="text-xs text-forest/60">+₹2,100 from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-forest">Remaining Budget</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-forest" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-forest">₹5,500</div>
                  <p className="text-xs text-forest/60">-₹1,200 from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-forest">Savings Rate</CardTitle>
                  <LineChart className="h-4 w-4 text-forest" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-forest">18.2%</div>
                  <p className="text-xs text-forest/60">+2.1% from last month</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4 bg-white">
                <CardHeader>
                  <CardTitle className="text-forest">Monthly Spending</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <MonthlySpendingChart />
                </CardContent>
              </Card>
              <Card className="lg:col-span-3 bg-white">
                <CardHeader>
                  <CardTitle className="text-forest">Expenses by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ExpensesByCategoryChart />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4 bg-white">
                <CardHeader>
                  <CardTitle className="text-forest">Recent Transactions</CardTitle>
                  <CardDescription className="text-forest/60">Your latest UPI transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentTransactions />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-forest border-forest hover:bg-lavender">
                    View All Transactions
                  </Button>
                </CardFooter>
              </Card>
              <Card className="lg:col-span-3 bg-white">
                <CardHeader>
                  <CardTitle className="text-forest">Savings Suggestions</CardTitle>
                  <CardDescription className="text-forest/60">Ways to optimize your spending</CardDescription>
                </CardHeader>
                <CardContent>
                  <SavingsSuggestions />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-forest border-forest hover:bg-lavender">
                    View All Insights
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="categories" className="space-y-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-forest">Expense Categories</CardTitle>
                <CardDescription className="text-forest/60">
                  Manage and customize your expense categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${category.color} text-forest flex flex-col space-y-2 hover:scale-105 transition-transform duration-200`}
                    >
                      <div className="flex items-center justify-between">
                        <category.icon className="h-6 w-6" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <div className="space-y-1">
                        {category.expenses.map((expense, i) => (
                          <div key={i} className="flex justify-between text-xs">
                            <span>{expense.name}</span>
                            <span>₹{expense.amount}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-right text-sm font-bold">
                        Total: ₹{category.expenses.reduce((sum, expense) => sum + expense.amount, 0)}
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => setNewCategory("")}
                    className="p-4 rounded-lg bg-purple flex flex-col items-center justify-center space-y-2 hover:bg-purple/80 transition-colors"
                  >
                    <Plus className="h-6 w-6 text-forest" />
                    <span className="text-sm font-medium text-forest">Add New</span>
                  </button>
                </div>
                <div className="mt-6 flex space-x-2">
                  <Input
                    placeholder="New category name"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="border-forest/20 focus:border-lavender"
                  />
                  <Button onClick={handleAddCategory} className="bg-forest text-white hover:bg-forest/80">
                    Add Category
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="assistant" className="space-y-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-forest">Ms. Margaret's Financial Advice</CardTitle>
                <CardDescription className="text-forest/60">
                  Get personalized suggestions from your AI financial assistant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MsMargaretSuggestions />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-forest border-forest hover:bg-lavender">
                  Get More Advice
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


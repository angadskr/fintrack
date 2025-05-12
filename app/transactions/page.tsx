"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Bell, DollarSign, Filter, LogOut, Plus, Search, Settings, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000');

    socket.onmessage = (event) => {
      const transactions = JSON.parse(event.data);
      setTransactions(transactions);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    socket.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      socket.close();
    };
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
    if (!transaction.payee || !transaction.upiId) return false; // Check for undefined properties
    const matchesSearch =
      transaction.payee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.upiId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || transaction.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ["all", ...new Set(transactions.map((t) => t.category))].sort()

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
            <Link href="/transactions" className="text-sm font-medium transition-colors hover:text-primary">
              Transactions
            </Link>
            <Link
              href="/analytics"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
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
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
        </div>
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Transactions</TabsTrigger>
            <TabsTrigger value="incoming">Incoming</TabsTrigger>
            <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View and manage all your UPI transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search transactions..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category === "all" ? "All Categories" : category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Payee</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead className="hidden md:table-cell">UPI ID</TableHead>
                        <TableHead className="hidden md:table-cell">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTransactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-medium">{transaction.payee}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{transaction.category}</Badge>
                          </TableCell>
                          <TableCell>{transaction.amount}</TableCell>
                          <TableCell className="hidden md:table-cell">{transaction.date}</TableCell>
                          <TableCell className="hidden md:table-cell">{transaction.upiId}</TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              {transaction.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="incoming" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Incoming Transactions</CardTitle>
                <CardDescription>View all money received via UPI</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Incoming transactions will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="outgoing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Outgoing Transactions</CardTitle>
                <CardDescription>View all payments made via UPI</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Outgoing transactions will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


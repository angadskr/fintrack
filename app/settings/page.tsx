"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, DollarSign, LogOut, Save, Settings, User } from "lucide-react"

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
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [smsAlerts, setSmsAlerts] = useState(false)
  const [autoCategories, setAutoCategories] = useState(true)

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
            <Link
              href="/analytics"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Analytics
            </Link>
            <Link href="/settings" className="text-sm font-medium transition-colors hover:text-primary">
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
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
        <Tabs defaultValue="account" className="space-y-4">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security & Privacy</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Rahul Patel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="rahul.patel@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="inr">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                      <SelectItem value="usd">US Dollar ($)</SelectItem>
                      <SelectItem value="eur">Euro (€)</SelectItem>
                      <SelectItem value="gbp">British Pound (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="preferences" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>Customize your app experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable dark mode for a better viewing experience at night
                    </p>
                  </div>
                  <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-categories">Automatic Categorization</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically categorize transactions based on merchant information
                    </p>
                  </div>
                  <Switch id="auto-categories" checked={autoCategories} onCheckedChange={setAutoCategories} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="ta">Tamil</SelectItem>
                      <SelectItem value="te">Telugu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <Select defaultValue="dd-mm-yyyy">
                    <SelectTrigger id="date-format">
                      <SelectValue placeholder="Select date format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                      <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about transactions and insights
                    </p>
                  </div>
                  <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-alerts">Email Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive weekly summaries and important alerts via email
                    </p>
                  </div>
                  <Switch id="email-alerts" checked={emailAlerts} onCheckedChange={setEmailAlerts} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sms-alerts">SMS Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive transaction alerts via SMS</p>
                  </div>
                  <Switch id="sms-alerts" checked={smsAlerts} onCheckedChange={setSmsAlerts} />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Notification Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security & Privacy</CardTitle>
                <CardDescription>Manage your security settings and data privacy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-medium">Data Privacy</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">Control how your data is used and stored</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Data Encryption</Label>
                        <p className="text-sm text-muted-foreground">All your financial data is encrypted</p>
                      </div>
                      <Switch defaultChecked disabled />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="data-analytics">Data Analytics</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow us to use your data for improving our services
                        </p>
                      </div>
                      <Switch id="data-analytics" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <Button>Update Password</Button>
                <Button variant="outline" className="text-destructive">
                  Delete Account
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="categories" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Expense Categories</CardTitle>
                <CardDescription>Manage and customize your expense categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Default Categories</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span>Grocery</span>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span>Entertainment</span>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span>Shopping</span>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span>Food</span>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span>Transport</span>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span>Medical</span>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span>Utilities</span>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Custom Categories</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span>Fitness</span>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span>Education</span>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span>Gifts</span>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="p-2 border rounded-md border-dashed flex items-center justify-center">
                          <Button variant="ghost" className="w-full">
                            + Add New Category
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Categories</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


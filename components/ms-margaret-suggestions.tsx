"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, TrendingDown, TrendingUp } from "lucide-react"

export function MsMargaretSuggestions() {
  const [goal, setGoal] = useState("")
  const [suggestions, setSuggestions] = useState([
    {
      title: "Reduce Dining Out Expenses",
      description: "You've spent 30% more on dining out this month. Try cooking at home more often to save money.",
      icon: TrendingDown,
      potential: "₹2,000",
    },
    {
      title: "Increase Your Savings",
      description:
        "Based on your income, you could potentially save 10% more each month. Consider automating your savings.",
      icon: TrendingUp,
      potential: "₹5,000",
    },
    {
      title: "Optimize Your Subscriptions",
      description: "You have multiple overlapping streaming subscriptions. Consider consolidating to save money.",
      icon: Sparkles,
      potential: "₹800",
    },
  ])

  const handleAddGoal = () => {
    if (goal.trim() !== "") {
      setSuggestions([
        {
          title: `New Goal: ${goal}`,
          description:
            "I'll help you work towards this new financial goal. Let's start by analyzing your current spending patterns.",
          icon: Sparkles,
          potential: "Custom",
        },
        ...suggestions,
      ])
      setGoal("")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/ms-margaret.jpg" alt="Ms. Margaret" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">Ms. Margaret</h3>
          <p className="text-sm text-muted-foreground">Your AI Financial Assistant</p>
        </div>
      </div>
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <Card key={index} className="bg-primary/5 hover:bg-primary/10 transition-colors duration-200">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className={`rounded-full p-2 ${index === 0 ? "bg-green-100" : "bg-primary/20"}`}>
                <suggestion.icon className={`h-4 w-4 ${index === 0 ? "text-green-600" : "text-primary"}`} />
              </div>
              <div>
                <CardTitle className="text-lg">{suggestion.title}</CardTitle>
                <CardDescription>{suggestion.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Potential Impact: {suggestion.potential}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Take Action
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="space-y-2">
        <Label htmlFor="goal">Set a New Financial Goal</Label>
        <div className="flex space-x-2">
          <Input
            id="goal"
            placeholder="E.g., Save for a vacation"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <Button onClick={handleAddGoal}>Add Goal</Button>
        </div>
      </div>
    </div>
  )
}


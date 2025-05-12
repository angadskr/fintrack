import { TrendingDown, AlertCircle, Check } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

const suggestions = [
  {
    id: "1",
    title: "Reduce Food Delivery Expenses",
    description: "You've spent ₹3,200 on food delivery this month, which is 30% higher than your average.",
    icon: TrendingDown,
    potential: "₹1,000",
  },
  {
    id: "2",
    title: "Entertainment Budget Alert",
    description: "You're close to exceeding your entertainment budget for this month.",
    icon: AlertCircle,
    progress: 85,
  },
  {
    id: "3",
    title: "Grocery Shopping Optimization",
    description: "Switch to weekly grocery shopping to save up to 15% on your monthly grocery expenses.",
    icon: Check,
    potential: "₹800",
  },
]

export function SavingsSuggestions() {
  return (
    <div className="space-y-4">
      {suggestions.map((suggestion) => (
        <Alert key={suggestion.id} variant="default" className="border-l-4 border-l-primary">
          <suggestion.icon className="h-4 w-4" />
          <AlertTitle>{suggestion.title}</AlertTitle>
          <AlertDescription className="text-sm text-muted-foreground">
            {suggestion.description}
            {suggestion.potential && (
              <div className="mt-2 text-sm font-medium">Potential savings: {suggestion.potential}</div>
            )}
            {suggestion.progress && (
              <div className="mt-2 space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Budget usage</span>
                  <span className="font-medium">{suggestion.progress}%</span>
                </div>
                <Progress value={suggestion.progress} className="h-2" />
              </div>
            )}
          </AlertDescription>
        </Alert>
      ))}
    </div>
  )
}


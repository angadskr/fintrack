import { ShoppingBag, Coffee, Film, ShoppingCart, Utensils } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

// Define the Transaction interface
interface Transaction {
  id: number; // Adjust type as necessary
  name: string;
  category: string;
  amount: number; // Adjust type as necessary
  date: string; // Adjust type as necessary
  icon: React.ComponentType; // Assuming icon is a React component
  color?: string; // Optional color property
}

const getRandomColor = () => {
  const colors = [
    "bg-blue-500",
    "bg-orange-500",
    "bg-purple-500",
    "bg-green-500",
    "bg-red-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export function RecentTransactions() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "Coffee",
      category: "Food & Drink",
      amount: 5,
      date: "2023-10-01",
      icon: Coffee,
    },
    {
      id: 2,
      name: "Shopping",
      category: "Shopping",
      amount: 50,
      date: "2023-10-02",
      icon: ShoppingCart,
    },
    {
      id: 3,
      name: "Movies",
      category: "Entertainment",
      amount: 15,
      date: "2023-10-03",
      icon: Film,
    },
    {
      id: 4,
      name: "Groceries",
      category: "Food & Drink",
      amount: 75,
      date: "2023-10-04",
      icon: ShoppingBag,
    },
    {
      id: 5,
      name: "Dinner",
      category: "Food & Drink",
      amount: 30,
      date: "2023-10-05",
      icon: Utensils,
    },
    {
      id: 6,
      name: "Concert",
      category: "Entertainment",
      amount: 120,
      date: "2023-10-06",
      icon: Film,
    },
    {
      id: 7,
      name: "Books",
      category: "Education",
      amount: 40,
      date: "2023-10-07",
      icon: ShoppingBag,
    },
    {
      id: 8,
      name: "Gym Membership",
      category: "Health",
      amount: 60,
      date: "2023-10-08",
      icon: ShoppingCart,
    },
    // ... add more placeholder transactions as needed
  ]);

  useEffect(() => {
    // Simulate fetching data from a backend
    const fetchTransactions = async () => {
      const response = await fetch('/api/transactions'); // Adjust the API endpoint as needed
      const data = await response.json();
      const formattedTransactions = data.map((transaction: Transaction) => ({
        ...transaction,
        color: getRandomColor(),
      }));
      setTransactions(formattedTransactions);
    };

    fetchTransactions();
  }, []);
  return (
    <div className="space-y-4">
      {transactions.map((transaction: Transaction) => ( // Specify the type for transaction
        <div key={transaction.id} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`rounded-full p-2 ${transaction.color}`}>
              <transaction.icon  /> {/* Ensure icon is a valid React component */}
            </div>
            <div>
              <div className="font-medium">{transaction.name}</div>
              <div className="text-sm text-muted-foreground">{transaction.date}</div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="font-medium">{transaction.amount}</div>
            <Badge variant="outline" className="text-xs">
              {transaction.category}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}


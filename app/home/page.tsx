import Link from "next/link"
import { BarChart2, CreditCard, DollarSign, PieChart, Settings, User, LogOut } from "lucide-react"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const menuItems = [
    { title: "Dashboard", description: "View your financial overview", icon: BarChart2, href: "/dashboard" },
    { title: "Transactions", description: "Manage your transactions", icon: CreditCard, href: "/transactions" },
    { title: "Budget", description: "Set and track your budget", icon: PieChart, href: "/budget" },
    { title: "Goals", description: "Set and track financial goals", icon: DollarSign, href: "/goals" },
    { title: "Profile", description: "Manage your account", icon: User, href: "/profile" },
    { title: "Settings", description: "Adjust your preferences", icon: Settings, href: "/settings" },
  ]

  return (
    <div className="min-h-screen">
      <header className="bg-cream shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl text-navy-blue">
            <DollarSign className="h-6 w-6 text-orange" />
            <span>FinTrack</span>
          </div>
          <Button variant="ghost" className="text-navy-blue hover:text-orange">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-navy-blue mb-8">Welcome to FinTrack</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Link 
              href={item.href} 
              key={index} 
              className="block"
            >
              <Card className="bg-[#fffeb6] hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-navy-blue">
                    <item.icon className="h-5 w-5 text-orange" />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-navy-blue/60">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-fluorescent-green text-navy-blue hover:bg-fluorescent-green/80">
                    Go to {item.title}
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          {[
            "/winning girl with the cup.png",
            "/Premium Account.png",
            "/XK915pSzGeDMXMX9hw1I.png",
            "/Girl magnetically attracts coins and likes.png"
          ].map((src, index) => (
            <div key={index} className="relative h-40 w-30">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}


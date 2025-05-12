import Link from "next/link"
import { ArrowRight, BarChart3, CreditCard, DollarSign, PieChart, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <header className="sticky top-0 z-50 w-full border-b bg-cream-200 backdrop-blur supports-[backdrop-filter]:bg-cream-beige/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-navy-blue">
            <DollarSign className="h-6 w-6 text-orange" />
            <span>FinTrack</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-teal-600 transition-colors hover:text-coral-500">
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-teal-600 transition-colors hover:text-coral-500"
            >
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-teal-600 transition-colors hover:text-coral-500">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-teal-600 transition-colors hover:text-coral-500">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-teal-600 hover:text-coral-500">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-purple-300 text-teal-600 hover:bg-orange/80">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <div className="relative w-full h-20">
        <Image
          src="/A9VnWx4kvRhXt6z9FrcD.png"
          alt="Decorative Icon 1"
          width={100}
          height={100}
          className="absolute left-[10%] top-2 transform rotate-12"
        />
        <Image
          src="/RdfnNtWkl7rz7lhUNFSj.png"
          alt="Decorative Icon 2"
          width={80}
          height={80}
          className="absolute left-[30%] top-8 transform -rotate-6"
        />
        <Image
          src="/PP3fs0s8SwTF9cAXs6Sg.png"
          alt="Decorative Icon 3"
          width={120}
          height={120}
          className="absolute right-[45%] top-4 transform rotate-0"
        />
        <Image
          src="/7fJtiUVcX5Dyw70Ef5T7_transparency.png"
          alt="Decorative Icon 4"
          width={90}
          height={90}
          className="absolute right-[30%] top-10 transform -rotate-12"
        />
        <Image
          src="/HjA56JGLVdpVc47joHGyTf_new.png"
          alt="Decorative Icon 4"
          width={90}
          height={90}
          className="absolute right-[10%] top-10 transform -rotate-12"
        />
      </div>
      <main className="flex-1">
        <section className="w-full py-8 md:py-24 lg:py-30 xl:py-44 ">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-2">
                <div className="space-y-2 flex items-center justify-between">
                  <h1 className="text-3xl font-bold tracking-tighter text-teal-700 sm:text-5xl xl:text-6xl/none transform translate-y-[-400px]">
                    Track Your Finances Automatically with UPI Integration.
                  </h1>
                  <img src="/9266bdd17091cd0f60188bbe727a6c1c.jpg" alt="Description" className="h-120 w-120 rounded-full ml-4" />
                </div>
                <div className="relative">
                <p className="max-w-[700px] text-teal-700 font-bold md:text-xl">
                  Effortlessly monitor your spending. </p>
                  <p  className="max-w-[700px] text-teal-700 font-bold md:text-xl absoulte right-[30%]">
                  categorize expenses. 
                  <p className="max-w-[700px] text-teal-700 font-bold md:text-xl absoulte right-[30%]" > receive personalized financial
                  insights.</p>
                </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/home">
                    <Button size="lg" className="bg-[#90EE90] text-navy-blue hover:bg-[f#90EE90]/80">
                      Explore Features
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline" className="text-navy-blue border-navy-blue hover:bg-cream">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Expense Tracking", icon: BarChart3, color: "bg-orange" },
                    { title: "Budget Planning", icon: PieChart, color: "bg-fluorescent-green" },
                    { title: "Financial Insights", icon: Zap, color: "bg-navy-blue" },
                    { title: "Secure Transactions", icon: Shield, color: "bg-lavender" },
                  ].map((card, index) => (
                    <div key={index} className="rotating-card bg-white rounded-lg shadow-lg p-6 h-48 border-4 border-green-300">
                      <div className="rotating-card-inner w-full h-full">
                        <div className="rotating-card-front flex flex-col items-center justify-center">
                          <div className={`rounded-full bg-coral-300 p-3 mb-4`}>
                            <card.icon className="h-6 w-6 text-black" />
                          </div>
                          <h3 className="text-lg font-semibold text-navy-blue">{card.title}</h3>
                        </div>
                        <div className="rotating-card-back flex items-center justify-center">
                          <p className="text-center text-teal-600">
                            {card.title} helps you manage your finances more effectively.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#e0b0ff]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange px-3 py-1 text-sm text-white">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter text-navy-blue sm:text-5xl">
                  Everything You Need to Manage Your Finances
                </h2>
                <p className="max-w-[900px] text-navy-blue md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides powerful tools to help you track, analyze, and optimize your spending habits.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-mint-green p-6 shadow-sm transition-all hover:shadow-md hover:bg-[#90EE90]">
                <div className="rounded-full bg-coral-300 p-3 mb-4">
                  <Zap className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-purple-600">Automated UPI Tracking</h3>
                <p className="text-center text-coral-500">
                  Automatically capture and record all your UPI transactions without manual entry.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-mint-green p-6 shadow-sm transition-all hover:shadow-md hover:bg-[#90EE90]">
                <div className="rounded-full bg-coral-300 p-3 mb-4">
                  <CreditCard className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-purple-600">Smart Categorization</h3>
                <p className="text-center text-coral-500">
                  Expenses are automatically categorized with the flexibility to customize categories.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-mint-green p-6 shadow-sm transition-all hover:shadow-md hover:bg-[#90EE90]">
                <div className="rounded-full bg-coral-300 p-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-purple-600">Insightful Analytics</h3>
                <p className="text-center text-coral-500">
                  Visualize your spending patterns with interactive charts and detailed breakdowns.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-mint-green p-6 shadow-sm transition-all hover:shadow-md hover:bg-[#90EE90]">
                <div className="rounded-full bg-coral-300 p-3 mb-4">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-purple-600">Bank-Level Security</h3>
                <p className="text-center text-coral-500">
                  Your financial data is protected with enterprise-grade encryption and security measures.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-mint-green p-6 shadow-sm transition-all hover:shadow-md hover:bg-[#90EE90]">
                <div className="rounded-full bg-coral-300 p-3 mb-4">
                  <DollarSign className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-purple-600">Financial Guidance</h3>
                <p className="text-center text-coral-500">
                  Receive personalized suggestions to optimize your spending and save more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-mint-green p-6 shadow-sm transition-all hover:shadow-md hover:bg-[#90EE90]">
                <div className="rounded-full bg-coral-300 p-3 mb-4">
                  <PieChart className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-purple-600">Budget Planning</h3>
                <p className="text-center text-coral-500">
                  Set budgets for different categories and track your progress throughout the month.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-[#FDFBD4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange px-3 py-1 text-sm text-white">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter text-navy-blue sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-navy-blue md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Thousands of users have transformed their financial habits with our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-navy-blue">
                    "This app has completely changed how I manage my money. The automatic UPI tracking saves me hours
                    each month."
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium text-navy-blue">Priya Sharma</p>
                    <p className="text-sm text-navy-blue">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-navy-blue">
                    "The insights helped me cut my unnecessary spending by 30%. I can now save more for my future
                    goals."
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium text-navy-blue">Rahul Patel</p>
                    <p className="text-sm text-navy-blue">Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-navy-blue">
                    "The categorization is spot on! I love how it automatically sorts my expenses and shows me where my
                    money is going."
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium text-navy-blue">Ananya Gupta</p>
                    <p className="text-sm text-navy-blue">Small Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange px-3 py-1 text-sm text-white">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter text-navy-blue sm:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-navy-blue md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your financial needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-navy-blue">Free</h3>
                  <p className="text-navy-blue">Get started with basic tracking</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold text-navy-blue">
                  ₹0
                  <span className="ml-1 text-sm font-medium text-navy-blue">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-orange"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Basic UPI transaction tracking
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-orange"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    5 expense categories
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-orange"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Monthly reports
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Button className="w-full bg-teal-600 text-white hover:bg-green-300">Get Started</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-orange px-3 py-1 text-xs font-medium ">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-navy-blue">Pro</h3>
                  <p className="text-navy-blue">For individuals serious about finances</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold text-navy-blue">
                  ₹199
                  <span className="ml-1 text-sm font-medium text-navy-blue">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-orange"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Unlimited UPI transaction tracking
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-orange"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Unlimited categories
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-orange"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-orange"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Personalized financial insights
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Button className="w-full bg-teal-600 text-white hover:bg-orange/80">Get Started</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-navy-blue">Family</h3>
                  <p className="text-navy-blue">For households managing finances together</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold text-navy-blue">
                  ₹399
                  <span className="ml-1 text-sm font-medium text-navy-blue">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-orange"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-orange"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Up to 5 family members
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-orange"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Shared budgets and goals
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-orange"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Family financial planning
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Button className="w-full bg-teal-600 text-white hover:bg-orange/80">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#B0E0E6] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl">
                  Ready to Take Control of Your Finances?
                </h2>
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  Join thousands of users who have transformed their financial habits with our platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">AUTOMATED. SEAMLESS. GO-TO. </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="/4 Crucial Elements Of Product Listings (That Boost Sales, Fast!) — Amy Shamblen Creative.jpg" alt="Featured Image 1" className="h-90 w-full object-cover rounded-lg" />
              <img src="/Creative Photography by Twinset Studio | Inspiration Grid.jpg" alt="Featured Image 2" className="h-80 w-full object-cover rounded-lg" />
              <img src="/man in headphones holding a piece of paper.png" alt="Featured Image 3" className="h-80 w-full object-cover rounded-lg" />
              <img src="/21036e9858853db310d0cf29dcbb0654.jpg" alt="Featured Image 4" className="h-80 w-full object-cover rounded-lg" />
            </div>
            <br/>
            <div className="col-span-2 md:col-span-4 flex items-center justify-center">
                <h1 className="text-8xl font-bold text-center">FinTrack</h1>
              </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-cream py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-bold text-navy-blue">
            <DollarSign className="h-6 w-6 text-orange" />
            <span>FinTrack</span>
          </div>
          <p className="text-center text-sm text-navy-blue md:text-left">© 2024 FinTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


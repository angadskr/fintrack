"use client"

import type React from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import app from "../firebase";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    occupation: "",
    income: "",
    financialGoal: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  function subcreate() {
    const auth = getAuth(app);
    const { email, password } = formData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const handleSubmit = async () => {
    console.log("Form submitted:", formData)

    // Send data to the backend
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      console.log("User saved successfully")
      router.push('/home')
    } else {
      console.error("Error saving user")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col">
        <img src="/Man shopping during a sale.png" alt="Top Left Image" className="h-full w-auto mb-4" />
        <img src="/sitting man in a sweater with a glass of champagne.png" alt="Bottom Left Image" className="h-full w-auto" />
      </div>
      <Card className="w-full max-w-md bg-white shadow-2xl hover:shadow-orange/20 transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-navy-blue">Sign Up for FinTrack</CardTitle>
          <CardDescription className="text-navy-blue/60">
            Start your journey to financial freedom today.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-navy-blue">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-navy-blue/20 focus:border-orange"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-navy-blue">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-navy-blue/20 focus:border-orange"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-navy-blue">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border-navy-blue/20 focus:border-orange"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-navy-blue">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="border-navy-blue/20 focus:border-orange"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="occupation" className="text-navy-blue">
                Occupation
              </Label>
              <Input
                id="occupation"
                placeholder="Software Engineer"
                value={formData.occupation}
                onChange={handleChange}
                className="border-navy-blue/20 focus:border-orange"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="income" className="text-navy-blue">
                Monthly Income
              </Label>
              <Input
                id="income"
                type="number"
                placeholder="50000"
                value={formData.income}
                onChange={handleChange}
                className="border-navy-blue/20 focus:border-orange"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="financialGoal" className="text-navy-blue">
                Financial Goal
              </Label>
              <Select onValueChange={(value) => setFormData({ ...formData, financialGoal: value })}>
                <SelectTrigger className="border-navy-blue/20 focus:border-orange">
                  <SelectValue placeholder="Select a goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="save">Save Money</SelectItem>
                  <SelectItem value="invest">Start Investing</SelectItem>
                  <SelectItem value="debt">Pay off Debt</SelectItem>
                  <SelectItem value="budget">Create a Budget</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button 
            type="button"
            onClick={() => {
              subcreate();
              handleSubmit();
            }}
            className="w-full bg-green-500 text-white hover:bg-green-600 transition duration-300"
          >
            Create Account
          </Button>
          <p className="text-sm text-navy-blue text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-orange hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
      <div className="flex flex-col">
        <img src="/NIjd0yUIQm1qm1pYQYy9_transparency.png" alt="Top Right Image" className="h-full w-200 mb-4" />
        <img src="/Man trying to scare a sleeping friend on halloween.png" alt="Bottom Right Image" className="h-full w-auto" />
      </div>
    </div>
  )
}


"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import app from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    // Optional: Any side effects or initializations can be handled here
  }, []); // Empty dependency array means this runs once on mount

  function subcreate() {
    const auth = getAuth(app);
    return signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Signed in successfully");
        router.push("/home");
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error Code:", errorCode);
        console.error("Error Message:", errorMessage);
        alert("Authentication failed: " + errorMessage);
        throw error;
      });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
        await subcreate();
        
    } catch (error) {
        console.error("Login failed:", error);
    }
  }

  return (
    <div className="min-h-screen flex">
      <div className="relative w-1/2">
        <div className="absolute inset-0">
          <Image 
            src="/e207fb8d978552d73fd5644fae433751.jpg" 
            alt="Left Cover"
            fill
            className="object-cover rounded-r-lg"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 h-full">
        <div className="relative w-52 h-52 mb-4">
          <Image 
            src="/d9af1a3a2d73b5437d9d64e65c3acdc9.jpg" 
            alt="Circular"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
        <Card className="w-full max-w-md bg-white shadow-2xl hover:shadow-orange/20 transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy-blue">Login to FinTrack</CardTitle>
            <CardDescription className="text-navy-blue/60">Welcome back! Please enter your details.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" onClick={(e) => {
              e.preventDefault();
              handleSubmit(e as React.FormEvent);
            }} className="w-full bg-orange text-black hover:bg-orange/80 border border-white">
              Log In
            </Button>
            <div className="text-sm text-navy-blue text-center">
              Don't have an account?{" "}
              <Link href="/signup" className="text-orange hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}


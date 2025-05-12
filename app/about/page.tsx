"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, DollarSign, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "Financial expert with 15 years of experience in personal finance management.",
      image: "/ZGg5O7QQjFAXirCy8PDQ.png?height=200&width=200",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      description: "Tech innovator with a passion for making finance accessible through technology.",
      image: "/rXAzP7GP6mTm3VsfjJDF.png?height=200&width=200",
    },
    {
      name: "Brad Lowe",
      role: "Head of Customer Success",
      description: "Dedicated to helping users achieve their financial goals through personalized support.",
      image: "/FpaDpAUq8hm756WYU25A.png?height=200&width=200",
    },
  ]

  const values = [
    {
      icon: Users,
      title: "User-Centric",
      description: "We put our users first in everything we do.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly improving our platform with cutting-edge technology.",
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Building lasting relationships through transparency and reliability.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-forest">
            <DollarSign className="h-6 w-6 text-[#FDFBD4]" />
            <span>FinTrack</span>
          </div>
          <Link href="/" className="text-#fffdd0 hover:text-lavender transition-colors">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold text-[#FDFBD4] mb-6">About FinTrack</h1>
          <p className="text-xl text-[#fffdd0] max-w-2xl mx-auto">
            We're on a mission to make personal finance management simple, intuitive, and accessible for everyone.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#FDFBD4] text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative perspective-1000"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative w-full rounded-lg bg-transparent border border-white/30 backdrop-blur-lg p-6 shadow-lg transition-transform duration-500 ${
                    hoveredCard === index ? "animate-card-rotate" : ""
                  }`}
                >
                  <div className="aspect-square bg-white rounded-full overflow-hidden mb-4 mx-auto w-32">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-lavender font-medium mb-2">{member.role}</p>
                  <p className="text-white">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#fffdd0] text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-transparent border border-white/30 backdrop-blur-lg">
            {values.map((value, index) => (
              <div key={index} className="bg-transparent rounded-lg border border-white/30 backdrop-blur-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="rounded-full bg-purple w-12 h-12 bg-transparent border border-white/30 backdrop-blur-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-forest" />
                </div>
                <h3 className="text-xl font-bold text-white-700 mb-2">{value.title}</h3>
                <p className="text-white-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-white p-12 w-full h-60 bg-transparent border border-white/30 backdrop-blur-lg ">
          <h2 className="text-3xl font-bold text-[#B8E3E9] mb-6">Join Our Journey</h2>
          <p className="text-black max-w-2xl mx-auto mb-8">
            Be part of the financial revolution. Start managing your money smarter with FinTrack today.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-forest text-white px-8 py-3 rounded-lg hover:bg-forest/90 transition-colors"
          >
            Get Started
          </Link>
        </section>
      </main>
    </div>
  )
}


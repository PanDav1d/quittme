"use client"

import { ArrowRight, Play, Store, Smartphone, Zap, Coffee, ShoppingBag, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "Integrierte Händler", value: "2.500+" },
  { label: "Belege zentral gesammelt", value: "5M+" },
]

const integrations = [
  { icon: Store, label: "Einzelhandel" },
  { icon: Smartphone, label: "Apps" },
  { icon: Zap, label: "Kassensysteme" },
]

const receipts = [
  { store: "REWE", icon: Store, color: "bg-blue-100 text-blue-600", amount: "€24,67", time: "14:32" },
  { store: "Amazon", icon: ShoppingBag, color: "bg-orange-100 text-orange-600", amount: "€89,99", time: "16:45" },
  { store: "McDonald's", icon: Coffee, color: "bg-red-100 text-red-600", amount: "€8,50", time: "12:15" },
  { store: "Shell", icon: Car, color: "bg-yellow-100 text-yellow-600", amount: "€45,20", time: "09:30" },
  { store: "H&M", icon: ShoppingBag, color: "bg-pink-100 text-pink-600", amount: "€67,80", time: "15:20" },
  { store: "EDEKA", icon: Store, color: "bg-green-100 text-green-600", amount: "€32,15", time: "11:45" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-green-50/30 dark:to-green-950/30" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <Badge
              variant="outline"
              className="mb-8 px-4 py-2 text-sm border-green-200 text-green-700 dark:border-green-800 dark:text-green-300 animate-bounce-subtle"
            >
              Komplett kostenlos - unbegrenzte Belege
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              <span className="text-foreground animate-fade-in-up">Alle Belege</span>
              <br />
              <span className="text-green-600 animate-fade-in-up delay-200">kostenlos sammeln</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-300">
              QuittMe sammelt unbegrenzt viele Belege von allen Läden - komplett kostenlos. Deine Belege werden sicher
              auf deinem Gerät gespeichert und sind immer verfügbar.
            </p>

            {/* Integration Icons */}
            <div className="flex justify-center lg:justify-start gap-6 mb-8 animate-fade-in-up delay-400">
              {integrations.map((integration, index) => {
                const Icon = integration.icon
                return (
                  <div
                    key={integration.label}
                    className="flex flex-col items-center gap-2 animate-float"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-xs text-muted-foreground">{integration.label}</span>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up delay-500">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300"
              >
                Kostenlos herunterladen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-950/30 hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                So funktioniert's
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto lg:mx-0 animate-fade-in-up delay-600">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-green-600 mb-1 animate-count-up">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in-right">
            {/* Main Phone Mockup */}
            <div className="relative mx-auto max-w-sm lg:max-w-md animate-float-slow">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <div className="bg-white dark:bg-gray-100 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-900 h-8 flex items-center justify-center">
                    <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 h-[600px] bg-gradient-to-b from-green-50 to-white">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center animate-pulse-subtle">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <span className="font-bold text-gray-900">QuittMe</span>
                      </div>
                      <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-gray-100 rounded-xl p-3 mb-6 animate-fade-in delay-700">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                        <div className="h-2 bg-gray-300 rounded flex-1"></div>
                      </div>
                    </div>

                    {/* Receipt Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {receipts.map((receipt, index) => {
                        const Icon = receipt.icon
                        return (
                          <div
                            key={receipt.store}
                            className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-slide-in-up"
                            style={{ animationDelay: `${800 + index * 100}ms` }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-6 h-6 ${receipt.color} rounded-lg flex items-center justify-center`}>
                                <Icon className="w-3 h-3" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-gray-900 text-xs truncate">{receipt.store}</div>
                                <div className="text-[10px] text-gray-500">{receipt.time}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-green-600 text-sm">{receipt.amount}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-6 text-center">
                      <div className="inline-flex items-center gap-2 text-xs text-gray-500 animate-fade-in delay-1000">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                        <span>Automatisch synchronisiert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                <Store className="w-8 h-8 text-green-600" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow delay-500">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>

              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow delay-1000">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16 animate-fade-in-up delay-700">
          <p className="text-sm text-muted-foreground">
            Kostenlos für immer - sammle unbegrenzt viele Belege von tausenden Läden
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

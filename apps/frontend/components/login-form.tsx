"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Receipt,
  ArrowRight,
  Building2,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Building2,
    title: "Händler-Dashboard",
    description:
      "Vollständige Übersicht über alle Transaktionen und Integrationen",
  },
  {
    icon: Shield,
    title: "Sichere API",
    description: "Bank-Level Sicherheit für alle Datenübertragungen",
  },
  {
    icon: Zap,
    title: "Echtzeit-Analytics",
    description: "Live-Einblicke in Kundenverhalten und Umsätze",
  },
];

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8 animate-fade-in-up">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center space-x-2 group">
              <img
              src="/logo.svg"
              alt="QuittMe Logo"
              className="rounded-lg flex items-center justify-center p-15"
              />
            </div>

            <h1 className="text-3xl font-bold mb-2">Händler-Login</h1>
            <p className="text-muted-foreground">
              Melde dich in deinem Händler-Dashboard an um deine Integration zu
              verwalten
            </p>
          </div>

          {/* Login Form */}
          <Card className="border-0 shadow-lg animate-slide-in-up delay-200">
            <CardHeader className="space-y-1 pb-4">
              <Badge className="w-fit mx-auto bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                <Building2 className="w-3 h-3 mr-1" />
                Für Händler-Partner
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-Mail-Adresse
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="dein-laden@beispiel.de"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Passwort
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span className="text-muted-foreground">
                      Angemeldet bleiben
                    </span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    Passwort vergessen?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Anmeldung läuft...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Anmelden
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </Button>
              </form>

              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Noch kein Händler-Partner?{" "}
                  <Link
                    href="/unternehmen"
                    className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                  >
                    Integration starten
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side - Features */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 p-8 items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-200/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-md space-y-8">
          <div className="text-center animate-fade-in-right">
            <h2 className="text-3xl font-bold mb-4">Willkommen zurück!</h2>
            <p className="text-muted-foreground text-lg">
              Verwalte deine QuittMe-Integration und erhalte wertvolle Einblicke
              in dein Geschäft.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm animate-slide-in-right"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center animate-fade-in-right delay-800">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Sicher verschlüsselt und DSGVO-konform</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

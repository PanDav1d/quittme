import { Check, X, Store, Smartphone, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const consumerPlans = [
  {
    name: "Kostenlos",
    price: "0€",
    period: "/für immer",
    description: "Alle Grundfunktionen für unbegrenzte Belegsammlung",
    features: [
      { name: "Unbegrenzte Belege", included: true },
      { name: "Alle Händler-Integrationen", included: true },
      { name: "QR-Code & Foto Upload", included: true },
      { name: "Lokale Speicherung", included: true },
      { name: "Grundlegende Suche", included: true },
      { name: "Mobile App", included: true },
      { name: "Cloud-Synchronisation", included: false },
      { name: "Erweiterte Suche & Filter", included: false },
      { name: "Export-Funktionen", included: false },
      { name: "Detaillierte Analysen", included: false },
      { name: "Cloud-Backup", included: false },
      { name: "Priority Support", included: false },
    ],
    cta: "Kostenlos herunterladen",
    popular: false,
    icon: Smartphone,
  },
  {
    name: "Premium",
    price: "4,99€",
    period: "/Monat",
    description: "Erweiterte Features für professionelle Belegverwaltung",
    features: [
      { name: "Alle kostenlosen Features", included: true },
      { name: "Cloud-Synchronisation", included: true },
      { name: "Erweiterte Suche & KI-Filter", included: true },
      { name: "Export (PDF, Excel, CSV)", included: true },
      { name: "Detaillierte Ausgaben-Analysen", included: true },
      { name: "Automatisches Cloud-Backup", included: true },
      { name: "Geräte-übergreifender Zugriff", included: true },
      { name: "Kategorien & Tags", included: true },
      { name: "Steuer-Reports", included: true },
      { name: "Priority E-Mail Support", included: true },
      { name: "Früher Zugang zu neuen Features", included: true },
      { name: "Unbegrenzter Cloud-Speicher", included: true },
    ],
    cta: "Premium testen",
    popular: true,
    icon: Cloud,
  },
]

const retailerPlans = [
  {
    name: "Starter Integration",
    price: "49€",
    period: "/Monat",
    description: "Für kleine Läden und Restaurants mit bis zu 1.000 Transaktionen",
    features: [
      { name: "Bis zu 1.000 Belege/Monat", included: true },
      { name: "API-Integration", included: true },
      { name: "Basis-Analytics", included: true },
      { name: "E-Mail Support", included: true },
      { name: "Unbegrenzte Belege", included: false },
      { name: "Erweiterte Analytics", included: false },
      { name: "Priority Support", included: false },
      { name: "White-Label Option", included: false },
    ],
    cta: "Integration starten",
    popular: false,
  },
  {
    name: "Business Integration",
    price: "199€",
    period: "/Monat",
    description: "Für Einzelhändler und Ketten mit hohem Transaktionsvolumen",
    features: [
      { name: "Unbegrenzte Belege", included: true },
      { name: "Vollständige API-Integration", included: true },
      { name: "Erweiterte Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Multi-Location Support", included: true },
      { name: "Custom Branding", included: true },
      { name: "Dedicated Account Manager", included: true },
      { name: "White-Label Option", included: true },
    ],
    cta: "Demo vereinbaren",
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Kostenlos starten,
            <span className="block text-green-600">Premium erweitern</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            QuittMe ist kostenlos für alle Grundfunktionen. Upgrade zu Premium für erweiterte Features wie Cloud-Sync
            und Analysen.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-green-600" />
            <span>Kostenlos für immer</span>
            <span className="mx-2">•</span>
            <Check className="w-4 h-4 text-green-600" />
            <span>Keine versteckten Kosten</span>
            <span className="mx-2">•</span>
            <Check className="w-4 h-4 text-green-600" />
            <span>Jederzeit kündbar</span>
          </div>
        </div>

        {/* Consumer Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Für App-Nutzer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {consumerPlans.map((plan) => {
              const Icon = plan.icon
              return (
                <Card
                  key={plan.name}
                  className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow ${
                    plan.popular ? "ring-2 ring-green-600 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1">
                      Empfohlen
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                          )}
                          <span
                            className={`text-sm ${
                              feature.included ? "text-foreground" : "text-muted-foreground line-through"
                            }`}
                          >
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Free vs Premium Comparison */}
        <div className="mb-16 p-8 rounded-2xl bg-green-50 dark:bg-green-950/20">
          <h3 className="text-2xl font-bold text-center mb-6">Warum Premium?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Cloud-Synchronisation</h4>
              <p className="text-sm text-muted-foreground">
                Zugriff auf alle Belege von jedem Gerät, automatische Backups
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Erweiterte Features</h4>
              <p className="text-sm text-muted-foreground">KI-Suche, Analysen, Exporte und professionelle Tools</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">€</span>
              </div>
              <h4 className="font-semibold mb-2">Nur 4,99€/Monat</h4>
              <p className="text-sm text-muted-foreground">
                Weniger als ein Kaffee pro Monat für professionelle Belegverwaltung
              </p>
            </div>
          </div>
        </div>

        {/* Retailer Plans */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge className="mb-4 px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
              <Store className="w-4 h-4 mr-2" />
              Für Händler-Partner
            </Badge>
            <h2 className="text-3xl font-bold">Händler-Integration</h2>
            <p className="text-muted-foreground mt-2">
              Integriere QuittMe in deinen Laden und biete deinen Kunden automatische Belegverwaltung
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {retailerPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow ${
                  plan.popular ? "ring-2 ring-green-600 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1">
                    Empfohlen
                  </Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-foreground" : "text-muted-foreground line-through"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Häufige Fragen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="font-semibold mb-2">Ist die kostenlose Version wirklich kostenlos?</h4>
              <p className="text-sm text-muted-foreground">
                Ja, komplett kostenlos und ohne versteckte Kosten. Du kannst unbegrenzt viele Belege sammeln und alle
                Grundfunktionen nutzen.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Was passiert mit meinen lokalen Daten?</h4>
              <p className="text-sm text-muted-foreground">
                Deine Belege bleiben auf deinem Gerät gespeichert. Auch wenn du Premium kündigst, behältst du Zugriff
                auf alle lokalen Daten.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Kann ich Premium jederzeit kündigen?</h4>
              <p className="text-sm text-muted-foreground">
                Ja, du kannst Premium jederzeit kündigen. Die erweiterten Features laufen dann aus, aber alle
                Grundfunktionen bleiben kostenlos verfügbar.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Brauche ich Internet für die App?</h4>
              <p className="text-sm text-muted-foreground">
                Nein, die Grundfunktionen funktionieren offline. Nur Premium-Features wie Cloud-Sync benötigen eine
                Internetverbindung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

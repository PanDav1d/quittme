import {
  Building2,
  Store,
  Zap,
  BarChart3,
  HeadphonesIcon,
  Globe,
  CreditCard,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const retailerFeatures = [
  {
    icon: Zap,
    title: "Einfache Integration",
    description:
      "Integriere QuittMe in wenigen Minuten in dein bestehendes Kassensystem oder deine App.",
  },
  {
    icon: Store,
    title: "Kundenbindung stärken",
    description:
      "Biete deinen Kunden einen Mehrwert durch automatische, digitale Belegverwaltung.",
  },
  {
    icon: BarChart3,
    title: "Verkaufs-Analytics",
    description:
      "Erhalte wertvolle Einblicke in das Kaufverhalten deiner Kunden (anonymisiert).",
  },
  {
    icon: Globe,
    title: "API & SDK",
    description:
      "Vollständige API-Dokumentation und SDKs für iOS, Android und Web-Integration.",
  },
  {
    icon: CreditCard,
    title: "Flexible Abrechnung",
    description:
      "Pay-per-Transaction oder Flatrate-Modelle je nach Transaktionsvolumen.",
  },
  {
    icon: HeadphonesIcon,
    title: "Technischer Support",
    description:
      "Dedicated Integration-Support und technische Beratung für die Implementierung.",
  },
];

const useCases = [
  {
    title: "Einzelhandel & Supermärkte",
    description:
      "Biete deinen Kunden digitale Belege und reduziere Papierverbrauch um bis zu 90%.",
    benefits: [
      "Kassensystem-Integration",
      "Kundenbindung durch Mehrwert",
      "Umweltfreundliches Image",
    ],
  },
  {
    title: "Restaurants & Gastronomie",
    description:
      "Automatische Rechnungsübertragung für Gäste ohne Wartezeit oder Papierverschwendung.",
    benefits: [
      "POS-System Integration",
      "Schnellerer Service",
      "Digitale Kundenerfahrung",
    ],
  },
  {
    title: "E-Commerce & Apps",
    description:
      "Integriere QuittMe direkt in deine Shopping-App für nahtlose Belegverwaltung.",
    benefits: [
      "SDK für mobile Apps",
      "API für Web-Shops",
      "Erhöhte Kundenzufriedenheit",
    ],
  },
];

export function BusinessSection() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
            <Building2 className="w-4 h-4 mr-2" />
            Für Einzelhändler
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Integriere QuittMe in
            <span className="block text-green-600">deinen Laden</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Werde Teil des QuittMe-Netzwerks und biete deinen Kunden
            automatische, digitale Belegverwaltung. Stärke die Kundenbindung und
            reduziere Papierverbrauch.
          </p>
        </div>

        {/* Retailer Features */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Warum Händler QuittMe integrieren
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailerFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="border-0 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perfekt für verschiedene Branchen
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-600" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-24 p-12 rounded-2xl bg-green-50 dark:bg-green-950/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                2.500+
              </div>
              <div className="text-sm text-muted-foreground">
                Integrierte Händler
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-sm text-muted-foreground">
                Weniger Papierverbrauch
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                &lt; 5 Min
              </div>
              <div className="text-sm text-muted-foreground">
                Integration-Zeit
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                API-Verfügbarkeit
              </div>
            </div>
          </div>
        </div>

        {/* Integration Process */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            So einfach ist die Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Registrierung</h3>
              <p className="text-muted-foreground">
                Registriere dich als Händler-Partner und erhalte deine API-Keys
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integration</h3>
              <p className="text-muted-foreground">
                Integriere unsere API in dein Kassensystem oder deine App
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Go Live</h3>
              <p className="text-muted-foreground">
                Starte die automatische Belegübertragung für deine Kunden
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Werde QuittMe-Partner</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schließe dich über 2.500 Händlern an und biete deinen Kunden die
            Zukunft der Belegverwaltung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Zap className="mr-2 w-5 h-5" />
              Integration starten
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              API-Dokumentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

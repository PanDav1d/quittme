import {
  Store,
  Smartphone,
  Zap,
  Search,
  FileText,
  Shield,
  Download,
  BarChart3,
  Clock,
  Users,
  Globe,
} from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const mainFeatures = [
  {
    icon: Store,
    title: "Händler-Integration",
    description: "Verbinde dich mit über 2.500 Läden und Online-Shops für automatische Belegübertragung.",
    details: [
      "Über 2.500 Partner-Händler in Deutschland, Österreich und der Schweiz",
      "Automatische Belegübertragung binnen Sekunden nach dem Kauf",
      "Unterstützung für Einzelhandel, Gastronomie und E-Commerce",
      "Wöchentlich neue Händler-Partnerschaften",
    ],
  },
  {
    icon: Smartphone,
    title: "App-Integration",
    description: "Nahtlose Verbindung mit Shopping-Apps und Loyalty-Programmen für zentrale Belegsammlung.",
    details: [
      "Integration in über 150 Shopping-Apps und Loyalty-Programme",
      "Ein-Klick-Verbindung ohne komplizierte Einrichtung",
      "Automatische Synchronisation aller App-Käufe",
      "Unterstützung für iOS und Android Apps",
    ],
  },
  {
    icon: Zap,
    title: "Kassensystem-Anbindung",
    description: "Direkte Integration mit modernen Kassensystemen für sofortige Belegübertragung.",
    details: [
      "Kompatibel mit 95% aller modernen Kassensysteme",
      "Belege werden direkt vom Kassensystem an QuittMe gesendet",
      "Keine QR-Codes oder manuelle Eingaben mehr nötig",
      "Echtzeit-Übertragung während des Bezahlvorgangs",
    ],
  },
]

const additionalFeatures = [
  {
    icon: Search,
    title: "Zentrale Suche",
    description: "Durchsuche alle Belege von allen Läden und Apps an einem Ort.",
  },
  {
    icon: FileText,
    title: "Automatische Organisation",
    description: "Intelligente Sortierung nach Händler, Kategorie und Kaufdatum.",
  },
  {
    icon: BarChart3,
    title: "Übergreifende Analysen",
    description: "Ausgaben-Insights über alle verbundenen Läden und Apps hinweg.",
  },
  {
    icon: Download,
    title: "Universeller Export",
    description: "Alle Belege in einem Format für Steuern und Buchhaltung exportieren.",
  },
  {
    icon: Shield,
    title: "Sichere Übertragung",
    description: "Verschlüsselte Datenübertragung bei allen Händler-Integrationen.",
  },
  {
    icon: Clock,
    title: "Echtzeit-Sync",
    description: "Belege erscheinen sofort nach dem Kauf in deiner QuittMe App.",
  },
  {
    icon: Users,
    title: "Familien-Sharing",
    description: "Teile Belege mit Familienmitgliedern über alle Läden hinweg.",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "Zugriff auf alle Belege über iOS, Android und Web-App.",
  },
]

export function FeaturesDetailSection() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
            Alle Integrationen im Detail
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Verbinde dich mit
            <span className="block text-green-600">jedem Laden</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecke wie QuittMe sich nahtlos in dein Einkaufserlebnis integriert und alle Belege automatisch an einem
            Ort sammelt.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-16 mb-24">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold">{feature.title}</h2>
                  </div>
                  <p className="text-xl text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="w-full h-80 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-2xl flex items-center justify-center">
                    <Icon className="w-24 h-24 text-green-600/30" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Features Grid */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Weitere zentrale Funktionen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

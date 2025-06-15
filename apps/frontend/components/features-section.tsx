import { Store, Smartphone, Zap, Search, FileText, Shield, Download, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Store,
    title: "Unbegrenzte Händler-Integration",
    description:
      "Verbinde dich kostenlos mit über 2.500 Läden. Jeder Beleg wird automatisch auf deinem Gerät gespeichert.",
    free: true,
  },
  {
    icon: Smartphone,
    title: "Lokale Speicherung",
    description: "Alle Belege werden sicher auf deinem Gerät gespeichert. Kein Internet nötig, immer verfügbar.",
    free: true,
  },
  {
    icon: Zap,
    title: "Automatische Erfassung",
    description: "QR-Codes, Fotos und Kassensystem-Integration - alles kostenlos und unbegrenzt.",
    free: true,
  },
  {
    icon: Search,
    title: "Erweiterte Suche",
    description: "Durchsuche alle Belege mit KI-gestützten Filtern und Smart-Tags.",
    free: false,
  },
  {
    icon: FileText,
    title: "Cloud-Synchronisation",
    description: "Synchronisiere Belege zwischen allen deinen Geräten über die Cloud.",
    free: false,
  },
  {
    icon: BarChart3,
    title: "Detaillierte Analysen",
    description: "Verstehe deine Ausgaben mit erweiterten Reports und Trend-Analysen.",
    free: false,
  },
  {
    icon: Download,
    title: "Export-Funktionen",
    description: "Exportiere Belege für Steuern und Buchhaltung in verschiedenen Formaten.",
    free: false,
  },
  {
    icon: Shield,
    title: "Cloud-Backup",
    description: "Automatische Backups deiner Belege in sicheren deutschen Rechenzentren.",
    free: false,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-green-50/30 dark:bg-green-950/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-float-slow delay-500"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Eine App für
            <span className="block text-green-600 animate-fade-in-up delay-200">alle deine Belege</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-300">
            Egal ob Supermarkt, Restaurant, Online-Shop oder App - QuittMe sammelt automatisch alle deine Belege an
            einem zentralen Ort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className={`border-0 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-in-up group ${
                  feature.free
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${
                        feature.free ? "bg-green-100 dark:bg-green-900/30" : "bg-green-200 dark:bg-green-800/50"
                      } flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6`}
                    >
                      <Icon className="w-6 h-6 text-green-600 group-hover:animate-pulse" />
                    </div>
                    <Badge
                      variant={feature.free ? "default" : "secondary"}
                      className={`transition-all duration-300 group-hover:scale-110 ${
                        feature.free
                          ? "bg-green-600 text-white group-hover:bg-green-700"
                          : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 group-hover:bg-orange-200"
                      }`}
                    >
                      {feature.free ? "Kostenlos" : "Premium"}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

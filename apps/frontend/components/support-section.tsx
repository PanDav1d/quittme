import { MessageCircle, Mail, Phone, BookOpen, Video, Clock, Shield, Code, Store } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Sofortige Hilfe für Nutzer und Händler",
    availability: "Mo-Fr 9:00-18:00",
    responseTime: "< 2 Minuten",
  },
  {
    icon: Mail,
    title: "E-Mail Support",
    description: "Detaillierte Hilfe und Integration-Support",
    availability: "24/7",
    responseTime: "< 4 Stunden",
  },
  {
    icon: Phone,
    title: "Telefon Support",
    description: "Persönliche Beratung für Händler-Integration",
    availability: "Mo-Fr 9:00-17:00",
    responseTime: "Sofort",
  },
  {
    icon: Video,
    title: "Integration-Calls",
    description: "Technische Beratung für Händler-Partner",
    availability: "Nach Terminvereinbarung",
    responseTime: "Innerhalb 24h",
  },
]

const resources = [
  {
    icon: BookOpen,
    title: "Nutzer-Hilfe",
    description: "Anleitungen für App-Nutzung und Integrationen",
    link: "Hilfe-Center",
  },
  {
    icon: Code,
    title: "API Dokumentation",
    description: "Vollständige Dokumentation für Händler-Integration",
    link: "API Docs",
  },
  {
    icon: Video,
    title: "Integration-Tutorials",
    description: "Schritt-für-Schritt Anleitungen für Entwickler",
    link: "Tutorials",
  },
  {
    icon: Store,
    title: "Händler-Portal",
    description: "Dashboard für Partner-Händler und Analytics",
    link: "Portal öffnen",
  },
]

const faqItems = [
  {
    question: "Wie kann ich meinen Laden mit QuittMe verbinden?",
    answer:
      "Registriere dich als Händler-Partner, erhalte deine API-Keys und integriere unsere API in dein Kassensystem. Unser Support-Team hilft bei der Einrichtung.",
  },
  {
    question: "Welche Kassensysteme werden unterstützt?",
    answer:
      "QuittMe ist kompatibel mit über 95% aller modernen Kassensysteme. Eine vollständige Liste findest du in unserer API-Dokumentation.",
  },
  {
    question: "Wie finde ich alle meine Belege von verschiedenen Läden?",
    answer:
      "Alle Belege von integrierten Läden erscheinen automatisch in deiner QuittMe App. Nutze die Suchfunktion um gezielt nach Läden, Daten oder Beträgen zu suchen.",
  },
  {
    question: "Was kostet die Händler-Integration?",
    answer:
      "Wir bieten flexible Preismodelle: Pay-per-Transaction ab 0,05€ oder Flatrate-Modelle je nach Transaktionsvolumen. Kontaktiere uns für ein individuelles Angebot.",
  },
]

export function SupportSection() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
            <Shield className="w-4 h-4 mr-2" />
            Support für Nutzer & Händler
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hilfe &<span className="block text-green-600">Support</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unser Support-Team hilft sowohl App-Nutzern als auch Händler-Partnern bei allen Fragen rund um QuittMe und
            Integrationen.
          </p>
        </div>

        {/* Support Channels */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">So erreichst du uns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel) => {
              const Icon = channel.icon
              return (
                <Card key={channel.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{channel.title}</h3>
                    <p className="text-sm text-muted-foreground">{channel.description}</p>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="text-sm font-medium text-green-600">Antwortzeit: {channel.responseTime}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Hilfe-Ressourcen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Card key={resource.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-green-200 text-green-700 hover:bg-green-50"
                    >
                      {resource.link}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Häufige Fragen</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <h3 className="font-semibold">{item.question}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center p-12 rounded-2xl bg-green-50 dark:bg-green-950/20">
          <h2 className="text-3xl font-bold mb-4">Noch Fragen zur Integration?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unser Integration-Team hilft dir gerne bei der Anbindung deines Ladens oder bei Fragen zur App-Nutzung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="mr-2 w-5 h-5" />
              Integration-Support
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Mail className="mr-2 w-5 h-5" />
              E-Mail schreiben
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

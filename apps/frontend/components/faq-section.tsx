"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "Wie sammelt QuittMe automatisch meine Quittungen?",
    answer:
      "QuittMe funktioniert über mehrere Kanäle: QR-Code-Scannen an der Kasse, Foto-Uploads über unsere mobile App und direkte Integration mit teilnehmenden Händlern, die Quittungen direkt an dein Konto senden können.",
  },
  {
    question: "Sind meine Finanzdaten bei QuittMe sicher?",
    answer:
      "Absolut. Wir verwenden Bank-Level-Verschlüsselung (AES-256) zum Schutz deiner Daten, und alle Quittungen werden auf sicheren Servern mit regelmäßigen Sicherheitsaudits gespeichert. Wir speichern niemals Zahlungskarten-Informationen.",
  },
  {
    question: "Kann ich meine Quittungen für Steuerzwecke exportieren?",
    answer:
      "Ja! Du kannst deine organisierten Quittungen in mehreren Formaten exportieren, einschließlich PDF, Excel und CSV. Wir integrieren auch mit beliebter Buchhaltungssoftware wie QuickBooks und Xero.",
  },
  {
    question: "Welche Händler unterstützen automatische Quittungslieferung?",
    answer:
      "Wir erweitern ständig unser Händlernetzwerk. Derzeit unterstützen wir große Einzelhändler, Restaurants und Online-Shops. Du kannst die vollständige Liste in unserer App sehen und neue Händler-Integrationen anfordern.",
  },
  {
    question: "Was passiert, wenn ich ein Foto einer beschädigten Quittung mache?",
    answer:
      "Unsere KI kann Daten aus den meisten beschädigten oder verblassten Quittungen extrahieren. Wenn der Text nicht lesbar ist, kannst du die wichtigsten Informationen manuell hinzufügen, und wir organisieren sie trotzdem ordnungsgemäß in deinem Konto.",
  },
  {
    question: "Kann ich QuittMe sowohl für private als auch geschäftliche Ausgaben nutzen?",
    answer:
      "Ja! QuittMe kategorisiert Quittungen automatisch und ermöglicht es dir, private und geschäftliche Ausgaben zu trennen. Du kannst benutzerdefinierte Kategorien und Tags für bessere Organisation erstellen.",
  },
  {
    question: "Gibt es eine mobile App?",
    answer:
      "Ja, QuittMe ist sowohl für iOS als auch Android verfügbar. Die mobile App enthält alle Funktionen einschließlich QR-Scannen, Foto-Upload und Quittungs-Management unterwegs.",
  },
  {
    question: "Was kostet QuittMe?",
    answer:
      "Die Grundversion ist komplett kostenlos für unbegrenzte Belegsammlung. Premium-Features wie Cloud-Sync und erweiterte Analysen kosten 4,99€/Monat.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-green-200/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-200/10 rounded-full blur-2xl animate-float delay-1000"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Häufig gestellte
            <span className="block text-primary animate-fade-in-up delay-200">Fragen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-300">
            Alles was du über QuittMe und Quittungs-Management wissen musst
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-all duration-300 group-hover:bg-green-50/50 dark:group-hover:bg-green-950/20"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold pr-4 group-hover:text-green-600 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-all duration-300 group-hover:text-green-600 ${
                      openIndex === index ? "rotate-180 scale-110" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

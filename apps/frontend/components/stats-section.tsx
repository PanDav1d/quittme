import { TrendingUp, Clock, Leaf, Calculator } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "2,5M+",
    label: "Verarbeitete Quittungen",
    description: "Millionen von Quittungen organisiert und gesichert",
  },
  {
    icon: Clock,
    value: "15 Std",
    label: "Gespart pro Monat",
    description: "Durchschnittlich gesparte Zeit beim Ausgaben-Management",
  },
  {
    icon: Leaf,
    value: "89%",
    label: "Papier-Reduktion",
    description: "Weniger Papierverschwendung mit digitalen Quittungen",
  },
  {
    icon: Calculator,
    value: "3x schneller",
    label: "Steuervorbereitung",
    description: "Schnellere Steuererklärung mit organisierten Quittungen",
  },
]

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.green.500)_1px,_transparent_0)] bg-[size:20px_20px] animate-pulse-slow"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Die Zahlen sprechen für
            <span className="block text-green-600 animate-fade-in-up delay-200">sich selbst</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-300">
            Sieh, wie QuittMe das Quittungs-Management für tausende Nutzer transformiert
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="text-center group animate-slide-in-up hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Icon className="w-8 h-8 text-green-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1 group-hover:text-green-600 transition-colors duration-300">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

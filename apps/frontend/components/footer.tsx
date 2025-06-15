import Link from "next/link"
import { Receipt, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  product: [
    { name: "Funktionen", href: "/funktionen" },
    { name: "Preise", href: "/preise" },
    { name: "Mobile App", href: "/mobile" },
    { name: "Integrationen", href: "/integrationen" },
  ],
  company: [
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Karriere", href: "/karriere" },
    { name: "Presse", href: "/presse" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  resources: [
    { name: "Hilfe-Center", href: "/hilfe" },
    { name: "API Dokumentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Status", href: "/status" },
  ],
  legal: [
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
    { name: "Cookie-Richtlinie", href: "/cookies" },
    { name: "DSGVO", href: "/dsgvo" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-200 rounded-full blur-2xl animate-float delay-1000"></div>
      </div>

      <div className="container px-4 mx-auto py-16 relative z-10">
        {/* Newsletter Section */}
        <div className="mb-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold mb-4 animate-fade-in-up">Bleib auf dem Laufenden</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Erhalte die neuesten Updates zu neuen Funktionen, Händler-Partnerschaften und Tipps zum
            Quittungs-Management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up delay-300">
            <Input
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 transition-all duration-300 focus:scale-105 focus:shadow-lg"
            />
            <Button className="group hover:scale-105 transition-all duration-300 bg-green-600 hover:bg-green-700">
              Abonnieren
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 animate-slide-in-up">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Receipt className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl group-hover:text-green-600 transition-colors duration-300">
                QuittMe
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Der intelligente Weg, Quittungen zu verwalten. Verliere nie wieder eine Quittung mit unserer
              automatisierten Sammel- und Organisationsplattform.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300 cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>hallo@quittme.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300 cursor-pointer">
                <Phone className="w-4 h-4" />
                <span>+49 30 12345678</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300 cursor-pointer">
                <MapPin className="w-4 h-4" />
                <span>Berlin, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div
              key={category}
              className="animate-slide-in-up"
              style={{ animationDelay: `${(categoryIndex + 1) * 100}ms` }}
            >
              <h4 className="font-semibold mb-4 capitalize">
                {category === "product"
                  ? "Produkt"
                  : category === "company"
                    ? "Unternehmen"
                    : category === "resources"
                      ? "Ressourcen"
                      : "Rechtliches"}
              </h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block hover:text-green-600"
                      style={{ animationDelay: `${linkIndex * 50}ms` }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up">
          <p className="text-sm text-muted-foreground">© 2024 QuittMe. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            {["Datenschutz", "AGB", "Cookies"].map((item, index) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:text-green-600 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

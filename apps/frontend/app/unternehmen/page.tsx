import { Navbar } from "@/components/navbar"
import { BusinessSection } from "@/components/business-section"
import { Footer } from "@/components/footer"

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BusinessSection />
      <Footer />
    </div>
  )
}

import { Navbar } from "@/components/navbar"
import { FeaturesDetailSection } from "@/components/features-detail-section"
import { Footer } from "@/components/footer"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FeaturesDetailSection />
      <Footer />
    </div>
  )
}

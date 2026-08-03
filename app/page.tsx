import AboutSection from './components/sections/about-section'
import ContactSection from './components/sections/contact-section'
import ProcessSection from './components/sections/process-section'
import ReviewsSection from './components/sections/reviews-section'
import ServicesSection from './components/sections/services-section'
import SiteFooter from './components/sections/site-footer'
import SiteHeader from './components/sections/site-header'
import TechnologiesSection from './components/sections/technologies-section'

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TechnologiesSection />
      <ReviewsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}

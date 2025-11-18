import { useEffect } from 'react'
import Footer from '../../components/reusable/Footer/Footer'
import { Header } from '../../components/reusable/Headers'
import {
  DiscoverJourney,
  EmiraazTowards,
  VisionReality,
  AboutFounder,
  InspiringInnovation,
  CultureIntegrity,
  Sustainability,
  StrategicProcurement
} from '../../components/About'
import { useLocation } from 'react-router'

function About() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      const section = document.querySelector(hash)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])


  return (
    <div className="m-auto max-w-[1440px]">
      <Header />

      <section id="story">
        <DiscoverJourney />
      </section>

      <section id="leadership">
        <VisionReality />
      </section>

      <section id="emiraaz-towards">
        <EmiraazTowards />
      </section>

      <section id="about-founder">
        <AboutFounder />
      </section>

      <section id="inspire">
        <InspiringInnovation />
      </section>

      <section id="culture">
        <CultureIntegrity />
      </section>

      <section id="sustainability">
        <Sustainability />
      </section>

      <section id="procurement">
        <StrategicProcurement />
      </section>

      <Footer />
    </div>
  )
}

export default About

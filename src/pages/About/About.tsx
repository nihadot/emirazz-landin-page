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

function About() {

     useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className="m-auto max-w-[1440px]">
        <Header/>
        <DiscoverJourney/>
        <VisionReality/>
        <EmiraazTowards/>
        <AboutFounder/>
        <InspiringInnovation/>
        <CultureIntegrity/>
        <Sustainability/>
        <StrategicProcurement/>
        <Footer/>
    </div>
  )
}

export default About
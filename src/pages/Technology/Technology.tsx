import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import { useEffect } from 'react'

import {
  HeroSection,
  InnovatingMetaverse,
  DigitalTransformation,
  EngineInnovation,
  NurturingCultureCreation,
  InventionRealEstate,
  ModernTechnology,
  InventingSustainable,
  OurVisionFuture
} from '../../components/Technology'

function Technology() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="m-auto max-w-[1440px]" >
      <Header />
      <HeroSection />
      <InnovatingMetaverse />
      <DigitalTransformation />
      <EngineInnovation />
      <NurturingCultureCreation />
      <InventionRealEstate />
      <ModernTechnology />
      <InventingSustainable />
      <OurVisionFuture />
      <Footer />
    </main>
  )
}

export default Technology
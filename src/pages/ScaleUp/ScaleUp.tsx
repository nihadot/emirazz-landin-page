import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import { useEffect } from 'react'
import { HeroSection, OurMission, WhatWeOffer, StartedToday } from '../../components/ScaleUp'
type Props = {}

function ScaleUp({ }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="m-auto max-w-[1440px]">


      <Header />

      <div className="">

        <HeroSection />
        <div dir='ltr' className="px-4 md:px-10 lg:px-20">
          <OurMission />
        </div>
        <WhatWeOffer />
        <StartedToday />
        <Footer />
      </div>
    </div>
  )
}

export default ScaleUp
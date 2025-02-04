import { useEffect } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import {
  AboutUs,
  ExclusiveProperties,
  HeroSection,
  OurService,
  WhyInvestDubai
} from '../../components/Realestate'

type Props = {}

function Realestate({ }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="m-auto max-w-[1440px]">
      <Header />
      <HeroSection />
      <div dir='ltr' className="px-4 md:px-10 lg:px-20">
        <AboutUs />
      </div>
      <OurService />
      <ExclusiveProperties />
      <WhyInvestDubai />
      <Footer />
    </main>
  )
}

export default Realestate
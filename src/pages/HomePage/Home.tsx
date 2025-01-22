import Footer from '../../components/reusable/Footer/Footer'
import { Header } from '../../components/reusable/Headers'
import SectionEight from '../../components/specific/Home/SectionEight'
import SectionFive from '../../components/specific/Home/SectionFive'
import SectionSeven from '../../components/specific/Home/SectionSeven'
import SectionSix from '../../components/specific/Home/SectionSix'
import SectionNine from "../../components/specific/Home/SectionNine"
import SectionTen from "../../components/specific/Home/SectionTen"
import SectionTwelve from "../../components/specific/Home/SectionTwelve"
import { useEffect, useState } from 'react'
import SplashScreen from '../../components/splash/SplashScreen'
import { HeroSection, IntroSection } from '../../components/specific/Home'
import BusinessOpportunities from '../../components/specific/Home/BusinessOpportunities'
import ProductShowcase from '../../components/specific/Home/ProductShowcase'
function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 600)

  }, [])
  return (
    <>

      {loading ?

        <SplashScreen />
        : <main className="m-auto  max-w-[1680px] w-full">
          <Header />
          <HeroSection />
          <IntroSection />
          <BusinessOpportunities />
          <ProductShowcase />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
          <SectionEight />
          <SectionNine />
          <SectionTen />
          <SectionTwelve />
          <Footer />
        </main>}
    </>
  )
}

export default Home
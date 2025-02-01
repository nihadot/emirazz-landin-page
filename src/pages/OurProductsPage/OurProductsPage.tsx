import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import HeroSection from '../../components/specific/OurProducts/HeroSection'
import SectionTwo from '../../components/specific/OurProducts/SectionTwo'
import { useEffect } from 'react'

type Props = {}

function OurProductsPage({ }: Props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

 

  return (
    <div className="m-auto max-w-[1680px] bg-black">
      <Header />
      <div className=" mt-0">

      <HeroSection />
      <SectionTwo />


      <Footer />
      </div>

    </div>
  )
}

export default OurProductsPage
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import HeroSection from '../../components/OurProducts/HeroSection'
import { useEffect } from 'react'
import AllProducts from '../../components/OurProducts/AllProducts'

type Props = {}

function OurProductsPage({ }: Props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <main className="m-auto max-w-[1680px] bg-black">
      <Header />
      <div className=" mt-0">

        <HeroSection />
        <AllProducts />


        <Footer />
      </div>

    </main>
  )
}

export default OurProductsPage
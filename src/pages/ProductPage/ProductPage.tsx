import { useEffect } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from "../../components/specific/ProductPage/SectionOne"
import SectionTwo from "../../components/specific/ProductPage/SectionTwo"
type Props = {}

function ProductPage({ }: Props) {



  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])


  return (
    <div className="m-auto max-w-[1440px] bg-black">
      <Header />
      <div className="mt-28 md:mt-20">

        <SectionOne />

        <SectionTwo />


        <Footer />
      </div>

    </div>
  )
}

export default ProductPage
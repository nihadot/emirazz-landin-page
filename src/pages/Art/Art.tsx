import Footer from '../../components/reusable/Footer/Footer'
import { Header } from '../../components/reusable/Headers'
import SectionFour from "../../components/specific/Art/SupportingEmerging"
import { useEffect } from 'react'
import {
  ArtAtEmiraaz,
  FeaturedArtProject,
  HeroSection
} from '../../components/specific/Art'

type Props = {}

function Art({ }: Props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="overflow-hidden m-auto bg-black h-full max-w-[1440px]" >
      <Header />
      <div className="mt-24   ">

        <HeroSection />
        <ArtAtEmiraaz />
        <FeaturedArtProject />
        <SectionFour />
        <Footer />
      </div>
    </div>
  )
}

export default Art
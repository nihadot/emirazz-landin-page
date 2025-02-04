import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import Partnership from '../../components/specific/Business/Partnership'
import Sponsorship from "../../components/specific/Business/Sponsorship"
import StartupSupport from "../../components/specific/Business/StartupSupport"
import HeroSection from '../../components/specific/Business/HeroSection'
import Investment from '../../components/specific/Business/Investment'
import OurProductPartners from '../../components/specific/Business/OurProductPartners'
type Props = {}

function Business({ }: Props) {
  return (
    <div className="m-auto max-w-[1440px]">
      <Header />

      <HeroSection />

      <div dir='ltr' className="bg-black px-4 md:px-10 lg:px-20  w-full py-0">

        <Partnership />
        <Sponsorship />
        <Investment />
        <StartupSupport />
        <OurProductPartners />

      </div>
      <Footer />
    </div>
  )
}

export default Business
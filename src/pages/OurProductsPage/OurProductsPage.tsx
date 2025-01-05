import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from '../../components/specific/OurProducts/SectionOne'
import SectionTwo from '../../components/specific/OurProducts/SectionTwo'

type Props = {}

function OurProductsPage({ }: Props) {
  return (
    <div className="m-auto max-w-[1440px] bg-black">
      <Header />
      <SectionOne />
      <SectionTwo />


      <Footer />

    </div>
  )
}

export default OurProductsPage
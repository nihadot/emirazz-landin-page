import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from '../../components/specific/OurPartners/SectionOne'

type Props = {}

function OurPartnersPage({ }: Props) {
  return (
    <div className="m-auto max-w-[1440px] bg-black">
      <Header />
     <SectionOne />
     

      <Footer />

    </div>
  )
}

export default OurPartnersPage
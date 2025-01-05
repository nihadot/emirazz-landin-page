import { Header } from '../../components/reusable/Headers'
import SectionOne from '../../components/specific/ContactUs/SectionOne'
import Footer from '../../components/reusable/Footer/Footer'

type Props = {}

function ContactPage({ }: Props) {
  return (
    <div className="m-auto max-w-[1440px] bg-black">
      <Header />

      <SectionOne />



      <Footer />
    </div>
  )
}

export default ContactPage
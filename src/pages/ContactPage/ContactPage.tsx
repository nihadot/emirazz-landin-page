import { Header } from '../../components/reusable/Headers'
import SectionOne from '../../components/specific/ContactUs/SectionOne'
import Footer from '../../components/reusable/Footer/Footer'

type Props = {}

function ContactPage({ }: Props) {
  return (
    <div className="m-auto max-w-[1440px] bg-black">
      <Header />

      <div className="mt-12">

        <SectionOne />



        <Footer />
      </div>
    </div>
  )
}

export default ContactPage
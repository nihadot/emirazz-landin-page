import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import HeroSection from '../../components/ContactUs/HeroSection'

type Props = {}

function ContactPage({ }: Props) {
  return (
    <div className="m-auto max-w-[1440px] bg-black">
      <Header />

      <div className="mt-12">
        <HeroSection />
        <Footer />
      </div>
    </div>
  )
}

export default ContactPage
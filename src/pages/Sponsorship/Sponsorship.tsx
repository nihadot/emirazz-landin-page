import { useEffect } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import {
  HeroSection,
} from "../../components/Sponsorship"
type Props = {}

function Sponsorship({ }: Props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className="m-auto max-w-[1680px] ">
      <Header />
      <div className="mt-12">
        <HeroSection />
        <Footer />
      </div>
    </main>
  )
}

export default Sponsorship
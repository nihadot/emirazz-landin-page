import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import { useEffect } from 'react'
import {
  OurPartners
} from '../../components/OurPartners'

type Props = {}

function OurPartnersPage({ }: Props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <main className="m-auto max-w-[1440px] bg-black">
      <Header />
      <div className="mt-0">

        <OurPartners />


        <Footer />
      </div>

    </main>
  )
}

export default OurPartnersPage
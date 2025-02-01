import { useEffect } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import {HeroSection} from '../../components/Startup'

type Props = {}

function Startup({ }: Props) {




  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="m-auto max-w-[1680px]">


      <Header />
      <div className="mt-24">
        <HeroSection />
        <Footer />
      </div>
    </main>
  )
}

export default Startup
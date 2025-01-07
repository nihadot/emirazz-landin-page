import { useEffect } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from '../../components/specific/Investment/SectionOne'

type Props = {}

function Investment({ }: Props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="m-auto max-w-[1680px] ">
      <Header />
      <div className="mt-24">
        <SectionOne />
        <Footer />
      </div>
    </div>
  )
}

export default Investment
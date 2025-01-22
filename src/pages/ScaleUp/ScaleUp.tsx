import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from '../../components/specific/ScaleUp/SectionOne'
import SectionTwo from "../../components/specific/ScaleUp/SectionTwo"
import SectionFour from "../../components/specific/ScaleUp/SectionFour"
import SectionThree from "../../components/specific/ScaleUp/SectionThree"
import { useEffect } from 'react'
type Props = {}

function ScaleUp({ }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="m-auto max-w-[1440px]">


      <Header />

      <div className="pt-16">

        <SectionOne />
        <div dir='ltr' className="">

          <SectionTwo />
        </div>
        <SectionThree />
        <SectionFour />
        <Footer />
      </div>
    </div>
  )
}

export default ScaleUp
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from "../../components/specific/AboutFounder/AboutFounder"
import { useEffect } from 'react'
type Props = {}

function AboutFounder({}: Props) {

   useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  

  return (
    <div className="m-auto max-w-[1440px]">
        <Header/>
        <SectionOne/>
        <Footer/>
    </div>
  )
}

export default AboutFounder
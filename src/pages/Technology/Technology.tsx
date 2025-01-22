import { Header } from '../../components/reusable/Headers'
import SectionOne from '../../components/specific/Technology/SectionOne'
import SectionTwo from '../../components/specific/Technology/SectionTwo'
import Footer from '../../components/reusable/Footer/Footer'
import SectionNine from "../../components/specific/Technology/SectionNine"
import { useEffect } from 'react'
function Technology() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className="m-auto max-w-[1440px]" >
        <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SectionNine/>
        <Footer/>
    </div>
  )
}

export default Technology
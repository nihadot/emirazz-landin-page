import Footer from '../../components/reusable/Footer/Footer'
import { Header } from '../../components/reusable/Headers'
import SectionOne from '../../components/specific/Art/SectionOne'
import SectionTwo from "../../components/specific/Art/SectionTwo"
import SectionThree from "../../components/specific/Art/SectionThree"
import SectionFour from "../../components/specific/Art/SectionFour"
import { useEffect } from 'react'
type Props = {}

function Art({}: Props) {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div className="overflow-hidden m-auto bg-black h-full max-w-[1440px]" >
        <Header/>
        <div className="mt-32   ">

      <SectionOne/>
         <SectionTwo/>
         <SectionThree/>
       <SectionFour/> 
        <Footer/>
        </div>
    </div>
  )
}

export default Art
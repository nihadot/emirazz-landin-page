import Footer from '../../components/reusable/Footer/Footer'
import { Header } from '../../components/reusable/Headers'
import SectionOne from '../../components/specific/Art/SectionOne'
import SectionTwo from "../../components/specific/Art/SectionTwo"
import SectionThree from "../../components/specific/Art/SectionThree"
import SectionFour from "../../components/specific/Art/SectionFour"
type Props = {}

function Art({}: Props) {
  return (
    <div className="overflow-hidden m-auto bg-black h-full max-w-[1440px]" >
        <Header/>
      <SectionOne/>
         <SectionTwo/>
         <SectionThree/>
       <SectionFour/> 
        <Footer/>
    </div>
  )
}

export default Art
import { Header } from '../../components/reusable/Headers'
import SectionOne from '../../components/specific/Business/SectionOne'
import Footer from '../../components/reusable/Footer/Footer'
import SectionTwo from '../../components/specific/Business/SectionTwo'
import SectionThree from "../../components/specific/Business/SectionThree"
import SectionFour from "../../components/specific/Business/SectionFour"
import SectionFive from "../../components/specific/Business/SectionFive"
import SectionSix from "../../components/specific/Business/SectionSix"
type Props = {}

function Business({}: Props) {
  return (
    <div className="m-auto max-w-[1440px]">
    <Header/>
    
    <SectionOne/>

    <div  dir='ltr' className="bg-black px-4 md:px-10 lg:px-20  w-full py-0">

    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <SectionSix/>

    </div>
    {/* <SectionNine/> */}
    <Footer/>
</div>
  )
}

export default Business
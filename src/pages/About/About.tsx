import Footer from '../../components/reusable/Footer/Footer'
import { Header } from '../../components/reusable/Headers'
import SectionEight from '../../components/specific/About/SectionEight'
import SectionFive from '../../components/specific/About/SectionFive'
import SectionFour from '../../components/specific/About/SectionFour'
import SectionOne from '../../components/specific/About/SectionOne'
import SectionSeven from '../../components/specific/About/SectionSeven'
import SectionSix from '../../components/specific/About/SectionSix'
import SectionThree from '../../components/specific/About/SectionThree'

function About() {
  return (
    <div className="m-auto max-w-[1440px]">
        <Header/>
        <SectionOne/>
        {/* <SectionTwo/> */}
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
        <SectionEight/>
        {/* <SectionOne/>
        <SectionTwo/>
        <SectionNine/> */}
        <Footer/>
    </div>
  )
}

export default About
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from '../../components/specific/Invention/SectionOne'
import SectionTwo from "../../components/specific/Invention/SectionTwo"
type Props = {}

function ArtPage({ }: Props) {
    return (
        <div className="m-auto bg-black max-w-[1440px]">


            <Header />



         <SectionOne />
          <SectionTwo/>
          {/*  <SectionThree/>
      <SectionFour/> */}
            <Footer />
        </div>
    )
}

export default ArtPage
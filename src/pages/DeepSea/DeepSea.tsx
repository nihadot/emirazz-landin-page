import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from '../../components/specific/DeepSea/SectionOne'
import SectionTwo from '../../components/specific/DeepSea/SectionTwo'
import SectionThree from '../../components/specific/DeepSea/SectionThree'
import SectionFour from '../../components/specific/DeepSea/SectionFour'
import SectionFive from "../../components/specific/DeepSea/SectionFive"
import SectionSix from "../../components/specific/DeepSea/SectionSix"
import SectionSeven from '../../components/specific/DeepSea/SectionSeven'
type Props = {}

function DeepSea({ }: Props) {
    return (
        <div className="m-auto bg-black max-w-[1440px]">


            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <div className="" dir='ltr'>
            <SectionFive />
            <SectionSix />
            </div>
            <SectionSeven />
            <Footer />
        </div>
    )
}

export default DeepSea
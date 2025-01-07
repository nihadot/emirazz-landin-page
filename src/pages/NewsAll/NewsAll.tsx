import  { useEffect } from 'react'
import Footer from '../../components/reusable/Footer/Footer';
import { Header } from '../../components/reusable/Headers';
import SectionOne from "../../components/specific/NewsAll/SectionOne";
import SectionTwo from "../../components/specific/NewsAll/SectionTwo"
type Props = {}

function NewsAll({ }: Props) {


      useEffect(()=>{
        window.scrollTo(0,0);
        
      },[])

    return (
        <div className="m-auto max-w-[1440px]">


            <Header />
            <div className="mt-20">

            <SectionOne />
            <SectionTwo />
            <Footer />
</div>

        </div>
    )
}

export default NewsAll
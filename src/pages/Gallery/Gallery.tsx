import React from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from "../../components/specific/Gallery/SectionOne"
import SectionTwo from "../../components/specific/Gallery/SectionTwo"
type Props = {}

function Gallery({}: Props) {
  return (
    <div className="m-auto  bg-black max-w-[1440px]">


    <Header />



   <SectionOne />
     <SectionTwo/>
  {/*<SectionThree/>
<SectionFour/> */}
    <Footer />
</div>
  )
}

export default Gallery
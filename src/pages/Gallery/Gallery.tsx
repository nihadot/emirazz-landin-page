import React, { useEffect } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from "../../components/specific/Gallery/SectionOne"
import SectionTwo from "../../components/specific/Gallery/SectionTwo"
type Props = {}

function Gallery({}: Props) {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="m-auto   bg-black max-w-[1440px]">


    <Header />


<div className="mt-24 ">

   <SectionOne />
     <SectionTwo/>
  {/*<SectionThree/>
<SectionFour/> */}
    <Footer />
</div>
</div>
  )
}

export default Gallery
import React, { useEffect } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from '../../components/specific/Realestate/SectionOne'
import SectionTwo from '../../components/specific/Realestate/SectionTwo'
// import SectionTwo from '../../components/specific/Realestate/SectionTwo'
import SectionThree from '../../components/specific/Realestate/SectionThree'
import SectionFour from '../../components/specific/Realestate/SectionFour'
import SectionFive from '../../components/specific/Realestate/SectionFive'

type Props = {}

function Realestate({}: Props) {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  return (
    <div  className="m-auto max-w-[1440px]">
    <Header/>

    <SectionOne/>
    <div  dir='ltr' className="">

    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
</div>
    <SectionFive/>
    <Footer/>
    </div>
  )
}

export default Realestate
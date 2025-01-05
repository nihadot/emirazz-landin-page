import React from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from "../../components/specific/AboutFounder/AboutFounder"
type Props = {}

function AboutFounder({}: Props) {
  return (
    <div className="m-auto max-w-[1440px]">
        <Header/>
        <SectionOne/>
        {/* <SectionTwo/> */}
        {/* <SectionThree/> */}
        {/* <SectionFour/> */}
        {/* <SectionFive/> */}
        {/* <SectionSix/> */}
        {/* <SectionSeven/> */}
        {/* <SectionEight/> */}
        {/* <SectionOne/>
        <SectionTwo/>
        <SectionNine/> */}
        <Footer/>
    </div>
  )
}

export default AboutFounder
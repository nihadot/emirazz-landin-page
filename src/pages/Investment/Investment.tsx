import React from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from '../../components/specific/Investment/SectionOne'

type Props = {}

function Investment({}: Props) {
  return (
    <div className="m-auto max-w-[1440px]">


    <Header/>

    <SectionOne/>
    {/* // <SectionTwo/> */}
    {/* // <SectionNine/> */}
    <Footer/>
    </div>
  )
}

export default Investment
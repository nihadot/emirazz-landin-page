import React from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from "../../components/specific/ProductPage/SectionOne"
import SectionTwo from "../../components/specific/ProductPage/SectionTwo"
type Props = {}

function ProductPage({}: Props) {
  return (
    <div className="m-auto max-w-[1440px] bg-black">
    <Header />
     <SectionOne />
    <SectionTwo />


    <Footer />

  </div>
  )
}

export default ProductPage
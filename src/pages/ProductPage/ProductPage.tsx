import React, { useEffect } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from "../../components/specific/ProductPage/SectionOne"
import SectionTwo from "../../components/specific/ProductPage/SectionTwo"
import { useLocation, useParams } from 'react-router'
import HeadingOne from '../../components/reusable/Titles/MainHeading/HeadingOne'
import { useGetProductQuery } from '../../features/product/productsApi'
type Props = {}

function ProductPage({}: Props) {

  
  
  useEffect(()=>{
    window.scrollTo(0,0);
    
  },[])
  
 
  return (
    <div className="m-auto max-w-[1440px] bg-black">
    <Header />
    <div className="mt-20">

     <SectionOne />
 
    <SectionTwo />


    <Footer />
    </div>

  </div>
  )
}

export default ProductPage
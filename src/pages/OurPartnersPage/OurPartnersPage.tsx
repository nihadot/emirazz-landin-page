import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from '../../components/specific/OurPartners/SectionOne'
import { useEffect } from 'react'

type Props = {}

function OurPartnersPage({ }: Props) {

   useEffect(()=>{
      window.scrollTo(0,0);
    },[])
    
  return (
    <div className="m-auto max-w-[1440px] bg-black">
      <Header />
      <div className="mt-12">

     <SectionOne />
     

      <Footer />
      </div>

    </div>
  )
}

export default OurPartnersPage
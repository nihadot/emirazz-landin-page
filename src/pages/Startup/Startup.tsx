import { useEffect } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from '../../components/specific/Startup/SectionOne'

type Props = {}

function Startup({}: Props) {


  

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="m-auto max-w-[1680px]">


    <Header/>
    <div className="mt-24">
    <SectionOne/>
    <Footer/>
</div>
    </div>
  )
}

export default Startup
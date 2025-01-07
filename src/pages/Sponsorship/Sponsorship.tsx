import { useEffect } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionOne from '../../components/specific/Sponsorship/SectionOne'

type Props = {}

function Sponsorship({}: Props) {

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <div className="m-auto max-w-[1680px] ">


    <Header/>
<div className="mt-12">

<SectionOne/>
    <Footer/>
</div>
    </div>
  )
}

export default Sponsorship
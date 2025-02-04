import  { useEffect } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import { VisualChronicles } from '../../components/specific/Gallery'
type Props = {}

function Gallery({}: Props) {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="m-auto  w-full bg-black max-w-[1680px]">


    <Header />


<div className="mt-24   ">

   <VisualChronicles />
    <Footer />
</div>
</div>
  )
}

export default Gallery
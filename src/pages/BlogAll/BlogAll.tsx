import { useEffect } from 'react'
import SectionOne from '../../components/specific/BlogAll/SectionOne'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionTwo from "../../components/specific/BlogAll/SectionTwo"
type Props = {}

function BlogAll({ }: Props) {

   useEffect(()=>{
          window.scrollTo(0,0);
          
        },[])
  

  return (
    <div className="m-auto bg-black max-w-[1440px]">
      <Header />
      <div className="mt-20">
      <SectionOne />
      <SectionTwo />
      <Footer />

</div>
    </div>
  )
}

export default BlogAll
import Footer from '../../components/reusable/Footer/Footer'
import { Header } from '../../components/reusable/Headers'
import SectionEight from '../../components/specific/Home/SectionEight'
import SectionFive from '../../components/specific/Home/SectionFive'
import SectionFour from '../../components/specific/Home/SectionFour'
import SectionOne from '../../components/specific/Home/SectionOne'
import SectionSeven from '../../components/specific/Home/SectionSeven'
import SectionSix from '../../components/specific/Home/SectionSix'
import SectionThree from '../../components/specific/Home/SectionThree'
import SectionTwo from '../../components/specific/Home/SectionTwo'
import SectionNine from "../../components/specific/Home/SectionNine"
import SectionTen from "../../components/specific/Home/SectionTen"
import SectionTwelve from "../../components/specific/Home/SectionTwelve"
import { useEffect, useState } from 'react'
import SplashScreen from '../../components/splash/SplashScreen'
function Home() {
  const [loading,setLoading] = useState(true);

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },600)

    },[])
  return (
  <>
  
 { loading ?
 
 <SplashScreen/>
 :   <div className="m-auto max-w-[1680px] w-full">
        <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
       <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
        <SectionEight/>
        <SectionNine/>
        <SectionTen/>
        <SectionTwelve/>
        {/* <SectionOne/>
        <SectionTwo/>
        <SectionNine/> */}
        <Footer/>
    </div>}
  </>
  )
}

export default Home
import  { useEffect } from 'react'
import Footer from '../../components/reusable/Footer/Footer';
import { Header } from '../../components/reusable/Headers';
import WhatsNews from '../../components/specific/NewsAll/WhatsNews';
import AllNews from '../../components/specific/NewsAll/AllNews';
type Props = {}

function NewsAll({ }: Props) {


      useEffect(()=>{
        window.scrollTo(0,0);
        
      },[])

    return (
        <div className="m-auto max-w-[1440px]">


            <Header />
            <div className="mt-20">

            <WhatsNews />
            <AllNews />
            <Footer />
</div>

        </div>
    )
}

export default NewsAll
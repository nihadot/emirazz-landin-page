import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import { useEffect } from 'react'
import {
    BelieveInExploring,
    BundlessPotensial,
    DepthExploration,
    HeroSection,
    Innovation,
    DeepWithUs
    , ExploreTheWorld
} from '../../components/DeepSea'
type Props = {}

function DeepSea({ }: Props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="m-auto relative bg-black max-w-[1440px]">
            <Header />
            <div className="mt-24"></div>
            <HeroSection />
            <BelieveInExploring />
            <DepthExploration />
            <Innovation />
            <div className="px-4  relative md:px-10 lg:px-20" dir='ltr'>
                <BundlessPotensial />
                <ExploreTheWorld />
                {/* 
                <Image
                    alt=''
                    src={treeThree}
                    className='w-[300px] h-[300px] brightness-50 -bottom-[100px] absolute object-contain'
                />

                <Image
                    alt=''
                    src={treeTwo}
                    className='w-[300px] h-[300px] brightness-50 -bottom-[100px] right-0 absolute object-contain'
                />
 */}

            </div>
            <DeepWithUs />
            <Footer />
        </div>
    )
}

export default DeepSea
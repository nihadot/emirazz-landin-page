import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import { useEffect } from 'react'

import {
    HeroSection,
    OurApproach
} from '../../components/specific/Invention'
type Props = {}

function ArtPage({ }: Props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="m-auto bg-black max-w-[1440px]">
            <Header />
            <HeroSection />
            <OurApproach />
            <Footer />
        </div>
    )
}

export default ArtPage
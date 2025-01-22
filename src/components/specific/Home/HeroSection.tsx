import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import { technologyRealEstateInvention } from '../../../assets/images'
import Banner from '../../reusable/Banner/Banner'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import H1 from '../../reusable/Home/H1'
type Props = {}

function HeroSection({ }: Props) {

    const language = useSelector((state: RootState) => state?.language?.language);

    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
        {language === 'en' &&
            <H1
                value={'Technology. Real Estate. Invention.'}
            />}



        {language === 'ar' && <>
            <HeadingOne
                className={` !text-5xl text-center md:text-start md:!text-7xl mb-3 pt-0 sm:pt-0`}
                content={HomeJSON?.section1[language as 'en' | 'ar']?.h1?.[0]}
            />

            <HeadingOne
                className={`md:mb-6 !leading-tight !text-5xl  text-center md:text-start md:!text-7xl mb-3 pt-0 sm:pt-0`}
                content={HomeJSON?.section1[language as 'en' | 'ar']?.h1?.[1]}
            />

            <HeadingOne
                className={`md:mb-6  !leading-tight !text-5xl  text-center md:text-start md:!text-7xl mb-3 pt-0 sm:pt-0`}
                content={HomeJSON?.section1[language as 'en' | 'ar']?.h1?.[2]}
            />
        </>}
    </div>


    return (
        <section className="mt-0 sm:mt-20">
            <Banner
                alt={''}
                imageUrl={technologyRealEstateInvention}
                home
                children={children}
            />
        </section>
    )
}

export default HeroSection
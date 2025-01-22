import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import { technologyRealEstateInvention } from '../../../assets/images'
import Banner from '../../reusable/Banner/Banner'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
type Props = {}

function SectionOne({ }: Props) {

    const language = useSelector((state: RootState) => state?.language?.language);

    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
        {language === 'en' && <HeadingOne
            className={` text-center !max-w-[650px] sm:!leading-[103.62px] !font-bold font-montserrat sm:text-start !text-[45px] !leading-[60.95px]   sm:!text-[85px] lg:!leading-[1.2] uppercase lg:!text-[85px] mb-3 pt-8 sm:pt-0`}
            content={'Technology. Real Estate. Invention'}
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
        <div className="mt-0 sm:mt-20">
            <Banner
                alt={''}
                imageUrl={technologyRealEstateInvention}
                home
                children={children}
            />
        </div>
    )
}

export default SectionOne
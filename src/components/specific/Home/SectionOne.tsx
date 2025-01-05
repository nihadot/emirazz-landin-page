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
            className={`md:mb-6  text-center sm:text-start uppercase sm:!text-7xl mb-3 pt-8 sm:pt-0`}
            content={HomeJSON?.section1[language]?.h1}
        />}


        {language === 'ar' && <>
            <HeadingOne
                className={`md:mb-6 !leading-tight !text-5xl text-center md:text-start md:!text-7xl mb-3 pt-0 sm:pt-0`}
                content={HomeJSON?.section1[language]?.h1?.[0]}
            />

            <HeadingOne
                className={`md:mb-6 !leading-tight !text-5xl  text-center md:text-start md:!text-7xl mb-3 pt-0 sm:pt-0`}
                content={HomeJSON?.section1[language]?.h1?.[1]}
            />

            <HeadingOne
                className={`md:mb-6  !leading-tight !text-5xl  text-center md:text-start md:!text-7xl mb-3 pt-0 sm:pt-0`}
                content={HomeJSON?.section1[language]?.h1?.[2]}
            />
        </>}
    </div>


    return (
        <div className="">
            <Banner
                alt={HomeJSON?.section1[language]?.h1}
                imageUrl={technologyRealEstateInvention}
                home
                children={children}
            />
        </div>
    )
}

export default SectionOne
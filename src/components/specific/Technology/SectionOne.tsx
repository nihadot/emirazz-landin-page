import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import { image1 } from '../../../assets/images'
import Banner from '../../reusable/Banner/Banner'
// import { useLanguage } from '../../../LanguageContext'
import HomeJSON from "../../../data/technology.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
type Props = {}

function SectionOne({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);

    // const { language } = useLanguage();



    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
        <HeadingOne
            className='md:mb-6 mb-3 pt-8 sm:pt-0'
            content={HomeJSON.section1[language as 'en' | 'ar'].h1}
        />
        <Paragraph
            className='text-white/80'
            content={HomeJSON.section1[language as 'en' | 'ar'].p}
        />
    </div>


    return (
        <div className="">
            <Banner
                alt={HomeJSON.section1[language as 'en' | 'ar'].h1}
                imageUrl={image1}
                home
                linearGradient
                children={children}
            />
        </div>
    )
}

export default SectionOne
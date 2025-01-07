import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingTwo from '../../reusable/Titles/MainHeading/HeadingTwo'
import Banner from '../../reusable/Banner/Banner'
import { aboutImage1 } from '../../../assets/images'
import SectionTwo from './SectionTwo'
// import { useLanguage } from '../../../LanguageContext'
import AboutJSON from "../../../data/about.json"
// import { useLanguage } from '../../../LanguageContext'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

type Props = {}

function SectionOne({ }: Props) {
    return (
        <div className='px-4 relative md:px-10 lg:px-20 pb-12 bg-black'>
            <SectionOneScreen />

            <div className=" mt-20 md:mt-40">

                <SectionTwo />
            </div>
        </div>
    )
}

export default SectionOne


function SectionOneScreen() {

    // const { language } = useLanguage();
    // const { language } = useLanguage();
    const language = useSelector((state: RootState) => state.language.language);

    return (
        <div className='relative pt-8 '>

            <div className="bg-[#01AFEA]  absolute right-0 top-16 w-32 h-32 rounded-full blur-xl opacity-30"></div>
            <div className="bg-[#01AFEA]  absolute left-0 top-16 w-32 h-32 rounded-full blur-xl opacity-30"></div>
            <div className="bg-[#01AFEA]  absolute left-0 -bottom-20 w-32 h-32 rounded-full blur-xl opacity-30"></div>
            <div className="bg-[#01AFEA]  absolute right-0 -bottom-20 w-32 h-32 rounded-full blur-xl opacity-30"></div>

            <div className="flex flex-col    items-center ">

                <Paragraph
                    content={AboutJSON.section1[language as 'en' | 'ar'].p}
                    className=' text-center'
                />
                <HeadingTwo
                    className='!max-w-[850px] text-center !leading-tight'
                    content={AboutJSON.section1[language as 'en' | 'ar'].h1} />
            </div>

            <Banner
            alt={AboutJSON.section1[language as 'en' | 'ar'].h1}
            
                imageUrl={aboutImage1}
                containerClassName='!h-[600px] sm:!h-[466px] !object-cover'
            />
        </div>
    )
}
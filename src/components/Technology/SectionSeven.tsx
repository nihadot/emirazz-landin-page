import Paragraph from '../reusable/Paragraph/Paragraph'
import Banner from '../reusable/Banner/Banner'
import { image13 } from '../../assets/images'
import HeadingThree from '../reusable/Titles/MainHeading/HeaderThree'
// import { useLanguage } from '../../../LanguageContext'
import HomeJSON from "../../data/technology.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

type Props = {}

function SectionSeven({ }: Props) {

    // const { language } = useLanguage();
    const language = useSelector((state: RootState) => state.language.language);


    const children = <div className="px-4 z-50 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center  w-full h-full">
        <HeadingThree
            className=' max-w-max mb-4'

            content={HomeJSON.section6[language as 'en' | 'ar'].banners[0].h3}
        />
        <Paragraph
            className='!font-light '

            content={HomeJSON.section6[language as 'en' | 'ar'].banners[0].p}
        />
    </div>


    return (
        <div className="flex relative  pt-20 md:pt-32">
            {/*  */}

            <div className="relative  flex-1 items-center pe-0 sm:pe-4 flex flex-col ">

                <HeadingThree
                    className=' text-center max-w-max mb-4'
                    content={HomeJSON.section6[language as 'en' | 'ar'].h3}

                />

                <Paragraph
                    className='!font-light text-center mb-10'

                    content={HomeJSON.section6[language as 'en' | 'ar'].p}
                />



                <Banner
                    imageUrl={image13}
                    containerClassName='!h-[700px] '
                    alt={HomeJSON.section6[language as 'en' | 'ar'].h3}
                    children={children}
                    brightness
                />
            </div>


        </div>
    )
}

export default SectionSeven
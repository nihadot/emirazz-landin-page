import Paragraph from '../../reusable/Paragraph/Paragraph'
import { image4, image5 } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
// import { useLanguage } from '../../../LanguageContext'
import HomeJSON from "../../../data/technology.json"
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
type Props = {}

function SectionThree({ }: Props) {

    // const { language } = useLanguage();
    const language = useSelector((state: RootState) => state.language.language);

    return (
        <div className=" pt-0 md:pt-20">
            <div className="flex lg:flex-row flex-col-reverse justify-center pb-20 gap-0 sm:gap-8 items-center">
                {/*  */}
                <div className="relative w-fit pt-8 sm:pt-0 pe-0 sm:pe-4 flex flex-col ">
                    <div className="bg-[#BC13FE]  absolute right-3 -bottom-24 w-32 h-32 rounded-full blur-xl opacity-30"></div>

                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={image4}
                        alt={HomeJSON.section2[language].cards[0].h3}
                    />
                </div>

                {/* images */}
                <div className="flex flex-col sm:pt-0 pt-8 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={HomeJSON.section2[language].cards[0].h3}
                    />
                    <Paragraph content={HomeJSON.section2[language].cards[0].p} />
                </div>
            </div>







            <div className="flex pt-8 lg:flex-row flex-col-reverse justify-center sm:gap-8 items-center">
                {/*  */}
                <div className="relative w-fit  pe-0 md:pt-0 sm:pe-4 flex flex-col ">
                    <div className="bg-[#BC13FE]  absolute right-3 -bottom-24 w-32 h-32 rounded-full blur-xl opacity-30"></div>
                    <Image
                        className='w-[526px] h-[400px] rounded-2xl md:h-[499px] object-cover'
                        src={image5}
                        alt={HomeJSON.section2[language].cards[1].h3}
                    />
                </div>

                {/* images */}
                <div className="flex flex-col sm:pb-0 pb-8 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={HomeJSON.section2[language].cards[1].h3}
                    />
                    <Paragraph
                        className='!font-light'
                        content={HomeJSON.section2[language].cards[1].p}
                    />
                </div>
            </div>

        </div>
    )
}

export default SectionThree



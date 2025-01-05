import Paragraph from '../../reusable/Paragraph/Paragraph'
import { image10, image11, image12 } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
// import { useLanguage } from '../../../LanguageContext'
import HomeJSON from "../../../data/home"
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'

type Props = {}

function SectionSix({ }: Props) {
    // const { language } = useLanguage();
    const language = useSelector((state: RootState) => state.language.language);

    return (
        <div className="pt-0 md:pt-28">
            <div className="flex relative justify-center items-center">
                {/*  */}

                <div className="relative pb-8 text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <HeadingThree
                        className='max-w-max mb-4'
                        content={HomeJSON.section5[language].h3}

                    />

                    <Paragraph
                        className='!font-light !max-w-6xl '

                        content={HomeJSON.section5[language].p}
                    />
                </div>


            </div>



            {/* first image section */}



            <div className="flex flex-col-reverse md:flex-row  justify-center pb-4 sm:pb-24 gap-0 sm:gap-8 pt-8 ms:pt-40 items-center">
                {/*  */}
                <div className="relative w-fit pe-0 sm:pe-4 pb-4 md:pb-0 flex flex-col ">

                    <div className="bg-[#BC13FE]  absolute right-3 -bottom-24 w-32 h-32 rounded-full blur-xl opacity-30"></div>

                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={image10}
                        alt={HomeJSON.section5[language].cards[0].h3}
                    />
                </div>


                {/* images */}
                <div className="flex flex-col sm:pb-0 pb-4 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={HomeJSON.section5[language].cards[0].h3}

                    />

                    <Paragraph
                        content={HomeJSON.section5[language].cards[0].p}

                        className='!font-light ' />
                </div>
            </div>

            {/* first image section */}




            {/* last images  image section */}





            <div className="flex flex-col md:flex-row relative pb-0 gap-0 sm:gap-8 pt-0 md:pt-0 items-center">
                {/*  */}


                {/* images */}
                <div className="flex flex-col  sm:pb-0 pb-4 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={HomeJSON.section5[language].cards[1].h3}

                    />

                    <Paragraph
                        content={HomeJSON.section5[language].cards[1].p}

                        className='!font-light'
                    />
                </div>

                <div className="relative items-end flex-1 sm:pe-4 pe-0 flex flex-col ">


                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={image11}
                        alt={HomeJSON.section5[language].cards[1].h3}
                    />
                </div>



            </div>
            {/* last images  image section */}





            {/* first image section */}

            <div className="flex flex-col-reverse md:flex-row justify-center pb-4 sm:pb-24 gap-0 sm:gap-8 pt-4 md:pt-20 items-center">
                {/*  */}
                <div className="relative w-fit pe-0 sm:pe-4 flex flex-col ">


                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={image12}
                        alt={HomeJSON.section5[language].cards[2].h3}
                    />
                </div>


                {/* images */}
                <div className="flex flex-col sm:pb-0 pb-8 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={HomeJSON.section5[language].cards[2].h3}


                    />

                    <Paragraph
                        content={HomeJSON.section5[language].cards[2].p}

                        className='!font-light' />
                </div>
            </div>


            {/* first image section */}



        </div>
    )
}

export default SectionSix
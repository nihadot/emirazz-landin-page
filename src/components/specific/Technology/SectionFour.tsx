import { image6, image7 } from '../../../assets/images'
// import { useLanguage } from '../../../LanguageContext';
import Image from '../../reusable/Image/Image'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import HomeJSON from "../../../data/technology.json"
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'


function SectionFour() {
        // const { language } = useLanguage();
        const language = useSelector((state: RootState) => state.language.language);
    
    return (

        <div className="">
            <div className="flex relative pb-4 justify-center items-center pt-20 sm:pt-60">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <HeadingThree
                        className='max-w-max mb-4'
                        content={HomeJSON.section3[language].h3}

                    />

                    <Paragraph
                        className='!font-light !max-w-5xl '

                        content={HomeJSON.section3[language].p}
                    />
                </div>


            </div>



            <div className="flex lg:flex-row flex-col-reverse justify-center pb-10 sm:pb-24 gap-0 sm:gap-8 pt-20 ms:pt-40 items-center">
                {/*  */}
                <div className="relative w-fit pe-0 sm:pe-4 flex flex-col ">

                    <div className="bg-[#BC13FE]  absolute right-3 -bottom-24 w-32 h-32 rounded-full blur-xl opacity-30"></div>

                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={image6}
                        alt={HomeJSON.section3[language].cards[0].h3}
                    />
                </div>


                {/* images */}
                <div className="flex flex-col sm:pb-0 pb-8 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={HomeJSON.section3[language].cards[0].h3}

                    />

                    <Paragraph
                        content={HomeJSON.section3[language].cards[0].p}

                        className='!font-light ' />
                </div>
            </div>




            {/* last images  image section */}

            <div className="flex flex-col md:flex-row relative pb-24 gap-0 sm:gap-8 pt-0 md:pt-8 items-center">
                {/*  */}


                {/* images */}
                <div className="flex flex-col  sm:pt-0 pt-8 flex-1">
                    <HeadingThree
                        className='mb-4'
                        content={HomeJSON.section3[language].cards[1].h3}


                    />

                    <Paragraph

content={HomeJSON.section3[language].cards[1].p}
className='!font-light'
                    />
                </div>

                <div className="relative pt-8 sm:pt-0 items-end flex-1 sm:pe-4 pe-0 flex flex-col ">


                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={image7}
                        alt={HomeJSON.section3[language].cards[1].h3}
                    />
                </div>



            </div>
            {/* last images  image section */}


        </div>
    )
}

export default SectionFour
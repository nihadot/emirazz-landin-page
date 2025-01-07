import { image14, image15 } from '../../../assets/images'
// import { useLanguage } from '../../../LanguageContext';
import Image from '../../reusable/Image/Image'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import HomeJSON from "../../../data/technology.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'


function SectionEight() {

    // const { language } = useLanguage();
    const language = useSelector((state: RootState) => state.language.language);

    return (

        <div className="">
            <div className="flex relative  pt-16 md:pt-60">

                {/*  */}



                <div className="relative  flex-1 items-center pe-0 sm:pe-4 flex flex-col ">

                    <HeadingThree
                        className=' text-center max-w-max mb-4'
                        content={HomeJSON.section7[language as 'en' | 'ar'].h3}

                    />

                    <Paragraph
                        className='!font-light  text-center mb-10'
                        content={HomeJSON.section7[language as 'en' | 'ar'].p}

                    />


                </div>


            </div>



            {/* first image section */}

            <div className="flex flex-col-reverse md:flex-row  justify-center pb-4 sm:pb-24 gap-0 sm:gap-8 pt-4 ms:pt-40 items-center">
                {/*  */}
                <div className="relative w-fit pe-0 pt-4 sm:pe-4 flex flex-col ">

                    {/* <div className="bg-[#BC13FE]  absolute right-3 -bottom-24 w-32 h-32 rounded-full blur-xl opacity-30"></div> */}

                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={image14}
                        alt={HomeJSON.section7[language as 'en' | 'ar'].cards[0].h3}
                    />
                </div>


                {/* images */}
                <div className="flex flex-col sm:pt-0 pt-4 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={HomeJSON.section7[language as 'en' | 'ar'].cards[0].h3}

                    />

                    <Paragraph
                        content={HomeJSON.section7[language as 'en' | 'ar'].cards[0].p}

                        className='!font-light' />
                </div>
            </div>
            {/* first image section */}





            {/* last images  image section */}


            <div className="flex flex-col md:flex-row relative pb-24 gap-0 sm:gap-8 pt-0 md:pt-10 items-center">
                {/*  */}


                {/* images */}
                <div className="flex flex-col  sm:pt-0 pt-8 flex-1">
                    <HeadingThree
                        className='mb-4'
                        content={HomeJSON.section7[language as 'en' | 'ar'].cards[1].h3}


                    />

                    <Paragraph
                        content={HomeJSON.section7[language as 'en' | 'ar'].cards[1].p}
                        className='!font-light '
                    />
                </div>

                <div className="relative items-end flex-1 sm:pe-4 pt-4 md:pt-0 pe-0 flex flex-col ">


                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={image15}
                        alt={HomeJSON.section7[language as 'en' | 'ar'].cards[1].h3}
                    />
                </div>



            </div>
            {/* last images  image section */}


        </div>
    )
}

export default SectionEight
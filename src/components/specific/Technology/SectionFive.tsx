import HeadingTwo from '../../reusable/Titles/MainHeading/HeadingTwo'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import { image8, image9 } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
// import { useLanguage } from '../../../LanguageContext'
import HomeJSON from "../../../data/technology.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

type Props = {}

function SectionFive({ }: Props) {
            // const { language } = useLanguage();
            const language = useSelector((state: RootState) => state.language.language);
    
    return (
        <div className="pt-0 md:pt-28">
            <div className="flex relative justify-center items-center">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <HeadingThree
                        className='max-w-max mb-4'
                        content={HomeJSON.section4[language].h3}

                    />

                    <Paragraph
                        className='!font-light '
                        content={HomeJSON.section4[language].p}
                    />
                </div>


            </div>



            {/* first image section */}
            <div className="flex md:flex-row flex-col-reverse justify-center pb-0 sm:pb-24 gap-0 sm:gap-8 pt-8 md:pt-20 ms:pt-40 items-center">
                {/*  */}
                <div className="relative w-fit pe-0 pt-4 md:pt-0 sm:pe-4 flex flex-col ">

                    {/* <div className="bg-[#BC13FE]  absolute right-3 -bottom-24 w-32 h-32 rounded-full blur-xl opacity-30"></div> */}

                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={image8}
                        content={HomeJSON.section4[language].cards[0].h3}
                    />
                </div>


                {/* images */}
                <div className="flex flex-col sm:pt-0 pt-8 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={HomeJSON.section4[language].cards[0].h3}

                    />

                    <Paragraph
                        content={HomeJSON.section4[language].cards[0].p}

                        className='!font-light ' />
                </div>
            </div>
            {/* first image section */}




            {/* last images  image section */}

            <div className="flex flex-col md:flex-row relative pb-24 gap-0 sm:gap-8 pt-0 md:pt-8 items-center">
                {/*  */}


                {/* images */}
                <div className="flex flex-col  sm:pt-0 pt-8 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={HomeJSON.section4[language].cards[1].h3}

                    />

                    <Paragraph
                        content={HomeJSON.section4[language].cards[1].p}

                        className='!font-light '
                    />
                </div>

                <div className="relative items-end flex-1 pt-4 sm:pe-4 pe-0 flex flex-col ">


                    <Image
                        className='w-[526px] h-[400px]  md:pt-0 rounded-2xl sm:h-[499px] object-cover'
                        src={image9}
                        content={HomeJSON.section4[language].cards[0].h3}
                    />
                </div>



            </div>
            {/* last images  image section */}


        </div>
    )
}

export default SectionFive
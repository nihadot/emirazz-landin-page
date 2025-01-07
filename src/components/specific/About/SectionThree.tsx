import Image from '../../reusable/Image/Image'
import { aboutImage3, aboutImage4 } from '../../../assets/images'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import AboutJSON from "../../../data/about.json"
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'

type Props = {}

function SectionThree({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);

    return (
        <div className="px-4 md:px-10 gap-8 lg:px-20 bg-black flex flex-wrap xl:flex-row flex-col justify-start items-start pt-10 sm:pt-14">

            {/* section one */}
            <div className=" flex-1 pe-0 sm:pe-4 flex flex-col relative ">
                <Paragraph

                    content={AboutJSON.section3[language].p1}
                />

                <HeadingThree
                    className='!leading-[1.2] md:text-[45px] '
                    content={AboutJSON.section3[language].h3}
                />
                <Paragraph
                    className='mt-4'
                    content={AboutJSON.section3[language].p}

                />
            </div>


            {/* images */}
            <div className="flex flex-1 justify-center w-full xl:w-fit pt-0 relative md:pe-0 ">

            <div className="bg-[#CECECE33] absolute top-0 left-0 w-[70px] h-[70px] rounded-[13px]"></div>
            <div className="bg-[#CECECE33] absolute  -bottom-12 w-[70px] h-[70px] rounded-[13px]"></div>
                <Image
                    src={aboutImage3}
                    className='rounded-2xl mb-10 -me-60 mt-60 flex-1 sm:flex-none sm:-me-36  z-30 border border-black  sm:mt-32 w-[297px] h-[339px] object-cover'
                    alt={AboutJSON.section3[language].h3}
                />

                <div className="w-[70px] h-[70px]"></div>


                <Image
                    src={aboutImage4}
                    className='rounded-2xl border flex-1 sm:flex-none  -ml-3 sm:ml-0 border-black w-[297px] h-[339px] object-cover'
                    alt={AboutJSON.section3[language].h3}
                />
            </div>

        </div>
    )
}

export default SectionThree
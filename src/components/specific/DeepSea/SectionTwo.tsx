import Image from '../../reusable/Image/Image'
import { deepSea2Icon, treeFour } from '../../../assets/images'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import DeepSeaJSON from "../../../data/deepSea.json"

type Props = {}

function SectionTwo({}: Props) {
  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className="overflow-hidden pt-0 md:pt-20 pb-32 px-4 md:px-10 lg:px-20 sm:mt-20">
            <div className="flex  relative lg:flex-row flex-col-reverse justify-center pb-20 gap-0 sm:gap-8 items-center">
                {/*  */}
                <div className="relative w-fit pt-8 sm:pt-0 pe-0 sm:pe-4 flex flex-col ">

                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={deepSea2Icon}
                        alt={DeepSeaJSON.section1[language as 'en' | 'ar'].p}
                    />
                </div>
         
                <div className="flex flex-col sm:pt-0 pt-8 flex-1">
                    <Paragraph
                        className=' mb-4'
                        content={DeepSeaJSON.section1[language as 'en' | 'ar'].p}
                    />
                    {/* <Paragraph content={DeepSeaJSON.section1[language as 'en' | 'ar'].p} /> */}
                </div>

                <Image
                alt=''
                src={treeFour}
                className='w-[187px] brightness-50 md:brightness-75  md:-right-40 -bottom-60 -rotate-45 absolute h-[283px] object-contain'
                />
            </div>







            <div className="flex pt-8 lg:flex-row flex-col-reverse justify-center sm:gap-8 items-center">
                {/*  */}
                {/* <div className="relative w-fit  pe-0 md:pt-0 sm:pe-4 flex flex-col ">
                    <div className="bg-[#BC13FE]  absolute right-3 -bottom-24 w-32 h-32 rounded-full blur-xl opacity-30"></div>
                    <Image
                        className='w-[526px] h-[400px] rounded-2xl md:h-[499px] object-cover'
                        src={image5}
                        alt={DeepSeaJSON.section2[language as 'en' | 'ar'].cards[1].h3}
                    />
                </div> */}

                {/* images */}
                {/* <div className="flex flex-col sm:pb-0 pb-8 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={DeepSeaJSON.section2[language as 'en' | 'ar'].cards[1].h3}
                    />
                    <Paragraph
                        className='!font-light'
                        content={DeepSeaJSON.section2[language as 'en' | 'ar'].cards[1].p}
                    />
                </div> */}
            </div>

        </div>
  )
}

export default SectionTwo
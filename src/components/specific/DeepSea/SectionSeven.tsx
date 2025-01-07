import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import {  diveDeepUs } from '../../../assets/images'
import Banner from '../../reusable/Banner/Banner'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import DeepSeaJSON from "../../../data/deepSea.json"

type Props = {}

function SectionSeven({}: Props) {
    const language = useSelector((state: RootState) => state.language.language);



    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
    <HeadingOne
        className='md:mb-6 mb-3 pt-8 sm:pt-0'
        content={DeepSeaJSON.section7[language as 'en' | 'ar'].h3}
    />
    <Paragraph
        className='text-white/80'
        content={DeepSeaJSON.section7[language as 'en' | 'ar'].p}
    />
  </div>
  
  
   return(
      <div className="px-4 md:px-10 pt-8 lg:px-20">
      <Banner
            containerClassName='!h-[700px]'
          alt={DeepSeaJSON.section2[language as 'en' | 'ar'].p}
          imageUrl={diveDeepUs}
          // home
          linearGradient
          children={children}
      />
  </div>
   )
}

export default SectionSeven
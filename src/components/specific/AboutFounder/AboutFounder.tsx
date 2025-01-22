import Image from '../../reusable/Image/Image'
import { founder } from '../../../assets/images'
import AboutFounderJSON from "../../../data/aboutFounder.json"
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeaderFour from '../../reusable/Titles/MainHeading/HeaderFour'

type Props = {}

function AboutFounder({}: Props) {
    const language = useSelector((state: RootState) => state.language.language);


  return (
    <div className='px-4 md:px-10 gap-8  justify-between lg:px-20 bg-black flex flex-wrap xl:flex-row flex-col w-full items-start pb-14 pt-32 md:pt-60 text-white'>
    <div className="flex  w-full lg:flex-row flex-col justify-center sm:gap-8 items-center">
      {/*  */}
      <div className="relative w-full sm:w-[370px] pb-8 md:pb-0 pe-0 md:pt-0 sm:pe-4 flex flex-col ">
        <Image
          className='sm:w-[374px] border w-full rounded-2xl h-[420px] object-cover'
          src={founder}
          alt={AboutFounderJSON.section1[language as 'en' | 'ar'].h1}
        />
           <HeaderFour
           className='pt-4 text-center !font-montserrat'
      content='Ashiq Emiraaz'
      />

<HeaderFour
           className='!text-xl !font-medium pt-0 !font-montserrat text-center'
      content='Founder & CEO'
      />
        {/* <div className="bg-slate-200 sm:w-[374px] w-full rounded-2xl h-[420px]"></div> */}
      </div>
   
      {/* images */}
      <div className="flex flex-col sm:pb-0 pb-0 md:pb-8 flex-1">
        <Paragraph
          className='mb-2'
          content={AboutFounderJSON.section1[language as 'en' | 'ar'].title}
        />
        <HeadingOne
          className='mb-4 '
          content={AboutFounderJSON.section1[language as 'en' | 'ar'].h1}

        />
        <Paragraph
          className='!font-light !text-lg'
          content={AboutFounderJSON.section1[language as 'en' | 'ar'].p}
        />
      </div>
    </div>
  </div>
  )
}

export default AboutFounder
import React from 'react'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Banner from '../../reusable/Banner/Banner'
import { aboutImage7 } from '../../../assets/images'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import AboutJSON from "../../../data/about.json"

type Props = {}

function SectionSix({}: Props) {
  
    const language = useSelector((state: RootState) => state.language.language);
    
    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
       
       <Paragraph
       className='md:mb-2'
            content={AboutJSON.section6[language].banners[0].p1}
            />
        <HeadingThree
            className='md:mb-4 mb-3 pt-8 sm:pt-0'
            content={AboutJSON.section6[language].banners[0].h3}
            />
        <Paragraph
            className='text-white/80'
            content={AboutJSON.section6[language].banners[0].p}
            />


{/* <Paragraph
            className='text-white/80 pt-8'
            content='We hold ourselves to the highest ethical standards, ensuring that every decision we make reflects our core principles of transparency, responsibility, and respect. At the same time, we encourage a culture of innovation, where new ideas are welcomed, and bold thinking is rewarded. Collaboration is key to our success, both internally and with our partners, as we work together to achieve common goals and drive meaningful progress.'
        /> */}
    </div>


  return (
    <div className='px-4 md:px-10 md:pt-40 mt-0  lg:px-20 bg-black text-white'>
        <Banner
        containerClassName='!h-[700px]'
        imageUrl={aboutImage7}
        brightness
        alt={AboutJSON.section6[language].banners[0].h3}
    
        children={children}
        />
    </div>
  )
}

export default SectionSix
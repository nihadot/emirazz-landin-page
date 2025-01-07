import React from 'react'
import Banner from '../../reusable/Banner/Banner'
import { image1, supportingEmergingImages } from '../../../assets/images'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import ArtJSON from "../../../data/art.json"

type Props = {}

function SectionFour({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);


    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
    <HeadingOne
        className='md:mb-6 mb-3 pt-8 sm:pt-0'
        content={ArtJSON?.section3[language]?.h3}
    />
    <Paragraph
        className='text-white/80'
        content={ArtJSON?.section3[language]?.p}
    />
</div>


    return (
    <div className='px-4 mt-40 md:px-10 pb-28 relative lg:px-20'>
        
        <div className="bg-[#A513FE] absolute top-0 -left-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#FE133D] -right-10 absolute bottom-16 w-40 h-40 rounded-full blur-xl opacity-55"></div>

        <Banner
                // containerClassName='pt-8'
                alt='Supporting Emerging Artists'
                imageUrl={supportingEmergingImages}
                
                containerClassName='!h-[668px] mt-12'
                // home
                brightness
                // linearGradient
                children={children}
            />
    </div>
  )
}

export default SectionFour
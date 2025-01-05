import React from 'react'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Banner from '../../reusable/Banner/Banner'
import { IconButton } from '../../reusable/Buttons'
import { rightArrow } from '../../../assets/svg'
import { getStarted } from '../../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import ScaleUpJSON from "../../../data/scaleup.json"

type Props = {}

function SectionFour({}: Props) {

    
    const language = useSelector((state: RootState) => state.language.language);
    console.log(ScaleUpJSON.section4[language].title,language,'ScaleUpJSON.section4[language].title')


    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
        <Paragraph
        content={ScaleUpJSON.section4[language].title}

        />
    <HeadingOne
        className='md:mb-6 mb-3   !text-center sm:!text-start pt-8 !max-w-[700px] !leading-snug sm:pt-0'
        content={ScaleUpJSON.section4[language].h3}
    />
    <Paragraph
        className='text-white/80 sm:!text-start !text-center'
        content={ScaleUpJSON.section4[language].p}
    />
    <div className="pt-3">

    <IconButton
    iconUrl={rightArrow}
    content='Learn More'
    />
    </div>
</div>

return (
    <div className="px-4 pt-20 sm:pt-40 md:px-10 lg:px-20 bg-black ">
        <Banner
            // containerClassName=''
            alt='Get Started Today'
            imageUrl={getStarted}
            containerClassName='!h-[700px]'
            // home
            // linearGradient
            brightness
            children={children}
        />
    </div>
)
}

export default SectionFour
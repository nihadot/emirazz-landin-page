import React from 'react'
import Banner from '../../reusable/Banner/Banner'
import { yourGateWayToDubai } from '../../../assets/images'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import realestateJSON from "../../../data/realestate.json"

type Props = {}

function SectionOne({}: Props) {
    const language = useSelector((state: RootState) => state.language.language);


    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
    <HeadingOne
        className='md:mb-6 mb-3 pt-8 !max-w-[700px] !leading-snug sm:pt-0'
        content={realestateJSON.section1[language].h1}

   />
    <Paragraph
        className='text-white/80'
        content={realestateJSON.section1[language].p}
    />
</div>

return (
    <div className="">
        <Banner
            // containerClassName=''
            alt={realestateJSON.section1[language].h1}
            imageUrl={yourGateWayToDubai}
            // containerClassName=''
            home
            // linearGradient
            brightness
            children={children}
        />
    </div>
)
}

export default SectionOne
import React from 'react'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Card from '../../reusable/Card/Card'
import { rightArrow } from '../../../assets/svg'
import { IconButton } from '../../reusable/Buttons'
import Banner from '../../reusable/Banner/Banner'
import { deepSea, deepSeaIcon, empoweringInnovation, empoweringVision, invention, sponsorship } from '../../../assets/images'
import { RootState } from '@reduxjs/toolkit/query'
import { useSelector } from 'react-redux'
import InventionJOSN from "../../../data/invention.json"
import Image from '../../reusable/Image/Image'
type Props = {}

function SectionOne({}: Props) {

    const language = useSelector((state: RootState) => state.language.language);


    const children = <div className="px-4  items-center md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
  <Image
  src={deepSeaIcon}
  className='w-[600px] h-[340px] object-contain'

  />
</div>


  return (
    <div className="flex flex-col px-4 md:px-10 lg:px-20  relative justify-center items-center pt-4 bg-black ">
    {/*  */}

    <Banner
                // containerClassName='pt-8'
                alt={InventionJOSN.section1[language].h1}
                imageUrl={deepSea}
                containerClassName='!h-[760px]'
                // home
                // linearGradient
                // brightness
                children={children}
            />




</div>
  )
}

export default SectionOne
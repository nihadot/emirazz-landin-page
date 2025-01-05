import React from 'react'
import Image from '../../reusable/Image/Image'
import { aboutImage5 } from '../../../assets/images'
import AboutFounderJSON from "../../../data/aboutFounder.json"
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import { RootState } from '../../../storey'
import { useSelector } from 'react-redux'
import Paragraph from '../../reusable/Paragraph/Paragraph'

type Props = {}

function AboutFounder({}: Props) {
    const language = useSelector((state: RootState) => state.language.language);


  return (
    <div className='px-4 md:px-10 gap-8  justify-between lg:px-20 bg-black flex flex-wrap xl:flex-row flex-col w-full items-start pb-14 pt-32 text-white'>
    <div className="flex  w-full lg:flex-row flex-col justify-center sm:gap-8 items-center">
      {/*  */}
      <div className="relative w-full sm:w-[370px] pb-8 md:pb-0 pe-0 md:pt-0 sm:pe-4 flex flex-col ">
        <Image
          className='sm:w-[374px] w-full rounded-2xl h-[420px] object-cover'
          src={aboutImage5}
          alt={AboutFounderJSON.section1[language].h1}
        />
      </div>
      {/* images */}
      <div className="flex flex-col sm:pb-0 pb-0 md:pb-8 flex-1">
        <Paragraph
          className='mb-2'
          content={AboutFounderJSON.section1[language].title}
        />
        <HeadingOne
          className='mb-4 '
          content={AboutFounderJSON.section1[language].h1}

        />
        <Paragraph
          className='!font-light !text-lg'
          content={AboutFounderJSON.section1[language].p}
        />
      </div>
    </div>
  </div>
  )
}

export default AboutFounder
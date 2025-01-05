import React from 'react'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import ArtJSON from "../../../data/art.json"

type Props = {}

function SectionTwo({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className='px-4 relative pb-40  gap-4 md:px-10 lg:px-20 pt-10 justify-center items-center flex flex-col'>
      <HeadingOne
        className='!font-normal !text-3xl !max-w-[100%] !text-center'
        content={ArtJSON.section1[language].title}
      />

      <HeadingThree

        className='!text-center !font-Komorebi font-normal italic !max-w-[600px]'

        content={ArtJSON.section1[language].h1}
      />
      <Paragraph
        className='!text-center !max-w-[800px]'

        content={ArtJSON.section1[language].p}
      />

      <div className="bg-[#13FEB7] absolute bottom-0 -left-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>
      <div className="bg-[#A513FE] -right-10 absolute bottom-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>

    </div>
  )
}

export default SectionTwo
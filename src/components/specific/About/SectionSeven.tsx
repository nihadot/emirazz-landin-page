import React from 'react'
import Image from '../../reusable/Image/Image'
import { aboutImage8 } from '../../../assets/images'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import { RootState } from '@reduxjs/toolkit/query'
import { useSelector } from 'react-redux'
import AboutJSON from "../../../data/about.json"


type Props = {}

function SectionSeven({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className='px-4 md:px-10 lg:px-20 bg-black flex flex-wrap xl:flex-row flex-col justify-start items-start pt-40 text-white'>


<div className="flex  lg:flex-row flex-col-reverse  w-full justify-center sm:gap-12 items-center">
              {/*  */}
              <div className="relative w-fit justify-between pe-0 md:pt-0 sm:pe-0  flex flex-col ">


                  <Image
                      className='w-[544px] h-[400px] rounded-2xl md:h-[574px] object-cover'
                      src={aboutImage8}
                      content={AboutJSON.section7[language].h3}
                  />
              </div>


              {/* images */}
              <div className="flex flex-col sm:pb-0 pb-8 flex-1">
                <Paragraph
                className='mb-2'
                content={AboutJSON.section7[language].p1}
                />
                  <HeadingThree
                      className='text-[45px] mb-4 '
                      content={AboutJSON.section7[language].h3}


                  />

                  <Paragraph
                      className='!font-light !text-lg !max-w-[700px]'

                content={AboutJSON.section7[language].p}
                    
                  />


              </div>
          </div>
    </div>
  

  )
}

export default SectionSeven
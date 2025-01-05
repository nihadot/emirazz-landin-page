import React from 'react'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Image from '../../reusable/Image/Image'
import { aboutImage9 } from '../../../assets/images'
import AboutJSON from "../../../data/about.json"
import { RootState } from '../../../storey'
import { useSelector } from 'react-redux'

type Props = {}

function SectionEight({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  
  return (
    <div className='px-4 md:px-10 gap-8 lg:px-20 bg-black flex flex-wrap xl:flex-row flex-col justify-start items-start pt-32 text-white'>


    <div className="flex  w-full lg:flex-row-reverse flex-col-reverse justify-center sm:gap-12 items-center">
                  {/*  */}
                  <div className="relative w-fit  pe-0 md:pt-0 sm:pe-0 flex flex-col ">
    
                      <div className="bg-[#BC13FE]  absolute right-3 -bottom-24 w-32 h-32 rounded-full blur-xl opacity-30"></div>
    
                      <Image
                          className='w-[544px] h-[400px] rounded-2xl md:h-[574px] object-cover'
                          src={aboutImage9}
                          content={AboutJSON.section8[language].h3}

                      />
                  </div>
    
    
                  {/* images */}
                  <div className="flex flex-col sm:pb-0 pb-8 flex-1">
                    <Paragraph
                    className='mb-2'
                    content={AboutJSON.section8[language].p1}

                    />
                      <HeadingThree
                          className='text-[45px] mb-4 '
                          content={AboutJSON.section8[language].h3}

                          // content='Strategic Procurement for Lasting Value'
    
                      />
    
                      <Paragraph
                          className='!font-light !text-lg !max-w-[700px]'
    
                          content={AboutJSON.section8[language].p}

                      />
    
    
                  </div>
              </div>
        </div>
  )
}

export default SectionEight
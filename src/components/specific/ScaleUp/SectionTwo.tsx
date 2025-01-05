import React from 'react'
import { ourMission } from '../../../assets/images'
import TextBanner from '../../reusable/TextBanner/TextBanner'
import Image from '../../reusable/Image/Image'
import ScaleUpJSON from "../../../data/scaleup.json"
import { RootState } from '@reduxjs/toolkit/query'
import { useSelector } from 'react-redux'

type Props = {}

function SectionTwo({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);


    return (
        <div className="bg-black px-4 md:px-10 lg:px-20  w-full py-0">
    
        <div className="sm:pt-40 pt-10 flex items-center flex-col sm:flex-row relative justify-end">
    
        <div className="sm:absolute relative left-0">
            <TextBanner
            containerClassName='sm:!ps-8'
            headingClassName='!p-0 !m-0'
            paragraphClassName='!pb-2'
                heading={ScaleUpJSON.section2[language].h2}
                paragraph={ScaleUpJSON.section2[language].p}
            />
        </div>
    
        <div className="flex justify-end">
    
            <Image
                src={ourMission}
                alt='⁠About Us'
                className='w-[780px]  rounded-2xl h-[400px] object-cover'
            />
        </div>
    </div>
    </div>
    
      
  )
}

export default SectionTwo
import React from 'react'
import realestateJSON from "../../../data/realestate.json"
import TextBanner from '../../reusable/TextBanner/TextBanner'
import Image from '../../reusable/Image/Image'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import { bundlessPotential } from '../../../assets/images'

type Props = {}

function SectionFive({}: Props) {
    const language = useSelector((state: RootState) => state.language.language);
  
    return (
        <div className="bg-black px-4 md:px-10 lg:px-20  w-full py-0">
    
        <div className="sm:pt-40 pt-10 flex items-center flex-col sm:flex-row relative justify-end">
    
        <div className={`sm:absolute relative left-0`}>
            <TextBanner
                    containerClassName='!pr-8 !max-h-[350px]'
    
                heading={realestateJSON.section5[language].h3}
                paragraph={realestateJSON.section5[language].p}
            />
        </div>
    
        <div className="flex justify-end">
    
            <Image
                src={bundlessPotential}
                alt={realestateJSON.section5[language].h3}
                className='w-[780px]  rounded-2xl h-[400px] object-cover'
            />
        </div>
    </div>
    </div>
    
  )
}

export default SectionFive
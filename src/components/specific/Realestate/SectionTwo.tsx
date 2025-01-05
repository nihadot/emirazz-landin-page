import React from 'react'
import TextBanner from '../../reusable/TextBanner/TextBanner'
import Image from '../../reusable/Image/Image'
import { realsEstateAbout } from '../../../assets/images'
import { RootState } from '../../../storey'
import { useSelector } from 'react-redux'
import realestateJSON from "../../../data/realestate.json"

type Props = {}

function SectionTwo({}: Props) {

    const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className="bg-black px-4 md:px-10 lg:px-20  w-full py-0">

    <div className="sm:pt-40 pt-10 flex items-center flex-col sm:flex-row relative justify-end">

    <div className={`sm:absolute relative left-0`}>
        <TextBanner
                containerClassName='!pr-8'

            heading={realestateJSON.section2[language].h2}
            paragraph={realestateJSON.section2[language].p}
        />
    </div>

    <div className="flex justify-end">

        <Image
            src={realsEstateAbout}
            alt={realestateJSON.section2[language].h2}
            className='w-[780px]  rounded-2xl h-[400px] object-cover'
        />
    </div>
</div>
</div>

  )
}

export default SectionTwo
import React from 'react'
import TextBanner from '../../reusable/TextBanner/TextBanner'
import Image from '../../reusable/Image/Image'
import { businessImage3 } from '../../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../../storey'
import BusinessJSON from "../../../data/business.json"

type Props = {}

function SectionThree({}: Props) {

    const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className="sm:pt-40 pt-4 flex items-center flex-col sm:flex-row relative justify-start">

    <div className="sm:absolute relative right-0">
        <TextBanner
        containerClassName='sm:!ps-8'
        heading={BusinessJSON.section3[language].h2}
        paragraph={BusinessJSON.section3[language].p}
        />
    </div>

    <div className="flex justify-end">

        <Image
            src={businessImage3}
            alt={BusinessJSON.section3[language].h3}
            className='w-[780px]  rounded-2xl h-[400px] object-cover'
        />
    </div>
</div>
  )
}

export default SectionThree
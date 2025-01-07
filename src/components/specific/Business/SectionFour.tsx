import React from 'react'
import TextBanner from '../../reusable/TextBanner/TextBanner'
import { businessImage4 } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import BusinessJSON from "../../../data/business.json"

type Props = {}

function SectionFour({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className="sm:pt-40 pt-4 flex items-center flex-col sm:flex-row relative justify-end">

<div className="sm:absolute relative left-0">
<TextBanner
        containerClassName='sm:!ps-8'
        heading={BusinessJSON.section4[language].h3}
        paragraph={BusinessJSON.section4[language].p}
        />
    </div>

    <div className="flex justify-end">

    <Image
            src={businessImage4}
            alt={BusinessJSON.section3[language].h3}
            className='w-[780px]  rounded-2xl h-[400px] object-cover'
        />
    </div>
</div>
  )
}

export default SectionFour
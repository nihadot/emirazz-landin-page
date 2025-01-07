import React from 'react'
import Image from '../../reusable/Image/Image'
import { aboutImage6, deepSea, deepSea2Icon, innovationFromAbyss, ourApproachToInvention, theDepthOfExploration, treeFour, treeOne, treeThree, treeTwo } from '../../../assets/images'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import DeepSeaJSON from "../../../data/deepSea.json"
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Banner from '../../reusable/Banner/Banner'

type Props = {}

function SectionFour({ }: Props) {
  const language = useSelector((state: RootState) => state.language.language);



  const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
    <HeadingOne
      className='md:mb-6 mb-3 pt-8 sm:pt-0'
      content={DeepSeaJSON.section4[language].h3}
    />
    <Paragraph
      className='text-white/80'
      content={DeepSeaJSON.section4[language].p}
    />
  </div>


  return (
    <div className="px-4 my-24 md:px-10 pt-8 lg:px-20">
      <Banner
        containerClassName='!h-[700px]'
        alt={DeepSeaJSON.section4[language].h3}
        imageUrl={innovationFromAbyss}
        // home
        linearGradient
        children={children}
      />
    </div>
  )
}

export default SectionFour
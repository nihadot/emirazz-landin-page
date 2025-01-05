import React from 'react'
import { Header } from '../../reusable/Headers'
import Footer from '../../reusable/Footer/Footer'
import Banner from '../../reusable/Banner/Banner'
import { image1 } from '../../../assets/images'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'

type Props = {}

function SectionOne({}: Props) {

  const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
  <HeadingOne
      className='md:mb-6 mb-3 pt-8 sm:pt-0'
      content='Propretyseller'
  />
  <Paragraph
      className='text-white/80'
      content='At Emiraaz, we believe in the future of living—one that is powered by smart technology, designed for convenience, and built for comfort. The Emiraaz SmartHome System brings the latest in home automation, offering seamless integration of technology into your everyday life. From energy-saving solutions to enhanced security features, our system is crafted to give you complete control over your home.'
  />
</div>

  return (
    <div className="">
            <Banner
                // containerClassName='pt-8'
                alt='Emiraaz & Technology: Shaping the Future'
                imageUrl={image1}
                containerClassName=''
                home
                linearGradient
                children={children}
            />
        </div>
  )
}

export default SectionOne
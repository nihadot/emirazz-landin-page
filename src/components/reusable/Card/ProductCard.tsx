import React from 'react'
import Card from './Card'
import demo from "../../../assets/images/demo.png"
import HeadingThree from '../Titles/MainHeading/HeaderThree'
import Paragraph from '../Paragraph/Paragraph'
import IconBtn from '../Buttons/IconBtn'
import { IconButton } from '../Buttons'
import { rightArrow } from '../../../assets/svg'

type Props = {}

function ProductCard({}: Props) {
  return (
    
    <div className=" sm:p-6">
        <Card
        
        imageUrl={demo}
        imageClassName='w-full h-full object-cover'
        />

        <HeadingThree
                        className='!text-[20px] pt-4 md:pt-2 !font-medium max-w-max mb-4'
        content='PropertySeller'
        />

        <Paragraph
                        className='!font-light !text-lg pb-2'
        content='Transform your living space with our cutting-edge SmartHome technology, offering seamless automation, energy efficiency, and enhanced security. Control your home from anywhere with a simple touch.'


        />

        <IconButton
        content='View All'
        iconUrl={rightArrow}
        />
    </div>
  )
}

export default ProductCard
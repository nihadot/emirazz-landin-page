import React from 'react'
import Paragraph from '../reusable/Paragraph/Paragraph'
import HeadingOne from '../reusable/Titles/MainHeading/HeadingOne'

type Props = {}

function SectionOne({}: Props) {
  return (
    
    <div className="px-4 pt-20 sm:pt-40 md:px-10 lg:px-20 bg-black ">
            <HeadingOne
            className='!max-w-[100%] !text-center'
            content='What’s New @ Emiraaz'
            />
            <Paragraph
            content=''
            className='Stay updated with the latest from Emiraaz. Discover our groundbreaking projects, key partnerships, and technological advancements, offering insights into our growth and impact.'
            />
    </div>
  )
}

export default SectionOne
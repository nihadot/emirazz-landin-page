import React from 'react'
import Image from '../Image/Image'
import { getStarted } from '../../../assets/images'
import Paragraph from '../Paragraph/Paragraph'
import HeaderFour from '../Titles/MainHeading/HeaderFour'
import { IconButton } from '../Buttons'
import { rightArrow } from '../../../assets/svg'

type Props = {}

function BlogCard({}: Props) {
  return (
    <div className=''>
        <Image
         src={getStarted}

         className='h-[285px]  w-full rounded-[15px] object-cover'
        />
        <HeaderFour
        className='mt-4 !text-xl'
        content='Dubai’s Weekly News Snapshot: 24-05-2024'

        />

        <IconButton

        className='!w-6 !h-6 mt-3'
        iconUrl={rightArrow}
        content='10 - 03 - 2024'
        />
    </div>
  )
}

export default BlogCard
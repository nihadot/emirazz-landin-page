import React from 'react'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Banner from '../../reusable/Banner/Banner'
import { art, image1, noOpacityLogo } from '../../../assets/images'
import Image from '../../reusable/Image/Image'

type Props = {}

function SectionOne({}: Props) {
    const children = <div className="px-4 flex items-center md:px-10 lg:px-20 absolute top-0 left-0 flex-col justify-center w-full h-full">
       <Image
       className='w-60 h-60 object-contain'
       src={noOpacityLogo}
       alt=''
       />
    </div>

    return (
        <div className="px-4 md:px-10 h-full pb-32 relative lg:px-20">
            <Banner
                // containerClassName='pt-8'
                alt='art logo'
                imageUrl={art}
                containerClassName='!h-[668px] mt-12'
                // home
                brightness
                // linearGradient
                children={children}
            />

<div className="bg-[#13FEB7] absolute -right-20 -top-20 w-40 h-40 rounded-full blur-xl opacity-55 "></div>
                <div className="bg-[#A513FE] absolute -left-20 -top-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#FE133D] absolute bottom-10 -left-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#13B7FE] absolute bottom-10 -right-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>

        </div>
    )
}

export default SectionOne
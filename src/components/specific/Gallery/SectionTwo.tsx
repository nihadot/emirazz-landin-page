import React from 'react'
import Banner from '../../reusable/Banner/Banner'
import Image from '../../reusable/Image/Image'
import { empoweringInnovation } from '../../../assets/images'

type Props = {}

function SectionTwo({}: Props) {
  return (
    <div className='px-4 md:px-10 relative lg:px-20 pt-8 md:pt-20'>
        
    
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
           <Image
           src={empoweringInnovation}
           className='h-[270px] w-full rounded-[15px]'
           />
                   <Image
           src={empoweringInnovation}
           className='h-[270px]  w-full object-cover rounded-[15px]'
           />
                   <Image
           src={empoweringInnovation}
           className='h-[270px]  w-full object-cover rounded-[15px]'
           />
                   <Image
           src={empoweringInnovation}
           className='h-[270px]  w-full object-cover rounded-[15px]'
           />
                   <Image
           src={empoweringInnovation}
           className='h-[270px]  w-full object-cover rounded-[15px]'
           />
                   <Image
           src={empoweringInnovation}
           className='h-[270px]  w-full object-cover rounded-[15px]'
           />

<Image
           src={empoweringInnovation}
           className='h-[270px]  w-full object-cover rounded-[15px]'
           />
              
            </div>
    </div>
  )
}

export default SectionTwo
import React from 'react'
import Banner from '../../reusable/Banner/Banner'
import { ourServicesImageOne, ourServicesImageTwo } from '../../../assets/images'
import TextBanner from '../../reusable/TextBanner/TextBanner'

type Props = {}

function SectionTwo({}: Props) {

    const childrenOne = <div className="absolute bottom-0 p-4 z-30">
    <TextBanner
    containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-[128px]'
    paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
    headingClassName='!text-[18px] !p-0 !m-0'
    paragraph='Explore Dubai’s primary market with exclusive off-plan projects from top developers like Emaar and Nakheel, offering expert guidance, direct pricing, and high investment potential.'
    heading='Dubai Real Estate – Primary Market'
    />
</div>


const childrenTwo = <div className="absolute bottom-0 p-4 z-30">
<TextBanner
containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit md:!h-[128px]'
paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
headingClassName='!text-[18px] !p-0 !m-0'
paragraph='Experience luxury short-term stays with fully furnished apartments and villas, offering concierge services, prime locations, and flexible rental durations for your convenience.'
heading='Retail Spaces'
/>
</div>


  return (
    <div className="grid grid-cols-2 bg-black px-4 md:px-10 lg:px-20  pt-8 gap-8">
   
    <Banner

    children={childrenOne}
    imageUrl={ourServicesImageOne}
    containerClassName='md:!w-full !h-[470px]'

    />
    

    <Banner
    children={childrenTwo}
    imageUrl={ourServicesImageTwo}
    containerClassName='md:!w-full !h-[470px]'
    />

<Banner

children={childrenOne}
imageUrl={ourServicesImageOne}
containerClassName='md:!w-full !h-[470px]'

/>


<Banner
children={childrenTwo}
imageUrl={ourServicesImageTwo}
containerClassName='md:!w-full !h-[470px]'
/>
    


    
  </div>
  )
}

export default SectionTwo
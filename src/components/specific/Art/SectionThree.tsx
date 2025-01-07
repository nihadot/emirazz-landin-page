import React from 'react'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Banner from '../../reusable/Banner/Banner'
import TextBanner from '../../reusable/TextBanner/TextBanner'
import { artAndTechnologyCollaboration, cityCentreApartment, luxuryWaterFront, modernFamilyHome, publicArtInstallation, theEmpiorSculpture } from '../../../assets/images'
import ArtJSON from "../../../data/art.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

type Props = {}

function SectionThree({}: Props) {
  const language = useSelector((state: RootState) => state.language.language);

    const childrenOne = <div className="absolute  bottom-0 w-full p-4 z-30">
    <TextBanner
    paragraph=''
    
    containerClassName='sm:!p-0 !p-2 h-fit !rounded-[6px] !bg-black '
    // paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
    headingClassName='!text-[16px] !px-4 !py-1 !m-0'
    // paragraph='Luxury waterfront villas with private pools, modern designs, ocean views, and exclusive amenities for ultimate privacy.'
    heading={ArtJSON?.section2[language]?.cards[0]}
    />
</div>

const childrenTwo = <div className="absolute bottom-0 w-full p-4 z-30">
<TextBanner
paragraph=''
    containerClassName='sm:!p-0 !p-2 h-fit !rounded-[6px] !bg-black '
    // paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
headingClassName='!text-[16px] !px-4 !py-1 !m-0'
// paragraph='Luxury waterfront villas with private pools, modern designs, ocean views, and exclusive amenities for ultimate privacy.'
heading={ArtJSON?.section2[language]?.cards[1]}
/>
</div>

const childrenThree = <div className="absolute bottom-0 w-full p-4 z-30">
<TextBanner
paragraph=''
    containerClassName='sm:!p-0 !p-2 h-fit !rounded-[6px] !bg-black '
    // paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
headingClassName='!text-[16px] !px-4 !py-1 !m-0'
// paragraph='Luxury waterfront villas with private pools, modern designs, ocean views, and exclusive amenities for ultimate privacy.'
heading={ArtJSON?.section2[language]?.cards[2]}
/>
</div>




  return (
    <div className='px-4 md:px-10 relative lg:px-20 pt-20'>
        
        <HeadingThree
        className=' !max-w-full !font-Komorebi !font-normal italic text-center'
        content={ArtJSON.section2[language].h2}
        />

<div className="flex md:flex-row  flex-col mt-12 gap-4">
              <Banner
              alt={ArtJSON.section2[language].h2}
imageClassName='!rounded-[15px]'
              children={childrenOne}
              imageUrl={theEmpiorSculpture}
              containerClassName='md:!w-[33.3%] !h-[470px]'

              />
              

              <Banner
              alt={ArtJSON.section2[language].h2}
              children={childrenTwo}
imageClassName='!rounded-[15px]'
              
              imageUrl={artAndTechnologyCollaboration}
              containerClassName='md:!w-[33.3%] !h-[470px]'
              />


<Banner
alt={ArtJSON.section2[language].h2}
              children={childrenThree}
imageClassName='!rounded-[15px]'
              
              imageUrl={publicArtInstallation}
              containerClassName='md:!w-[33.3%] !h-[470px]'
              />
              
            </div>
    </div>
  )
}

export default SectionThree
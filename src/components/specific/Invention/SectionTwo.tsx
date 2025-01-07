import Image from '../../reusable/Image/Image'
import {  ourApproachToInvention } from '../../../assets/images'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import InventionJOSN from "../../../data/invention.json"
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'

type Props = {}

function SectionTwo({}: Props) {
  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className='px-4 md:px-10 gap-8 lg:px-20 bg-black flex flex-wrap xl:flex-row flex-col justify-start items-start pt-20 text-white'>
      

    <div className="flex w-full lg:flex-row-reverse flex-col-reverse justify-between sm:gap-8 items-center">
              {/*  */}
              <div className="relative w-fit pb-4 md:pb-0 pe-0 md:pt-0 sm:pe-0 flex flex-col ">


                  <Image
                      className='w-[544px] h-[400px] rounded-2xl md:h-[574px] object-cover'
                      src={ourApproachToInvention}
                      alt={InventionJOSN.section2[language as 'en' | 'ar'].h2}

                  />
              </div>


              {/* images */}
              <div className="flex flex-col sm:pb-0 pb-8 flex-1">
            
                  <HeadingOne
                      className='text-[45px] mb-4 '
                      content={InventionJOSN.section2[language as 'en' | 'ar'].h2}
                  />

                  <Paragraph
                      className='!font-light !text-lg !max-w-[500px]'
                      content={InventionJOSN.section2[language as 'en' | 'ar'].p}

/>
<ul className=' list-disc ps-4'>
  <li>
    <Paragraph
       className='!font-light pt-3 !text-lg !max-w-[500px]'
       content={InventionJOSN.section2[language as 'en' | 'ar'].lists[0]}
    />
       </li>
       <li>

       <Paragraph
       className='!font-light pt-3 !text-lg !max-w-[500px]'
       content={InventionJOSN.section2[language as 'en' | 'ar'].lists[1]}
       />
       </li>
       <li>

       <Paragraph
       className='!font-light pt-3 !text-lg !max-w-[500px]'
       content={InventionJOSN.section2[language as 'en' | 'ar'].lists[2]}
       />
       </li>
</ul>


              </div>
          </div>
  </div>
  )
}

export default SectionTwo
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Banner from '../../reusable/Banner/Banner'
import { empoweringVision } from '../../../assets/images'
import sponsorshipJSON from "../../../data/sponsorship.json"
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'

type Props = {}

function SectionOne({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);


    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
    <HeadingOne
        className='md:mb-6 mb-3 pt-8 sm:pt-0'
        content={sponsorshipJSON.section1[language as 'en' | 'ar'].h1}

    />
    <Paragraph
        className='text-white/80'
        content={sponsorshipJSON.section1[language as 'en' | 'ar'].p}
    />
</div>


  return (
    <div className="flex flex-col pb-12 relative justify-center items-center pt-12 px-4 md:px-10 bg-black lg:px-20">
    {/*  */}

    <Banner
                // containerClassName='pt-8'
                alt={sponsorshipJSON.section1[language as 'en' | 'ar'].h1}
                imageUrl={empoweringVision}
                containerClassName='!h-[760px]'
                // home
                // linearGradient
                brightness
                children={children}
            />




</div>
  )
}

export default SectionOne
import Banner from '../../reusable/Banner/Banner'
import { yourGateWayToDubai } from '../../../assets/images'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import RealestateJSON from "../../../data/realestate.json"
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'

type Props = {}

function SectionFive({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);

    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
    <HeadingOne
        className='md:mb-6 mb-3   !text-center sm:!text-start pt-8 !max-w-[700px] !leading-snug sm:pt-0'
content={RealestateJSON.section5[language as 'en' | 'ar'].h3}   />
    <Paragraph
        className='text-white/80 sm:!text-start !text-center'
        content={RealestateJSON.section5[language as 'en' | 'ar'].p}
    />
</div>

return (
    <div className="px-4 pt-20 sm:pt-28 md:px-10 lg:px-20 bg-black ">
        <Banner
            alt={RealestateJSON.section5[language as 'en' | 'ar'].h3} 
            imageUrl={yourGateWayToDubai}
            brightness
            containerClassName='!h-[700px]'
            children={children}
        />
    </div>
)
}

export default SectionFive
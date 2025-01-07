import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import { businessImage1 } from '../../../assets/images'
import Banner from '../../reusable/Banner/Banner'
import BusinessJSON from "../../../data/business.json"
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'

type Props = {}

function SectionOne({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);


    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
        <HeadingOne

            className={'!max-w-[900px] md:mb-6 mb-3 pt-8 sm:pt-0'}
           content={BusinessJSON.section1[language].h1}
        />
        <Paragraph
            className='!max-w-[680px] text-white/80'
            content={BusinessJSON.section1[language].p}        />
    </div>

    return (
        <div className="">
            <Banner
                // containerClassName='pt-8'
                alt={BusinessJSON.section1[language].h1}
                imageUrl={businessImage1}
                containerClassName=''
                home
                linearGradient
                children={children}
            />
        </div>
    )
}

export default SectionOne
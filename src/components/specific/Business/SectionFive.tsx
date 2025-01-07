import {  businessImage5 } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import TextBanner from '../../reusable/TextBanner/TextBanner'
import BusinessJSON from "../../../data/business.json"
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'

type Props = {}

function SectionFive({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <div className="sm:pt-40 pt-4 flex items-center flex-col sm:flex-row relative justify-start">

<div className="sm:absolute relative right-0">
<TextBanner
        containerClassName='sm:!ps-8'
        heading={BusinessJSON.section5[language as 'en' | 'ar'].h3}
        paragraph={BusinessJSON.section5[language as 'en' | 'ar'].p}
        />
    </div>

    <div className="flex justify-end">

        <Image
            src={businessImage5}
            alt={BusinessJSON.section3[language as 'en' | 'ar'].h3}
            className='w-[780px]  rounded-2xl h-[400px] object-cover'
        />
    </div>
</div>
    )
}

export default SectionFive
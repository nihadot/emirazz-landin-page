import { businessImage2 } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import TextBanner from '../../reusable/TextBanner/TextBanner'
import BusinessJSON from "../../../data/business.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

type Props = {}

function SectionTwo({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <div className="sm:pt-40 pt-10 flex items-center  flex-col sm:flex-row relative justify-end">

            <div className="sm:absolute relative left-0">
                <TextBanner
                containerClassName='!pr-8'

                           heading={BusinessJSON.section2[language].h2}
                           paragraph={BusinessJSON.section2[language].p}
                />
            </div>

            <div className="flex justify-end">

                <Image
                    src={businessImage2}
                    alt={BusinessJSON.section2[language].h2}

                    className='w-[780px]  rounded-2xl h-[400px] object-cover'
                />
            </div>
        </div>
    )
}

export default SectionTwo
import Banner from '../../reusable/Banner/Banner'
import { blackIcon, emirazzTechnologyLeadingWith } from '../../../assets/images'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { IconButton } from '../../reusable/Buttons'
import H2 from '../../reusable/Home/H2'
import Paragraph from '../../reusable/Home/Paragraph'

type Props = {}

function SectionSeven({ }: Props) {

    const language = useSelector((state: RootState) => state?.language?.language);


    const children = <div className={`px-4 flex-1 z-50 md:px-10 lg:px-20 ${ language === 'en' ? 'text-left' : 'text-end'} absolute top-0 left-0 flex flex-col justify-center py-12 w-full h-full`}>

        <div className="flex mt-3 flex-col justify-start items-start">
            <H2

                value={HomeJSON?.section7[language as 'en' | 'ar']?.h3}
                className='mb-3 !text-black !leading-tight  '
            />

            <Paragraph
                className='!text-black italic py-0'
                value={HomeJSON?.section7[language as 'en' | 'ar']?.title}
            />

            <Paragraph
                className=' !text-black  !max-w-[400px] mt-3 '
                value={HomeJSON?.section7[language as 'en' | 'ar']?.p}
            />

            <div className="py-4 flex justify-end">
                <IconButton
                    className={`my-6 ${language === 'en' ? '' : '-rotate-180'} `}

                    iconUrl={blackIcon}
                    textBlack
                    content={language === "en" ? 'Learn More    ' : 'يتعلم أكثر'}

                />
            </div>

        </div>


    </div>



    return (
        <div dir='ltr' className="px-4 relative  md:px-10 lg:px-20 bg-black py-6 md:py-32">
            <Banner
                alt={HomeJSON?.section7[language as 'en' | 'ar']?.h3}
                imageUrl={emirazzTechnologyLeadingWith}
                containerClassName='custom-red !h-[700px]'
                children={children}
            />

        </div>
    )
}

export default SectionSeven
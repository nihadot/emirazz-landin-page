import Paragraph from '../../reusable/Paragraph/Paragraph'
import Banner from '../../reusable/Banner/Banner'
import { blackIcon, emirazzTechnologyLeadingWith } from '../../../assets/images'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../storey'
import { IconButton } from '../../reusable/Buttons'
import HeaderSix from '../../reusable/Titles/MainHeading/HeaderSix'

type Props = {}

function SectionSeven({ }: Props) {

    const language = useSelector((state: RootState) => state?.language?.language);


    const children = <div className={`px-4   flex-1 md:px-10 lg:px-20 ${ language === 'en' ? 'text-left' : 'text-end'} absolute top-0 left-0 flex flex-col justify-center py-12 w-full h-full`}>

        <div className="flex  mt-3 flex-col justify-start items-start">
            <HeadingThree
                content={HomeJSON?.section7[language]?.h3}
                className='mb-3 !text-black !leading-tight !max-w-[500px] !text-5xl '
            />

            <HeaderSix
                className='!text-black italic py-2'
                content={HomeJSON?.section7[language]?.title}
            />

            <Paragraph
                className='!font-light !text-black  !max-w-[400px]  !leading-normal mt-3 '
                content={HomeJSON?.section7[language]?.p}
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
        <div dir='ltr' className="px-4 relative  md:px-10 lg:px-20 bg-black py-32">
            <Banner
                alt={HomeJSON?.section7[language]?.h3}
                imageUrl={emirazzTechnologyLeadingWith}
                containerClassName='custom-red !h-[700px]'
                children={children}
            />

        </div>
    )
}

export default SectionSeven
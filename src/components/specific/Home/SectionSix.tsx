import Paragraph from '../../reusable/Paragraph/Paragraph'
import { exploreTheWorld } from '../../../assets/images'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../storey'
import { IconButton } from '../../reusable/Buttons'
import { rightArrow } from '../../../assets/svg'
import Banner from '../../reusable/Banner/Banner'

type Props = {}

function SectionSix({ }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);


    const children = <div className="px-4  flex-1 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-start py-12 w-full h-full">

        <div className="flex  mt-3 flex-col justify-start items-start">
            <HeadingThree
                content={HomeJSON?.section6[language]?.h3}
                className='mb-3 !leading-tight '
            />
    
            <Paragraph
                className='!font-light !leading-normal mt-3 '
                content={HomeJSON?.section6[language]?.p}
            />
        </div>
    </div>



    return (
        <div className="px-4 relative  md:px-10 lg:px-20 bg-black py-32">
            <Banner
                alt={HomeJSON?.section5[language]?.h3}
                imageUrl={exploreTheWorld}
                containerRound
                styleBoxShadow
                containerClassName='custom-red !h-[700px]'
                linearGradient
                children={children}
            />
            <div className={`absolute bottom-40 ${ language  === 'en' ? 'right-32' : 'left-32'}  `}>

                <IconButton
                    iconUrl={rightArrow}
                    className={`my-6 ${ language === 'en' ? '' : '-rotate-180'} `}
                        content={language === "en" ? 'Known More' : 'عرض المزيد'}

                />
            </div>
        </div>
    )
}

export default SectionSix
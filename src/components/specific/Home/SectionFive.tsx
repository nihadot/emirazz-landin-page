import Paragraph from '../../reusable/Paragraph/Paragraph'
import { scaleupYOurBusinessWith } from '../../../assets/images'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../storey'
import Banner from '../../reusable/Banner/Banner'
import HeaderSix from '../../reusable/Titles/MainHeading/HeaderSix'
import { rightArrow } from '../../../assets/svg'
import { IconButton } from '../../reusable/Buttons'

type Props = {}

function SectionFive({ }: Props) {
            const language = useSelector((state: RootState) => state?.language?.language);


            const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
           
           <div className="flex flex-col justify-center items-center">
           <HeadingThree
           content={HomeJSON?.section5[language]?.h3}
           className='mb-3 text-center'
           />
           <HeaderSix
                className='!text-center pb-3 pt-2'
                content={HomeJSON?.section5[language]?.title}
           
           />
           <Paragraph
                className='!text-center'
                content={HomeJSON?.section5[language]?.p}
            />

<IconButton
iconUrl={rightArrow}
className='my-4'
content={'en' === "en" ? 'View All' : 'عرض المزيد'}

/>
           </div>  
        </div>

    return (
        <div className="px-4 md:px-10 lg:px-20 bg-black py-32">
        <Banner
            alt={HomeJSON?.section5[language]?.h3}
            imageUrl={scaleupYOurBusinessWith}
            // home
            linearGradient
            children={children}
        />
    </div>
    )
}

export default SectionFive
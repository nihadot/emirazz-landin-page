import Banner from '../../reusable/Banner/Banner'
import { image16 } from '../../../assets/images'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Paragraph from '../../reusable/Paragraph/Paragraph'
// import { useLanguage } from '../../../LanguageContext'
import HomeJSON from "../../../data/technology.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

type Props = {}

function SectionNine({ }: Props) {

            // const { language } = useLanguage();
            const language = useSelector((state: RootState) => state.language.language);
    
    const children = <div className="z-40 lg:px-20 absolute top-0 left-0 flex flex-col justify-center  w-full h-full">
        <div className=" p-10 pt-14 w-fit ">
            <HeadingThree
                className=' max-w-max mb-4'

                content={HomeJSON.section8[language].h3}
                />
            <Paragraph
                className='!font-light !max-w-[600px]'

                content={HomeJSON.section8[language].p}
            />
        </div>
    </div>


    return (
        <div className='px-4 sm:pt-20 md:px-0 bg-black'>
            <Banner
                home
                brightness
                alt={HomeJSON.section8[language].h3}
                children={children}
                imageUrl={image16}
                imageClassName='!rounded-[20px] md:!rounded-[0px]'
                containerClassName='!h-[700px] '
            />
        </div>
    )
}

export default SectionNine
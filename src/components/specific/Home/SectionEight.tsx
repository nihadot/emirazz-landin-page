import { emirazzRealEstateTransformin } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import HeaderSix from '../../reusable/Titles/MainHeading/HeaderSix'
import { IconButton } from '../../reusable/Buttons'
import { rightArrow } from '../../../assets/svg'
import { Link } from 'react-router'


function SectionEight() {

    const language = useSelector((state: RootState) => state?.language?.language);

    return (

        <div className="bg-black px-4 md:px-10 lg:px-20">
            {/* first image section */}

            <div className="flex flex-col-reverse md:flex-row  justify-center pb-4 sm:pb-24 gap-0 sm:gap-8 pt-4 ms:pt-40 items-center">
                {/*  */}
                <div className="relative w-fit pe-0 pt-4 sm:pe-4 flex flex-col ">

                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={emirazzRealEstateTransformin}
                        alt={HomeJSON?.section8[language]?.h3}
                    />
                </div>


                {/* images */}
                <div className="flex flex-col sm:pt-0 pt-4 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={HomeJSON?.section8[language]?.h3}
                    />

                    <HeaderSix
                        className='pb-4'
                        content={HomeJSON?.section8[language]?.title}
                    />

                    <Paragraph
                        content={HomeJSON?.section8[language]?.p}

                        className='!font-light' />

                    <div className="py-4">

<Link to={'/realestate'}>
                        <IconButton
                    className={`my-6 ${ language === 'en' ? '' : '-rotate-180'} `}
                    iconUrl={rightArrow}
                    content={language === "en" ? 'Learn More    ' : 'يتعلم أكثر'}
                    />
                    </Link>
                    </div>
                </div>
            </div>
            {/* first image section */}




        </div>
    )
}

export default SectionEight
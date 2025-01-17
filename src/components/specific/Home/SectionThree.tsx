import Paragraph from '../../reusable/Paragraph/Paragraph'
import { businessImage2, businessImage4, empoweringVision, fuelingTomorrowsInnovations } from '../../../assets/images'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import Banner from '../../reusable/Banner/Banner'
import TextBanner from '../../reusable/TextBanner/TextBanner'
import {  rightDownArrow } from '../../../assets/svg'
import { IconButton } from '../../reusable/Buttons'
import { Link } from 'react-router'
type Props = {}

function SectionThree({ }: Props) {

    const language = useSelector((state: RootState) => state?.language?.language);


    const childrenOne = <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="absolute group w-full bottom-0 py-2 pe-2 ps-4 z-30">
        <TextBanner
        paragraph=''
            containerClassName='!ps-0 !pt-3 !pe-3 !pb-3 h-fit lg:!h-full !bg-transparent'
            paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
            headingClassName='!text-[24px] !font-bold !p-0 !m-0'
            heading={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[0]?.h3}
        />
        <div className="group-hover:block hidden transition-all">

            <Paragraph
                className='!text-base !text-white '
                content={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[0]?.p}
            />


<Link to={'/sponsorship'} >
            <IconButton
                className={`my-3 ${language === 'en' ? '' : '-rotate-180'} !w-3 !h-4 object-contain `}
                iconUrl={rightDownArrow}
                content={language === "en" ? 'Know More' : 'اعرف المزيد'}
                reverce
                />
                </Link>

        </div>
    </div>


    const childrenTwo =  <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="absolute group w-full bottom-0 py-2 pe-2 ps-4 z-30">
    <TextBanner
    paragraph=''
        containerClassName='!ps-0 !pt-3 !pe-3 !pb-3 h-fit lg:!h-full !bg-transparent'
        paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
        headingClassName='!text-[24px] !font-bold !p-0 !m-0'
        heading={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[1]?.h3}
    />
    <div className="group-hover:block hidden transition-all">

        <Paragraph
            className='!text-base !text-white '
            content={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[1]?.p}
        />


<Link to={'/sponsorship'} >
        <IconButton
            className={`my-3 ${language === 'en' ? '' : '-rotate-180'} !w-3 !h-4 object-contain `}
            iconUrl={rightDownArrow}
            content={language === "en" ? 'Know More' : 'اعرف المزيد'}
            reverce
        />
        </Link>

    </div>
</div>



    const childrenThree =  <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="absolute group w-full bottom-0 py-2 pe-2 ps-4 z-30">
    <TextBanner
    paragraph=''
        containerClassName='!ps-0 !pt-3 !pe-3 !pb-3 h-fit lg:!h-full !bg-transparent'
        paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
        headingClassName='!text-[24px] !font-bold !p-0 !m-0'
        heading={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[2]?.h3}
    />
    <div className="group-hover:block hidden transition-all">

        <Paragraph
            className='!text-base !text-white '
            content={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[2]?.p}
        />


<Link to={'/investment'} >

        <IconButton
            className={`my-3 ${language === 'en' ? '' : '-rotate-180'} !w-3 !h-4 object-contain `}
            iconUrl={rightDownArrow}
            content={language === "en" ? 'Know More' : 'اعرف المزيد'}
            reverce
        />
</Link>

    </div>
</div>



    const childrenFour =  <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="absolute group w-full bottom-0 py-2 pe-2 ps-4 z-30">
    <TextBanner
    paragraph=''
        containerClassName='!ps-0 !pt-3 !pe-3 !pb-3 h-fit lg:!h-full !bg-transparent'
        paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
        headingClassName='!text-[24px] !font-bold !p-0 !m-0'
        heading={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[3]?.h3}
    />
    <div className="group-hover:block hidden transition-all">

        <Paragraph
            className='!text-base !text-white '
            content={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[3]?.p}
        />


<Link to={'/startup'}>
        <IconButton
            className={`my-3 ${language === 'en' ? '' : '-rotate-180'} !w-3 !h-4 object-contain `}
            iconUrl={rightDownArrow}
            content={language === "en" ? 'Know More' : 'اعرف المزيد'}
            reverce
            />
            </Link>

    </div>
</div>


    return (
        <div className=" pt-8 pb-20  bg-black px-4 md:px-10 lg:px-20 overflow-hidden">

            <div className="flex py-0 md:py-8 lg:flex-row flex-col-reverse justify-center sm:gap-8 items-center">

                {/* images */}
                <div className="flex sm:pb-0 flex-col md:flex-row pb-8 flex-1">
                    <HeadingThree
                        className={` flex-1 mb-4 ${language === 'ar' ? 'break-words' : ''} `}
                        content={HomeJSON?.section3[language as 'en' | 'ar']?.h3}
                    />
                    <Paragraph
                        className='flex-1 !text-[18px] !font-light'
                        content={HomeJSON?.section3[language as 'en' | 'ar']?.p}
                    />

                </div>



            </div>

            <div dir='ltr' className="pb-24  relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

                <Banner
                alt={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[0]?.h3}
                    imageUrl={businessImage2}
                    containerClassName='rounded-[18px] !h-[280px] md:!h-[433px] object-cover'
                    children={childrenOne}
                    brightness
                />

                <Banner
                alt={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[1]?.h3}

                    imageUrl={empoweringVision}
                    containerClassName='rounded-[18px] !h-[280px] md:!h-[433px] object-cover'
                    children={childrenTwo}
                    brightness
                />

                <Banner
                alt={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[2]?.h3}

                    imageUrl={businessImage4}
                    containerClassName='rounded-[18px] !h-[280px] md:!h-[433px] object-cover'
                    children={childrenThree}
                    brightness
                />

                <Banner
                alt={HomeJSON?.section3[language as 'en' | 'ar']?.cards?.[3]?.h3}

                    imageUrl={fuelingTomorrowsInnovations}
                    containerClassName='rounded-[18px] !h-[280px] md:!h-[433px] object-cover'
                    children={childrenFour}
                    brightness
                />

                <div className="bg-[#FE13848A] absolute -right-40 -bottom-4 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#26FE138A] absolute -left-40 -bottom-4 w-40 h-40 rounded-full blur-xl opacity-55"></div>

            </div>


        </div>
    )
}

export default SectionThree



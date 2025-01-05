import Paragraph from '../../reusable/Paragraph/Paragraph'
import { businessImage2, businessImage4, empoweringVision, fuelingTomorrowsInnovations, image4, image5 } from '../../../assets/images'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import Banner from '../../reusable/Banner/Banner'
import TextBanner from '../../reusable/TextBanner/TextBanner'
type Props = {}

function SectionThree({ }: Props) {

    const language = useSelector((state: RootState) => state?.language?.language);


    const childrenOne = <div className="absolute w-full bottom-0 p-2 z-30">
        <TextBanner
            containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-full !bg-transparent'
            paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
            headingClassName='!text-[24px] !text-center !p-0 !m-0'
            heading={HomeJSON?.section3[language]?.cards?.[0]}
        />
    </div>


    const childrenTwo = <div className="absolute w-full bottom-0 p-2 z-30">
        <TextBanner
            containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-full !bg-transparent'
            paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
            headingClassName='!text-[24px] !text-center !p-0 !m-0'
            heading={HomeJSON?.section3[language]?.cards?.[1]}
        />
    </div>



    const childrenThree = <div className="absolute w-full bottom-0 p-2 z-30">
        <TextBanner
            containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-full !bg-transparent'
            paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
            headingClassName='!text-[24px] !text-center !p-0 !m-0'
            heading={HomeJSON?.section3[language]?.cards?.[2]}
        />
    </div>




    const childrenFour = <div className="absolute w-full bottom-0 p-2 z-30">
        <TextBanner
            containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-full !bg-transparent'
            paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
            headingClassName='!text-[24px] !text-center !p-0 !m-0'
            heading={HomeJSON?.section3[language]?.cards?.[3]}
        />
    </div>


    return (
        <div className=" pt-0  bg-black px-4 md:px-10 lg:px-20">

            <div className="flex py-8 lg:flex-row flex-col-reverse justify-center sm:gap-8 items-center">

                {/* images */}
                <div className="flex sm:pb-0 pb-8 flex-1">
                    <HeadingThree
                        className={`flex-1 mb-4 ${language === 'ar' ? 'break-words' : ''} `}
                        content={HomeJSON?.section3[language]?.h3}
                    />
                    <Paragraph
                        className='flex-1 !font-light'
                        content={HomeJSON?.section3[language]?.p}
                    />
                </div>



            </div>

            <div dir='ltr' className="pb-24 relative grid grid-cols-4 gap-3">

                <Banner
                    imageUrl={businessImage2}
                    containerClassName='rounded-[18px]  !h-[433px] object-cover'
                    children={childrenOne}
                    brightness
                />

                <Banner
                    imageUrl={empoweringVision}
                    containerClassName='rounded-[18px]  !h-[433px] object-cover'
                    children={childrenTwo}
                    brightness
                />

                <Banner
                    imageUrl={businessImage4}
                    containerClassName='rounded-[18px]  !h-[433px] object-cover'
                    children={childrenThree}
                    brightness
                />

                <Banner
                    imageUrl={fuelingTomorrowsInnovations}
                    containerClassName='rounded-[18px]  !h-[433px] object-cover'
                    children={childrenFour}
                    brightness
                />

                <div className="bg-[#FE13848A] absolute -right-20 bottom-3 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#26FE138A] absolute -left-40 bottom-3 w-40 h-40 rounded-full blur-xl opacity-55"></div>

            </div>


        </div>
    )
}

export default SectionThree



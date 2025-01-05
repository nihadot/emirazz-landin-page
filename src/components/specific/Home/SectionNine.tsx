import Banner from '../../reusable/Banner/Banner'
import { ourServicesImageOne } from '../../../assets/images'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import { IconButton } from '../../reusable/Buttons'
import { rightArrow } from '../../../assets/svg'
import TextBanner from '../../reusable/TextBanner/TextBanner'

type Props = {}

function SectionNine({ }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);


    const childrenOne = <div className="absolute w-full bottom-0 p-4 z-30">
        <TextBanner
            containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-[128px]'
            paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
            headingClassName='!text-[18px] !p-0 !m-0'
            paragraph={HomeJSON?.section8[language]?.h3}
            heading={HomeJSON?.section8[language]?.h3}
        />
    </div>

    return (
        <>

            <div className="flex py-8 px-4 md:px-10 lg:px-20 bg-black lg:flex-row flex-col-reverse justify-center sm:gap-8 items-center">

                {/* images */}
                <div className="flex flex-col sm:pb-0 pb-8 flex-1">
                    <HeadingThree
                        className=' mb-4'
                        content={HomeJSON?.section9[language]?.h3}
                    />
                    <Paragraph
                        className='!font-light'
                        content={HomeJSON?.section9[language]?.p}
                    />
                </div>

                <div className="py-4">

                    <IconButton
                    className={`my-6 ${ language === 'en' ? '' : '-rotate-180'} `}

                        iconUrl={rightArrow}
                        content={language === "en" ? 'Learn More    ' : 'يتعلم أكثر'}
                    />
                </div>
            </div>


            <div className="bg-black pt-10 px-4 md:px-10 lg:px-20  w-full py-0">


                <div id='home-news' className="flex md:flex-row   flex-col mt-12 gap-8 overflow-x-scroll">
                    <Banner
                        children={childrenOne}
                        imageUrl={ourServicesImageOne}
                        containerClassName='md:!w-[590px] flex-none !h-[470px]'
                    />

                    <Banner
                        children={childrenOne}
                        imageUrl={ourServicesImageOne}
                        containerClassName='md:!w-[590px] flex-none !h-[470px]'
                    />

                    <Banner
                        children={childrenOne}
                        imageUrl={ourServicesImageOne}
                        containerClassName='md:!w-[590px] flex-none !h-[470px]'
                    />

                    <Banner
                        children={childrenOne}
                        imageUrl={ourServicesImageOne}
                        containerClassName='md:!w-[590px] flex-none !h-[470px]'
                    />

                </div>
            </div>
        </>

    )
}

export default SectionNine
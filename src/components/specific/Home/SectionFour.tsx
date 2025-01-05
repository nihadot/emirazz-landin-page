import { innovationFromAbyss } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import genrateColor from "randomcolor";
import { rightArrow } from '../../../assets/svg'
import { IconButton } from '../../reusable/Buttons'

function SectionFour() {
    const language = useSelector((state: RootState) => state?.language?.language);

    return (

        <div className="bg-black px-4 md:px-10 lg:px-20">
            <div className="flex relative pb-4 justify-center items-center pt-20 sm:pt-40">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <HeadingThree
                        className='max-w-[500px] mb-4'
                        content={HomeJSON?.section4[language]?.h3}

                    />

                    <Paragraph
                        className='!font-light !max-w-5xl '

                        content={HomeJSON?.section4[language]?.p}
                    />
                </div>

            </div>

            <div id='home_section_four' className="flex gap-4 w-full overflow-x-scroll flex-nowrap pt-12 ">
                <Card title={'PropertySeller'} />
                <Card title={'PropertySeller'} />
                <Card title={'PropertySeller'} />
                <Card title={'PropertySeller'} />
                <Card title={'PropertySeller'} />
                <Card title={'PropertySeller'} />
                <Card title={'PropertySeller'} />
                <Card title={'PropertySeller'} />
                <Card title={'PropertySeller'} />

            </div>

            <div className="flex justify-center">

                <IconButton
                    className={`my-6 ${ language === 'en' ? '' : '-rotate-180'} `}
                    iconUrl={rightArrow}
                    content={language === "en" ? 'Learn More' : 'يتعلم أكثر'}

                />
            </div>



        </div>
    )
}

export default SectionFour



function Card({ title }) {

    return (
        <div style={{ backgroundColor: genrateColor() }} className='h-[400px] p-4 w-[360px]  flex-none rounded-[20px]'>
            <Image
                src={innovationFromAbyss}
                className=' rounded-2xl h-[324px]'

            />

            <Paragraph
                content={title}
                className='!text-white py-3 !font-medium'
            />
        </div>
    )
}

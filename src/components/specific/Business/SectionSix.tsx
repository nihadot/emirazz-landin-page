import React from 'react'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Card from '../../reusable/Card/Card'
import { IconButton } from '../../reusable/Buttons'
import { rightArrow } from '../../../assets/svg'
import { RootState } from '../../../storey'
import { useSelector } from 'react-redux'
import BusinessJSON from "../../../data/business.json"

type Props = {}

function SectionSix({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <div>
            <div className="flex flex-col relative justify-center items-center pt-40">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <HeadingThree
                        className='text-[45px] max-w-max mb-4'
                        content={BusinessJSON.section6[language].h3}

                    />

                    <Paragraph
                        className='!font-light !max-w-[900px] text-center !text-lg'

                        content={BusinessJSON.section6[language].p}
                    />
                </div>



<div className="grid grid-cols-2 sm:grid-cols-4 mt-8 w-full gap-5 py-8">

                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
</div>

<div className="pb-8">

<IconButton
iconUrl={rightArrow}
content={language === "en" ? 'View All' : 'عرض المزيد'}

/>
</div>
                
                


            </div>
        </div>
    )
}

export default SectionSix
import React from 'react'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Card from '../../reusable/Card/Card'
import { rightArrow } from '../../../assets/svg'
import { IconButton } from '../../reusable/Buttons'
import { RootState } from '../../../storey'
import { useSelector } from 'react-redux'
import partnersJSON from "../../../data/partners.json"

type Props = {}

function SectionOne({}: Props) {

    const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className="flex flex-col relative justify-center items-center pt-20 px-4 md:px-10 lg:px-20">
    {/*  */}

    <div className="relative text-center pb-20 justify-center items-center flex-1 pe-4 flex flex-col ">

        <HeadingOne
            className='text-[45px] max-w-max mb-4'
            content={partnersJSON.section1[language].h1}


        />

        <Paragraph
            className='!font-light !max-w-[900px] text-center !text-lg'
            content={partnersJSON.section1[language].p}

        />
    </div>



<div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-5 py-0 md:py-8">

    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
</div>


<div className="pt-8">

<IconButton
iconUrl={rightArrow}
content={language === "en" ? 'View All' : 'عرض المزيد'}
/>
</div>
    
    


</div>
  )
}

export default SectionOne
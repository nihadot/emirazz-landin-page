import React from 'react'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Image from '../../reusable/Image/Image'
import { image2, image3, whatWeOffer1, whatWeOffer2, whatWeOffer3, whatWeOffer4 } from '../../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import ScaleUpJSON from "../../../data/scaleup.json"

type Props = {}

function SectionThree({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className="relative h-full px-4 md:px-10 lg:px-20 overflow-hidden bg-black">

    <div className="flex flex-wrap xl:flex-row flex-col justify-center items-center pt-32">

    {/* section one */}
    <div className=" flex-1 pe-0 sm:pe-4 flex flex-col ">

        {/* <div className="bg-[#BC13FE] absolute -right-20 -top-20 w-40 h-40 rounded-full blur-xl opacity-55"></div> */}
        {/* <div className="bg-[#BC13FE] absolute -left-20 -top-20 w-40 h-40 rounded-full blur-xl opacity-55"></div> */}


        <HeadingThree
            className=' md:text-[45px]'
            content={ScaleUpJSON.section3[language].h3}
        />
        


        <ul className='list-decimal text-white pl-5 pt-1  relative' style={{}}>
            <li className=''>
                <Paragraph
            className='!text-lg !max-w-[545px] !md:text-xl !font-normal !leading-7 !text-white/80'
                
                content={ScaleUpJSON.section3[language].lists[0].h3} />
                <Paragraph content={ScaleUpJSON.section3[language].lists[0].p}
                    className='!font-light !text-white/70 !text-base' />
            </li>

            <li className=''>
                <Paragraph content={ScaleUpJSON.section3[language].lists[1].h3} />
                <Paragraph content={ScaleUpJSON.section3[language].lists[1].p}
                    className='!font-light !text-white/70 !text-base' />
            </li>

            <li className=''>
                <Paragraph content={ScaleUpJSON.section3[language].lists[2].h3} />
                <Paragraph content={ScaleUpJSON.section3[language].lists[2].p}
                    className='!font-light !text-white/70 !text-base' />
            </li>




            <li className=''>
                <Paragraph content={ScaleUpJSON.section3[language].lists[3].h3} />
                <Paragraph content={ScaleUpJSON.section3[language].lists[3].p}
                    className='!font-light !text-white/70 !text-base' />
            </li>

            <li className=''>
                <Paragraph content={ScaleUpJSON.section3[language].lists[3].h3} />
                <Paragraph content={ScaleUpJSON.section3[language].lists[3].p}
                    className='!font-light !text-white/70 !text-base' />
            </li>

            {/* <div className="bg-[#BC13FE] absolute -left-24 bottom-0 w-28 h-28 rounded-full blur-xl opacity-55"></div> */}

        </ul>
    </div>


<div className="">

    {/* images */}
    <div className="sm:flex hidden flex-1 pt-20  md:pe-0 relative">
        <Image
            src={whatWeOffer1}
            className='rounded-2xl mb-10  mt-60 flex-1 sm:flex-none   z-30 border border-black md:mt-28 sm:mt-32 w-[297px] h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language].h3}
        />


        <Image
            src={whatWeOffer2}
            className='rounded-2xl border flex-1 sm:flex-none  -ml-3 sm:-ml-10 border-black w-[297px] h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language].h3}
        />
        
    </div>



    {/* mobile only */}
    <div className="sm:hidden flex mt-10 pt-20  md:pe-0 relative">
        <Image
            src={whatWeOffer1}
            className='rounded-2xl  mb-10 top-0 mt-60  z-30 border border-black -ml-64 md:mt-28 sm:mt-32 max-w-[297px] w-full h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language].h3}
        />


        <Image
            src={whatWeOffer2}
            className='rounded-2xl  right-0 bottom-0 border flex-1  -ml-3 sm:-ml-10 border-black max-w-[297px] w-full h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language].h3}
        />
        
    </div>


    <div className="sm:hidden flex mt-10 pt-20  md:pe-0 relative">
        <Image
            src={whatWeOffer3}
            className='rounded-2xl  mb-10 top-0 mt-60  z-30 border border-black -ml-64 md:mt-28 sm:mt-32 max-w-[297px] w-full h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language].h3}
        />


        <Image
            src={whatWeOffer4}
            className='rounded-2xl  right-0 bottom-0 border flex-1  -ml-3 sm:-ml-10 border-black max-w-[297px] w-full h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language].h3}
        />
        
    </div>
    {/*  */}





       {/* images */}
       <div className="hidden sm:flex flex-1 pt-0  md:pe-0 relative">
        <Image
            src={whatWeOffer3}
            className='rounded-2xl mb-10  mt-60 flex-1 sm:flex-none   z-30 border border-black md:mt-28 sm:mt-32 w-[297px] h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language].h3}
        />


        <Image
            src={whatWeOffer4}
            className='rounded-2xl border flex-1 sm:flex-none  -ml-3 sm:-ml-10 border-black w-[297px] h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language].h3}
        />
        
    </div>




    
    </div>

</div>
</div>

  )
}

export default SectionThree
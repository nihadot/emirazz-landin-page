import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Image from '../../reusable/Image/Image'
import { whatWeOffer1, whatWeOffer2, whatWeOffer3, whatWeOffer4 } from '../../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import ScaleUpJSON from "../../../data/scaleup.json"

type Props = {}

function SectionThree({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className="relative h-full px-4 md:px-10 lg:px-20 overflow-hidden bg-black">

    <div className="flex flex-wrap xl:flex-row flex-col justify-center items-center pt-20 md:pt-32">

    {/* section one */}
    <div className=" flex-1 pe-0 sm:pe-4 flex flex-col ">

        {/* <div className="bg-[#BC13FE] absolute -right-20 -top-20 w-40 h-40 rounded-full blur-xl opacity-55"></div> */}
        {/* <div className="bg-[#BC13FE] absolute -left-20 -top-20 w-40 h-40 rounded-full blur-xl opacity-55"></div> */}


        <HeadingThree
            className=' md:text-[45px]'
            content={ScaleUpJSON.section3[language as 'en' | 'ar'].h3}
        />
        


        <ul className='list-decimal text-white pl-5 pt-1  relative' style={{}}>
            <li className=''>
                <Paragraph
            className='!text-lg !max-w-[545px] !md:text-xl !font-normal !leading-7 !text-white/80'
                
                content={ScaleUpJSON.section3[language as 'en' | 'ar'].lists[0].h3} />
                <Paragraph content={ScaleUpJSON.section3[language as 'en' | 'ar'].lists[0].p}
                    className='!font-light !text-white/70 !text-base' />
            </li>

            <li className=''>
                <Paragraph content={ScaleUpJSON.section3[language as 'en' | 'ar'].lists[1].h3} />
                <Paragraph content={ScaleUpJSON.section3[language as 'en' | 'ar'].lists[1].p}
                    className='!font-light !text-white/70 !text-base' />
            </li>

            <li className=''>
                <Paragraph content={ScaleUpJSON.section3[language as 'en' | 'ar'].lists[2].h3} />
                <Paragraph content={ScaleUpJSON.section3[language as 'en' | 'ar'].lists[2].p}
                    className='!font-light !text-white/70 !text-base' />
            </li>




            <li className=''>
                <Paragraph content={ScaleUpJSON.section3[language as 'en' | 'ar'].lists[3].h3} />
                <Paragraph content={ScaleUpJSON.section3[language as 'en' | 'ar'].lists[3].p}
                    className='!font-light !text-white/70 !text-base' />
            </li>

            <li className=''>
                <Paragraph content={ScaleUpJSON.section3[language as 'en' | 'ar'].lists[3].h3} />
                <Paragraph content={ScaleUpJSON.section3[language as 'en' | 'ar'].lists[3].p}
                    className='!font-light !text-white/70 !text-base' />
            </li>

            {/* <div className="bg-[#BC13FE] absolute -left-24 bottom-0 w-28 h-28 rounded-full blur-xl opacity-55"></div> */}

        </ul>
    </div>


<div className="">

    {/* images first one desktop and mobile */} 
    <div className="sm:flex flex-1 -mr-8 md:mr-0 pt-6 md:pt-20  md:pe-0 relative">
        <Image
            src={whatWeOffer1}
            className='rounded-2xl mb-10  mt-0 flex-1 sm:flex-none   z-30 border border-black md:mt-16 sm:mt-32 w-[297px] h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language as 'en' | 'ar'].h3}
        />


        <Image
            src={whatWeOffer2}
            className='rounded-2xl border flex-1 sm:flex-none  -ms-8 -mt-44 md:mt-0  sm:-ms-10 border-black w-[297px] h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language as 'en' | 'ar'].h3}
        />
        
    </div>



       {/* images first one desktop and mobile */} 
       <div className="sm:flex flex-1 mt-8 md:mt-0 -mr-8 md:mr-0 pt-6 md:pt-0  md:pe-0 relative">
        <Image
            src={whatWeOffer3}
            className='rounded-2xl mb-10  mt-0 flex-1 sm:flex-none   z-30 border border-black md:mt-16 sm:mt-32 w-[297px] h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language as 'en' | 'ar'].h3}
        />


        <Image
            src={whatWeOffer4}
            className='rounded-2xl border flex-1 sm:flex-none  -ms-8 -mt-44 md:mt-0  sm:-ms-10 border-black w-[297px] h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language as 'en' | 'ar'].h3}
        />
        
    </div>



    {/* mobile only */}
    {/* <div className="sm:hidden h-[500px]  w-full mt-10 pt-20  md:pe-0 relative">
        <Image
            src={whatWeOffer1}
            className='rounded-2xl absolute top-0 left-0  z-30 border border-black  max-w-[297px] w-full h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language as 'en' | 'ar'].h3}
        />


        <Image
            src={whatWeOffer2}
            className='rounded-2xl   absolute -bottom-32 z-40 right-0 mb-10  mt-0  border border-black -ml-64 md:mt-28 sm:mt-32 max-w-[297px] w-full h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language as 'en' | 'ar'].h3}
        />
        
    </div> */}


    {/* <div className="sm:hidden  flex mt-10 pt-20  md:pe-0 relative">
        <Image
            src={whatWeOffer3}
            className='rounded-2xl  mb-10 top-0 mt-60  z-30 border border-black  md:mt-28 sm:mt-32 max-w-[297px] w-full h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language as 'en' | 'ar'].h3}
        />


        <Image
            src={whatWeOffer4}
            className='rounded-2xl  right-0 bottom-0 border flex-1  border-black max-w-[297px] w-full h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language as 'en' | 'ar'].h3}
        />
        
    </div> */}
    {/*  */}



    {/* <div className="sm:hidden h-[500px] bg-red-300 w-full mt-10 pt-20  md:pe-0 relative">
        <Image
            src={whatWeOffer3}
            className='rounded-2xl absolute top-0 left-0  z-30 border border-black  max-w-[297px] w-full h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language as 'en' | 'ar'].h3}
        />


        <Image
            src={whatWeOffer4}
            className='rounded-2xl   absolute -bottom-32 z-40 right-0 mb-10  mt-0  border border-black -ml-64 md:mt-28 sm:mt-32 max-w-[297px] w-full h-[339px] object-cover'
            alt={ScaleUpJSON.section3[language as 'en' | 'ar'].h3}
        />
        
    </div> */}

   



    
    </div>

</div>
</div>

  )
}

export default SectionThree
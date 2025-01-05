import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import {  empoweringInnovation } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import ContactJSON from "../../../data/contactUs.json"
import HeadingTwo from '../../reusable/Titles/MainHeading/HeadingTwo'

type Props = {}

function SectionOne({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);




    return (
        <>
        <div className="pt-10 flex flex-col items-center ">
            <Paragraph
                className='!text-center !max-w-full text-white/80'
                content={ContactJSON.section1[language].title}
                />
            <HeadingOne
            className=' !text-center  !max-w-[900px] md:mb-6 mb-3 pt-2 sm:pt-4'
            content={ContactJSON.section1[language].h1}
            />

        </div>

        <ContactUs/>

            </>
    )
}

export default SectionOne



function ContactUs() {
    const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className='flex sm:flex-row flex-col gap-8 mt-4 px-4 md:px-10 lg:px-20'>
        <Image
        className='rounded-[20px] m-auto w-[432px] h-[512px] object-cover'
        src={empoweringInnovation}
        />

        <form className=' w-full mt-12 font-sfmedium'>
            <HeadingTwo
            className='pb-3 !text-4xl'
            content={ContactJSON.section1[language].p}
            />
            <div className="flex gap-4 lg:flex-row flex-col">
                <input type="text" placeholder={ language === "en" ? 'Enter your First Name' : 'أدخل اسمك الأول'} className='w-full text-sm text-[#666666] h-[53px] px-6 border-none outline-none rounded-[10px]' />
                <input type="text" placeholder={language === "en" ? 'Enter your Last Name' : 'أدخل اسمك الأخير'} className='w-full text-sm text-[#666666] h-[53px] px-4 border-none outline-none rounded-[10px]' />
            </div>

            <div className="flex pt-4 gap-4">
                <input type="text" placeholder={ language === "en" ?  'Enter Your Phone' : 'أدخل رقم هاتفك'} className='w-full text-sm text-[#666666] h-[53px] px-4 border-none outline-none rounded-[10px]' />
            </div>


            <div className="flex pt-4 gap-4">
                <textarea  placeholder={ language === 'en' ? 'Your Message' : 'رسالتك' }className='w-full text-sm text-[#666666] h-[170px] p-4 border-none outline-none rounded-[10px]' name="" id=""></textarea>
                {/* <input type="text" placeholder='Enter' className='w-full h-[53px] ps-3 border-none outline-none rounded-[10px]' /> */}
            </div>

<div className="flex justify-end">

            <button className='w-[100px] h-[46px] text-[17px] font-semibold bg-white text-base rounded-[5px] mt-4 font-sfmedium'>{ language === 'en' ?  'Sent' : 'يرسل'}</button>
</div>
        </form>
    </div>
  )
}

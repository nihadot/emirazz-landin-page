import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingTwo from '../../reusable/Titles/MainHeading/HeadingTwo'
import Image from '../../reusable/Image/Image'
import { visualChronicles1, visualChronicles2, visualChronicles3 } from '../../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import GalleryJSON from "../../../data/gallery.json"

type Props = {}

function SectionOne({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);


    return (
        <div className='pt-20 w-full overflow-hidden max-w-full'>
            <HeadingOne
                className='text-center !max-w-[100%]'
                content={GalleryJSON.section1[language as 'en' | 'ar'].h1}
            />
            <HeadingTwo
                className='text-center !max-w-[100%]'

                content={GalleryJSON.section1[language as 'en' | 'ar'].p}
            />
            <div className="bg-[#13FEB7] absolute  top-16 -left-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#A513FE] top-16 -right-20  absolute  w-40 h-40 rounded-full blur-xl opacity-55"></div>


                <div className="bg-[#13FEB7] absolute bottom-16 -left-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#A513FE] bottom-16 -right-20  absolute  w-40 h-40 rounded-full blur-xl opacity-55"></div>



                <div className="flex justify-center mt-12 relative z-10">

<Image
alt={GalleryJSON.section1[language as 'en' | 'ar'].h1}
className='w-[100px] xs-xs:w-[200px] lg:w-[345px] xs-md:w-[210px] xs-xs:h-[230px] h-[100px] mt-8 ms-2 rotate-6 lg:h-[327px] object-cover rounded-[15px]'
src={visualChronicles1}
/>
   <Image
   alt={GalleryJSON.section1[language as 'en' | 'ar'].h1}
className='w-[100px] xs-xs:w-[200px] lg:w-[345px] xs-md:w-[260px] h-[130px] xs-xs:h-[230px] relative z-20 lg:h-[368px] object-cover rounded-[15px]'
src={visualChronicles2}
/>

<Image
alt=''
className='w-[100px] xs-xs:w-[200px] lg:w-[345px] xs-md:w-[210px] mt-8 xs-xs:h-[230px]  h-[100px] -rotate-6 lg:h-[327px] object-cover rounded-[15px]'
src={visualChronicles3}
/>
</div>

<Paragraph
className='md:!text-5xl !text-3xl !text-nowrap !font-Komorebi !font-bold'
content={GalleryJSON.section1[language as 'en' | 'ar'].title}
/>

        </div>
    )
}

export default SectionOne
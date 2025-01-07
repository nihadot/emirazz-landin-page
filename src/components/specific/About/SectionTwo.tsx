import Banner from '../../reusable/Banner/Banner'
import { aboutImage2 } from '../../../assets/images'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import AboutJSON from "../../../data/about.json"
import HeadingTwo from '../../reusable/Titles/MainHeading/HeadingTwo'

type Props = {}

function SectionTwo({}: Props) {

    const language = useSelector((state: RootState) => state.language.language);


    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
        <HeadingTwo
            className='md:mb-6 mb-3 !max-w-xl !leading-tight text-start pt-8 sm:pt-0'
            content={AboutJSON.section2[language].h2}
        />
        <Paragraph
            className='text-white/90 !leading-normal text-start'
            content={AboutJSON.section2[language].p}

        />


{ language == "en" &&  <Paragraph
            className='text-white/80 '
            content='Emiraaz is not just a company; it is a testament to what can be achieved when ambition meets opportunity. Over the years, we have expanded our footprint globally, leveraging our expertise and resources to make a meaningful impact. As we continue to grow, our story is one of resilience, adaptability, and an unwavering commitment to success.'
        />}
    </div>


  return (
    <div className=' relative  bg-black text-white'>
        <Banner
        alt={AboutJSON.section2[language].h2}
        containerClassName='!h-[768px]'
        imageUrl={aboutImage2}
        brightness
        children={children}
        />
            <div className="bg-[#01AFEA]  absolute -left-4 -bottom-24 w-32 h-32 rounded-full blur-xl opacity-30"></div>

    </div>
  )
}

export default SectionTwo
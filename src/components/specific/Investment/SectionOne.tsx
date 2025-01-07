import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Banner from '../../reusable/Banner/Banner'
import { empoweringInnovation, empoweringVision } from '../../../assets/images'
import investmentJSON from "../../../data/invertments.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

type Props = {}

function SectionOne({}: Props) {
  
  const language = useSelector((state: RootState) => state.language.language);


    const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
    <HeadingOne

        className='md:mb-6 mb-3 pt-8 sm:pt-0 !max-w-[800px]'
        content={investmentJSON.section1[language].h1}
        />
    <Paragraph
        className='text-white/80'
        content={investmentJSON.section1[language].p}

    />
</div>


  return (
    <div className="flex flex-col relative justify-center items-center pt-4 px-4 md:px-10 bg-black lg:px-20">
    {/*  */}

    <Banner
                // containerClassName='pt-8'
                alt='Empowering Innovation Through Strategic Investments'
                imageUrl={empoweringInnovation}
                containerClassName='!h-[760px]'
                // home
                // linearGradient
                brightness
                children={children}
            />




</div>
  )
}

export default SectionOne
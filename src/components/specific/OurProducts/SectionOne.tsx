import { RootState } from '../../../store';
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingTwo from '../../reusable/Titles/MainHeading/HeadingTwo'
import { useSelector } from 'react-redux';
import OurProducts from "../../../data/OurProducts.json"

type Props = {}

function SectionOne({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);


  return (

    <div className="relative pt-4 md:pt-0 text-center justify-center items-center flex-1 px-4 md:px-10 lg:px-20 flex flex-col ">

      <HeadingTwo
        className='text-[45px] max-w-max mb-6'
        content={OurProducts.section1[language].h1}

      />

      <Paragraph
        className='!font-light !max-w-[900px] text-center !text-lg'
        content={OurProducts.section1[language].p}
      />
    </div>

  )
}

export default SectionOne
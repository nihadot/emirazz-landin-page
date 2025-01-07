import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import BlogJSON from "../../../data/blogs.json"

type Props = {}

function SectionOne({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);
   


  return (
    <div className="flex flex-col relative justify-center items-center pt-8 px-4 md:px-10 bg-black lg:px-20">
    {/*  */}

    <Paragraph
    className='!text-center '
    content={BlogJSON.section1[language].h1}
    />

    <HeadingOne
    className='!text-center max-w-[400]'
    content={BlogJSON.section1[language].p}
    />

</div>
  )
}

export default SectionOne
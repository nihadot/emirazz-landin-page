import { aboutImage6 } from "../../../assets/images"
import Image from "../../reusable/Image/Image"
import Paragraph from "../../reusable/Paragraph/Paragraph"
import HeadingThree from "../../reusable/Titles/MainHeading/HeaderThree"
import AboutJSON from "../../../data/about.json"
import { RootState } from "../../../store"
import { useSelector } from "react-redux"

type Props = {}

function SectionFive({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);


  return (
    <div className='px-4 md:px-10 gap-8 lg:px-20  bg-black flex flex-wrap xl:flex-row flex-col justify-start items-start pt-20 text-white'>


      <div className="flex  w-full lg:flex-row-reverse flex-col justify-between sm:gap-8 items-center">
        {/*  */}
        <div className="relative  w-fit pb-4 md:pb-0 pe-0 md:pt-0 sm:pe-0 flex flex-col ">


          <Image
            className='w-[500px] h-[400px] rounded-2xl md:h-[574px] object-cover'
            src={aboutImage6}
            content={AboutJSON.section5[language].h3}
          />
        </div>


        {/* images */}
        <div className="flex flex-col sm:pb-0 pb-8 flex-1">
          <Paragraph
            className='mb-2  '
            content={AboutJSON.section5[language].p1}

          />
          <HeadingThree
            className='text-[45px] mb-4 '
            content={AboutJSON.section5[language].h3}

          />

          <Paragraph
            className='!font-light !max-w-[800px] !text-lg'

            content={AboutJSON.section5[language].p}

          />


        </div>
      </div>
    </div>
  )
}

export default SectionFive
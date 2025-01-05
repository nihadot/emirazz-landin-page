import { RootState } from "../../../storey"
import { aboutImage5 } from "../../../assets/images"
import Image from "../../reusable/Image/Image"
import Paragraph from "../../reusable/Paragraph/Paragraph"
import HeadingThree from "../../reusable/Titles/MainHeading/HeaderThree"
import { useSelector } from "react-redux"
import AboutJSON from "../../../data/about.json"

type Props = {}

function SectionFour({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className='px-4 md:px-10 gap-8  justify-between lg:px-20 bg-black flex flex-wrap xl:flex-row flex-col w-full items-start pb-14 pt-32 text-white'>
      <div className="flex  w-full lg:flex-row flex-col justify-center sm:gap-8 items-center">
        {/*  */}
        <div className="relative w-[370px] pb-8 md:pb-0 pe-0 md:pt-0 sm:pe-4 flex flex-col ">
          <Image
            className='w-[374px] rounded-2xl h-[420px] object-cover'
            src={aboutImage5}
            alt={AboutJSON.section4[language].h3}
          />
        </div>
        {/* images */}
        <div className="flex flex-col sm:pb-0 pb-0 md:pb-8 flex-1">
          <Paragraph
            className='mb-2'
            content={AboutJSON.section4[language].p1}
          />
          <HeadingThree
            className='text-[45px] mb-4 '
            content={AboutJSON.section4[language].h3}

          />
          <Paragraph
            className='!font-light !text-lg'
            content={AboutJSON.section4[language].p}
          />
        </div>
      </div>
    </div>
  )
}

export default SectionFour
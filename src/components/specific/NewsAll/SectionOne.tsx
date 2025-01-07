import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingTwo from '../../reusable/Titles/MainHeading/HeadingTwo'


type Props = {}



function SectionOne({ }: Props) {



  return (
    <div className="flex flex-col relative justify-center items-center pt-4 px-4 md:px-10 bg-black lg:px-20">
      {/*  */}

      <HeadingTwo
        className='!text-center text-[45px] max-w-[100%]'
        content='What’s New @ Emiraaz'


      />

      <Paragraph
        className='!text-center  max-w-[500px]'

        content='Stay updated with the latest from Emiraaz. Discover our groundbreaking projects, key partnerships, and technological advancements, offering insights into our growth and impact.'
      />




    </div>
  )
}

export default SectionOne
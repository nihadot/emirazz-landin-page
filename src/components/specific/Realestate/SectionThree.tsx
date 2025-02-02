import TextBanner from '../../reusable/TextBanner/TextBanner'
import { ourServicesImageOne, ourServicesImageTwo } from '../../../assets/images'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Banner from '../../reusable/Banner/Banner'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import realestateJSON from "../../../data/realestate.json"

type Props = {}

function SectionThree({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);

    const childrenOne = <div className="absolute bottom-0 p-4 z-30">
        <TextBanner
        containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-[128px]'
        paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
        headingClassName='!text-[18px] !p-0 !m-0'
        paragraph={realestateJSON.section3[language as 'en' | 'ar'].cards[0].p}
        heading={realestateJSON.section3[language as 'en' | 'ar'].cards[0].h3}
        />
    </div>


const childrenTwo = <div className="absolute bottom-0 p-4 z-30">
<TextBanner
containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit md:!h-[128px]'
paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
headingClassName='!text-[18px] !p-0 !m-0'
paragraph={realestateJSON.section3[language as 'en' | 'ar'].cards[1].p}
heading={realestateJSON.section3[language as 'en' | 'ar'].cards[1].h3}
/>
</div>


    return (
        <div className="bg-black pt-10 px-4 md:px-10 lg:px-20  w-full py-0">

            <div className="relative pt-20 text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                <HeadingThree
                    className='text-[45px] max-w-max mb-0'
content={realestateJSON.section3[language as 'en' | 'ar'].h3}

                />

                <Paragraph
                    className='!font-light !max-w-[900px] text-center !text-lg'

                    content={realestateJSON.section3[language as 'en' | 'ar'].p}
                    />
            </div>



            <div className="flex md:flex-row  flex-col mt-6 md:mt-8 gap-8">
              <Banner
              alt=''

              children={childrenOne}
              imageUrl={ourServicesImageOne}
              containerClassName='md:!w-[50%] !h-[470px]'

              />
              

              <Banner
              alt=''
              children={childrenTwo}
              
              imageUrl={ourServicesImageTwo}
              containerClassName='md:!w-[50%] !h-[470px]'
              />
              
            </div>
        </div>

    )
}

export default SectionThree
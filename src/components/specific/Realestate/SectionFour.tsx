import TextBanner from '../../reusable/TextBanner/TextBanner'
import { cityCentreApartment, luxuryWaterFront, modernFamilyHome } from '../../../assets/images'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Banner from '../../reusable/Banner/Banner'
import { IconButton } from '../../reusable/Buttons'
import { rightArrow } from '../../../assets/svg'
import realestateJSON from "../../../data/realestate.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

type Props = {}

function SectionFour({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);


    const childrenOne = <div className="absolute bottom-0 p-4 z-30">
        <TextBanner
        containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-[128px]'
        paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
        headingClassName='!text-[18px] !p-0 !m-0'
        paragraph={realestateJSON.section4[language as 'en' | 'ar'].cards[0].p}
        heading={realestateJSON.section4[language as 'en' | 'ar'].cards[0].h3}
        />
    </div>


const childrenTwo = <div className="absolute bottom-0 p-4 z-30">
<TextBanner
        containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-[128px]'
        paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
headingClassName='!text-[18px] !p-0 !m-0'
paragraph={realestateJSON.section4[language as 'en' | 'ar'].cards[1].p}
heading={realestateJSON.section4[language as 'en' | 'ar'].cards[1].h3}
/>
</div>



const childrenThree = <div className="absolute bottom-0 p-4 z-30">
<TextBanner
        containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-[128px]'
        paragraphClassName='!text-[13px] !p-0 !m-0 !leading-normal'
headingClassName='!text-[18px] !p-0 !m-0'
paragraph={realestateJSON.section4[language as 'en' | 'ar'].cards[2].p}
heading={realestateJSON.section4[language as 'en' | 'ar'].cards[2].h3}
/>
</div>


    return (
        <div className="bg-black px-4 md:px-10 lg:px-20  w-full py-0">

            <div className="relative pt-20 text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                <HeadingThree
                    className='text-[45px] max-w-max mb-4'
                    content={realestateJSON.section4[language as 'en' | 'ar'].h3}

                />

                <Paragraph
                    className='!font-light !max-w-[900px] text-center !text-lg'

                    content={realestateJSON.section4[language as 'en' | 'ar'].p}
                />
            </div>



            <div className="flex md:flex-row  flex-col mt-12 gap-8">
              <Banner
              alt=''

              children={childrenOne}
              imageUrl={luxuryWaterFront}
              containerClassName='md:!w-[50%] !h-[470px]'

              />
              

              <Banner
              alt=''
              children={childrenTwo}
              
              imageUrl={cityCentreApartment}
              containerClassName='md:!w-[50%] !h-[470px]'
              />


<Banner
alt=''
              children={childrenThree}
              
              imageUrl={modernFamilyHome}
              containerClassName='md:!w-[50%] !h-[470px]'
              />
              
            </div>

        <div className="flex justify-center items-center pb-6 pt-12">

            <IconButton
            content={ language === 'en' ? 'View All Listings' :  'القوائم'}
            iconUrl={rightArrow}
            />
            </div>
        </div>

    )
}

export default SectionFour
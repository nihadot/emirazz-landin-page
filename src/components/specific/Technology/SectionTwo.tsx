import Paragraph from '../../reusable/Paragraph/Paragraph'
import { image2, image3 } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import HeadingTwo from '../../reusable/Titles/MainHeading/HeadingTwo'
import SectionThree from './SectionThree'
import SectionFive from "./SectionFive"
import SectionSix from "./SectionSix"
import SectionSeven from "./SectionSeven"
import SectionFour from './SectionFour'
import SectionEight from "./SectionEight"
import HomeJSON from "../../../data/technology.json"
// import { useLanguage } from '../../../LanguageContext'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

type Props = {}

function SectionTwo({ }: Props) {



    return (
        <div className=' relative h-full px-4 md:px-10 lg:px-20 overflow-hidden bg-black '>
            <Component />
           {/* cards */}
            <SectionThree />

            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
        </div>
    )
}

export default SectionTwo




function Component() {

    // const { language } = useLanguage();
    const language = useSelector((state: RootState) => state.language.language);

    const arbic = HomeJSON.section2.ar;
    const value = language === "ar" ? (arbic.p.p1 + arbic.p.p2 + arbic.p.p3 + arbic.p.p4) : '';


    return (
        <div className="flex flex-wrap  xl:flex-row flex-col justify-center items-center pt-32">

            {/* section one */}
            <div className=" flex-1 pe-0  sm:pe-4 flex flex-col ">

                <div className="bg-[#BC13FE] absolute -right-20 -top-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#BC13FE] absolute -left-20 -top-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>


                <HeadingTwo
                    className=' '
                    content={HomeJSON.section2[language].h2}
                />
                <Paragraph
                    className=' !max-w-[545px] !font-normal !leading-7 !text-white/80'
                    content={language === "en" ? HomeJSON.section2[language].p : value}
                />

                <ul className='list-disc text-white pl-10 pt-1  relative' style={{}}>

                    {
                        language === "en" && HomeJSON.section2[language].lists?.map((item, index) => {
                            return (
                                <li className='' key={index}>
                                    <Paragraph content={item.li} />
                                    <Paragraph content={item.p}
                                        className='!font-light !text-white/70' />
                                </li>
                            )
                        })
                    }

                    <div className="bg-[#BC13FE] absolute -left-28 -bottom-10 w-28 h-28 rounded-full blur-xl opacity-55"></div>

                </ul>
            </div>


            {/* images */}
            <div className={` hidden md:flex flex-1 sm:pt-20 pt-8  justify-end  ${language === "ar"   ? 'pe-12' : 'pe-0'} relative`}>
                <Image
                    src={image2}
                    className='rounded-2xl mb-10 me-0  mt-60 flex-1 sm:flex-none sm:-me-4 w-[250px]  z-30 border border-black md:mt-30 sm:mt-32 sm:w-[297px] h-[339px] object-cover'
                    alt={HomeJSON.section2[language].h2}
                />

                <div className="bg-[#BC13FE] absolute md:block hidden left-60 top-40 w-28 h-28 rounded-full blur-xl opacity-55"></div>

                <Image
                    src={image3}
                    className='rounded-2xl border flex-1 sm:flex-none sm:-ml-12 border-black w-[250px] sm:w-[297px] h-[339px] object-cover'
                    alt={HomeJSON.section2[language].h2}
                />
            </div>



            <div className={` block md:hidden my-24 relative`}>
                <Image
                    src={image2}
                    className='rounded-2xl mb-10 me-0 z-30 border border-black w-[297px] h-[339px] object-cover'
                    alt={HomeJSON.section2[language].h2}
                />

                <div className="bg-[#BC13FE] absolute md:block hidden left-60 top-40 w-28 h-28 rounded-full blur-xl opacity-55"></div>

                <Image
                    src={image3}
                    className='rounded-2xl border -mt-40 ms-10  border-black w-[297px] h-[339px] object-cover'
                    alt={HomeJSON.section2[language].h2}
                />
            </div>

        </div>

    )
}

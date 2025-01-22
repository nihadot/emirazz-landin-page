import { whereInnovation } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import H2 from '../../reusable/Home/H2'
import Paragraph from '../../reusable/Home/Paragraph'

type Props = {}

function IntroSection({ }: Props) {
    return (
        <div className=' relative h-full px-4 md:px-10 lg:px-20 overflow-hidden bg-black '>
            <Component />
        </div>
    )
}

export default IntroSection



function Component() {

    const language = useSelector((state: RootState) => state?.language?.language);

    return (
        <div className="flex flex-wrap mt-0 xl:flex-row flex-col justify-center items-center py-20 md:py-40">

            {/* section one */}
            <div className=" flex-1 pe-0  sm:pe-12 flex flex-col ">

                <div className="bg-[#B1842A] absolute -right-20 top-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#B1842A] absolute -left-20 bottom-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>

                <H2
                    className={`${language === 'ar' ? '!max-w-[376px] ' : ' '}`}
                    value={HomeJSON?.section2[language as 'en' | 'ar']?.h2}
                />
                <div className={`${language === 'ar' ? 'flex-col' : ''} flex-col lg:flex-row flex gap-3 `}>
                    <div className={`my-3`}>

                        <div className="w-32 bg-white h-1"></div>
                    </div>
                    <Paragraph
                        className={`${language === 'ar' ? '!max-w-[500px] ' : '!max-w-[800px] '} `}
                        value={HomeJSON?.section2[language as 'en' | 'ar']?.p}
                    />
                </div>

            </div>


            {/* images */}
            <div className={` md:flex pt-4 sm:pt-8  justify-end  ${language === "ar" ? 'pe-0' : 'pe-0'} relative`}>
                <Image
                    src={whereInnovation}
                    className='rounded-2xl  flex-1 sm:flex-none  w-full  z-30 border border-black  sm:w-[457px] h-[350px] sm:h-[388px] object-cover'
                    alt={HomeJSON?.section2[language as 'en' | 'ar']?.h2}
                />

                <div className="bg-[#BC13FE] absolute md:block hidden left-60 top-40 w-28 h-28 rounded-full blur-xl opacity-55"></div>

            </div>
        </div>

    )
}

import Image from '../reusable/Image/Image'
import { deepSea2Icon, treeFour } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import DeepSeaJSON from "../../data/deepSea.json"
import Description from './components/Description'

type Props = {}

function BelieveInExploring({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className="overflow-hidden mt-16 md:pt-20 pb-32 md:pb-10 px-4 md:px-10 lg:px-20 sm:mt-20">
            <div className="flex  relative lg:flex-row flex-col-reverse justify-center pb-20 gap-0 sm:gap-8 items-center">
                {/*  */}
                <div className="relative w-fit pt-4 sm:pt-0 pe-0 sm:pe-4 flex flex-col ">

                    <Image
                        className='w-[526px] h-[400px] rounded-2xl sm:h-[499px] object-cover'
                        src={deepSea2Icon}
                        alt={DeepSeaJSON.section1[language as 'en' | 'ar'].p}
                    />
                </div>

                <div className="flex flex-col sm:pt-0 pt-8 flex-1">
                    <Description

                        type='type1'
                        text={language === 'en' ? 'Scale Up by Emiraaz is centered on empowering businesses with the tools and strategies they need to succeed. Through customized support, we help businesses navigate challenges and seize opportunities in an increasingly competitive landscape. Our goal is to foster sustainable growth by providing tailored solutions that enhance operational performance, expand market reach, and promote innovation.' :
                        'في EMIRAAZ، نؤمن باستكشاف المجهول والغوص في أعماق المياه المجهولة لاكتشاف إمكانيات جديدة. إن أعماق البحار، بأسرارها الواسعة وإمكاناتها غير المستغلة، هي الاستعارة المثالية لكيفية تعاملنا مع عملنا. وكما يحمل المحيط عجائب لا تصدق تحت سطحه، فإننا نبحث باستمرار عن طرق جديدة للابتكار والإبداع وتجاوز الحدود في جميع مشاريعنا.'    
                        }
                    />
                </div>

                <Image
                    alt=''
                    src={treeFour}
                    className=' w-[140px] md:w-[187px] brightness-50 md:brightness-50 -right-12 md:-right-32 -bottom-48 md:-bottom-20 -rotate-[38deg] absolute h-[283px] object-contain'
                />
            </div>

        </section>
    )
}

export default BelieveInExploring
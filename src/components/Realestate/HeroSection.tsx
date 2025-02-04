import { yourGateWayToDubai } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import H1 from './components/H1'
import Description from './components/Description'

type Props = {}

function HeroSection({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className="mt-0 md:mt-20 mb-0 md:mb-32 relative w-full h-[700px]">

            <Image
                alt={language === 'en' ? 'Your Gateway to Dubai’s Premier Real Estate Market' : 'تكنولوجيا, العقارات, اختراع '}
                className='w-full h-full object-cover brightness-50'
                src={yourGateWayToDubai}
            />

            <div className=" px-4  md:px-10 lg:px-20 flex flex-col justify-center z-30 absolute top-0 left-0 w-full h-full">
                {language === 'en' && <H1>Your Gateway to Dubai’s Premier Real Estate Market</H1>}
                {language === 'ar' &&
                    <H1>
                        بوابتك إلى سوق العقارات المتميز في دبي
                    </H1>
                }

                <Description
                    type='type1'
                    className='max-w-[742px] w-full text-start py-2'
                    text={language === 'en' ? "Discover exclusive properties in Dubai’s vibrant real estate scene, from luxury homes to profitable investment opportunities." : 'اكتشف العقارات الحصرية في المشهد العقاري النابض بالحياة في دبي، بدءًا من المنازل الفاخرة وحتى فرص الاستثمار المربحة.'}
                />
            </div>
        </section>
    )
}

export default HeroSection
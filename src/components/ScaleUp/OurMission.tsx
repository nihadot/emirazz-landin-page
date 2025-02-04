import { ourMission } from '../../assets/images'
import Image from '../reusable/Image/Image'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function OurMission({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);


    return (
        <section className=" flex justify-end flex-col-reverse md:flex-row  md:items-center relative w-full">

            <Image
                alt={language === 'en' ? 'Our Mission: Driving Business Growth' : 'مهمتنا: قيادة نمو الأعمال'}
                className='w-full max-w-[780px] rounded-[15px] mt-3 md:mt-0 h-[400px] object-cover'
                src={ourMission}
            />

            <div className="bg-black justify-end mb-3 md:mb-0 pe-4 flex-col md:justify-center flex max-w-[650px] w-full md:h-[290px] md:absolute left-0 md:left-0 rounded-[15px]">
                <H2
                    text={language === 'en' ? 'Our Mission: Driving Business Growth' : 'مهمتنا: قيادة نمو الأعمال'}
                    type='type2'
                    className='pb-4'
                />

                <Description

                    type='type1'
                    text={language === 'en' ? 'Scale Up by Emiraaz is centered on empowering businesses with the tools and strategies they need to succeed. Through customized support, we help businesses navigate challenges and seize opportunities in an increasingly competitive landscape. Our goal is to foster sustainable growth by providing tailored solutions that enhance operational performance, expand market reach, and promote innovation.' :
                        'يركز برنامج توسيع نطاق طيران الإمارات على تمكين الشركات بالأدوات والاستراتيجيات التي تحتاجها لتحقيق النجاح. ومن خلال الدعم المخصص، نساعد الشركات على التغلب على التحديات واغتنام الفرص في بيئة تنافسية بشكل متزايد. هدفنا هو تعزيز النمو المستدام من خلال توفير حلول مصممة خصيصًا لتعزيز الأداء التشغيلي وتوسيع نطاق الوصول إلى السوق وتشجيع الابتكار.'}
                />
            </div>
        </section>


    )
}

export default OurMission
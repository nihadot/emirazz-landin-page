import { image1 } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import H1 from './components/H1'
import Description from './components/Description'
type Props = {}

function HeroSection({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className="mt-20 relative w-full h-[700px]">

            <Image
                alt={language === 'en' ? 'Technology. Real Estate. Invention.' : 'تكنولوجيا, العقارات, اختراع '}
                className='w-full h-full object-cover'
                src={image1}
            />
            <div className="w-full absolute z-0 top-0 left-0 h-full bg-gradient-to-r from-black via-black/70 to-transparent"></div>

            <div className=" px-4  md:px-10 lg:px-20 flex flex-col justify-center z-30 absolute top-0 left-0 w-full h-full">
                {language === 'en' && <H1>Emiraaz & Technology: Shaping the Future</H1>}
                {language === 'ar' &&
                    <H1>
                            اميراز والتكنولوجيا: تشكيل المستقبل
                    </H1>
                }

                <Description
                    type='type4'
                    className='max-w-[742px] w-full text-start py-2'
                    text={language === 'en' ? "Technology at EMIRAAZ: Shaping the Future through Innovation At EMIRAAZ, we don’t just follow trends; we create them. As a company driven by invention and innovation, we build products from our own ideas, using cutting-edge AI, modern technology, and a forward-thinking approach. Our ventures, from real estate to other sectors, are rooted in transforming the way industries operate. We’re not a service provider; we are inventors, committed to pushing boundaries and developing our own solutions that set new standards." : 'التكنولوجيا في إميراز: تشكيل المستقبل من خلال الابتكار في إميراز، نحن لا نتبع الاتجاهات فقط؛ نحن نصنعهم. باعتبارنا شركة مدفوعة بالاختراع والابتكار، فإننا نبني منتجات من أفكارنا الخاصة، باستخدام أحدث تقنيات الذكاء الاصطناعي والتكنولوجيا الحديثة ونهج التفكير المستقبلي. إن مشاريعنا، من العقارات إلى القطاعات الأخرى، متجذرة في تغيير الطريقة التي تعمل بها الصناعات. نحن لسنا مزود خدمة؛ نحن مخترعون، ملتزمون بدفع الحدود وتطوير حلولنا الخاصة التي تضع معايير جديدة.'}
                />
            </div>
        </section>
    )
}

export default HeroSection
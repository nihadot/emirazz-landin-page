import { unlockYourBusiness } from '../../assets/images'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import Image from './components/Image'
import H1 from './components/H1'
import Description from './components/Description'

type Props = {}

function HeroSection({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className="mt-20 relative w-full h-[700px]">

            <Image
                alt={language === 'en' ? 'Unlock Your Business Potential with Scale Up by Emiraaz' : 'تكنولوجيا, العقارات, اختراع '}
                className='w-full brightness-[0.3] h-full object-cover'
                src={unlockYourBusiness}
            />

            <div className=" px-4  md:px-10 lg:px-20 flex flex-col justify-center z-30 absolute top-0 left-0 w-full h-full">
                {language === 'en' && <H1>Unlock Your Business Potential with Scale Up by Emiraaz</H1>}
                {language === 'ar' &&
                    <H1>
                        أطلق العنان لإمكانات أعمالك من خلال توسيع نطاق أعمالك من Emiraaz
                    </H1>
                }

                <Description
                    type='type4'
                    className='max-w-[742px] w-full text-start py-2'
                    text={language === 'en' ? "At Emiraaz, we specialize in accelerating business growth for startups and established enterprises. Our 'Scale Up' initiative offers you access to expert guidance, a global network of investors and partners, and tailored strategies designed to take your business to new heights. Whether you’re looking to expand operations, enter new markets, or secure funding, we provide the tools and support to make it happen. Let’s build your success—together." : 'في أميراز، نحن متخصصون في تسريع نمو الأعمال للشركات الناشئة والمؤسسات القائمة. توفر لك مبادرة "Scale Up" الخاصة بنا إمكانية الوصول إلى إرشادات الخبراء، وشبكة عالمية من المستثمرين والشركاء، والاستراتيجيات المصممة خصيصًا للارتقاء بأعمالك إلى آفاق جديدة. سواء كنت تتطلع إلى توسيع عملياتك، أو دخول أسواق جديدة، أو تأمين التمويل، فإننا نقدم لك الأدوات والدعم لتحقيق ذلك. دعونا نبني نجاحك – معًا.'}
                />
            </div>
        </section>
    )
}

export default HeroSection
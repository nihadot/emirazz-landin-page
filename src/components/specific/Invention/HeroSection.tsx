import {  invention } from '../../../assets/images'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import Image from './components/Image'
import H1 from './components/H1'
import Description from './components/Description'
type Props = {}

function HeroSection({}: Props) {

    const language = useSelector((state: RootState) => state.language.language);


  return (
    <section className="mt-20 relative w-full h-[700px]">

    <Image
        alt={language === 'en' ? "Invention at Emiraaz: Shaping Tomorrow's World" : 'تكنولوجيا, العقارات, اختراع '}
        className='w-full brightness-50 h-full object-cover'
        src={invention}
    />

    <div className=" px-4  md:px-10 lg:px-20 flex flex-col justify-center z-30 absolute top-0 left-0 w-full h-full">
        {language === 'en' && <H1>Invention at Emiraaz: Shaping Tomorrow's World</H1>}
        {language === 'ar' &&
            <H1>
                أطلق العنان لإمكانات أعمالك من خلال توسيع نطاق أعمالك من Emiraaz
            </H1>
        }

        <Description
            type='type4'
            className='max-w-[742px] w-full text-start py-2'
            text={language === 'en' ? "At Emiraaz, invention is at the heart of everything we do. We are committed to driving innovation and pushing the boundaries of what's possible. From breakthrough technologies to pioneering solutions, we consistently explore new ideas and embrace change to stay ahead of the curve. Our dedication to invention allows us to create transformative products and services that improve lives, reshape industries, and set new standards for the future." : 'في أميراز، نحن متخصصون في تسريع نمو الأعمال للشركات الناشئة والمؤسسات القائمة. توفر لك مبادرة "Scale Up" الخاصة بنا إمكانية الوصول إلى إرشادات الخبراء، وشبكة عالمية من المستثمرين والشركاء، والاستراتيجيات المصممة خصيصًا للارتقاء بأعمالك إلى آفاق جديدة. سواء كنت تتطلع إلى توسيع عملياتك، أو دخول أسواق جديدة، أو تأمين التمويل، فإننا نقدم لك الأدوات والدعم لتحقيق ذلك. دعونا نبني نجاحك – معًا.'}
        />
    </div>
</section>
  )
}

export default HeroSection
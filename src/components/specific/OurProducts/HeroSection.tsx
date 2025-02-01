import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import Description from './components/Description';
import H2 from './components/H2';

type Props = {}

function HeroSection({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);


  return (

   
<section className="flex px-4  md:px-10 lg:px-20  relative pb-4 justify-center items-center pt-20 sm:pt-28">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <H2
                        type='type2'
                        className='mb-3'
                        text={language === 'en' ? 'Our Proud Partners' : 'اكتشف منتجاتنا'}
                    />

                    <Description
                        type='type2'
                        className='max-w-[1015px] w-full'
                        text={language === 'en' ? 'At Emiraaz, we build strategic partnerships that drive mutual growth and success. By collaborating with organizations across industries, we create new opportunities and enhance our collective impact. Partner with us to shape a brighter, more innovative future.' : 'في أميراز، تجسد منتجاتنا المزيج المثالي من الابتكار والجودة والحرفية. بدءًا من الحلول التقنية المتطورة وحتى التطوير العقاري الرائد، تم تصميم كل منتج لتلبية أعلى المعايير وتلبية احتياجاتك. استكشف مجموعتنا المتنوعة من العروض واستمتع بتجربة التميز الذي يميز أميراز.'}
                    />
                </div>


            </section>

  )
}

export default HeroSection
import { useSelector } from 'react-redux';
import Description from './components/Description';
import { RootState } from '../../store';
import H1 from './components/H1';

type Props = {}

function HeroSection({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);


    return (


        <section className="flex px-4  md:px-10 lg:px-20  relative pb-4 justify-center items-center pt-20 sm:pt-28">
            {/*  */}

            <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

              
                <H1>
 {language === 'en' ? 'Explore Our Products' : 'اكتشف منتجاتنا'}
                 </H1>

                <Description
                    type='type2'
                    className='max-w-[1015px] w-full'
                    text={language === 'en' 
            ? 'At Emiraaz, our products embody the perfect blend of innovation, quality, and craftsmanship. From cutting-edge technology solutions to groundbreaking real estate developments, each product is designed to meet the highest standards and fulfill your needs.'
            : 'في أميراز، تجسد منتجاتنا المزيج المثالي من الابتكار والجودة والحرفية. بدءًا من الحلول التقنية المتطورة وحتى التطوير العقاري الرائد، تم تصميم كل منتج لتلبية أعلى المعايير وتلبية احتياجاتك.'
          }
                />
            </div>


        </section>

    )
}

export default HeroSection
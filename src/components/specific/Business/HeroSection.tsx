import { businessImage1 } from '../../../assets/images'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import Image from './components/Image'
import H1 from './components/H1'
import Description from './components/Description'

type Props = {}

function HeroSection({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className="mt-0 md:mt-20 mb-0 md:mb-32 relative w-full h-[700px]">

            <Image
                alt={language === 'en' ? 'Business at Emiraaz: Empowering Opportunities for Growth' : 'تكنولوجيا, العقارات, اختراع '}
                className='w-full h-full object-cover'
                src={businessImage1}
            />
            <div className="w-full absolute z-0 top-0 left-0 h-full bg-gradient-to-r from-black via-black/70 to-transparent"></div>

            <div className=" px-4  md:px-10 lg:px-20 flex flex-col justify-center z-30 absolute top-0 left-0 w-full h-full">
                {language === 'en' && <H1>Business at Emiraaz: Empowering Opportunities for Growth</H1>}
                {language === 'ar' &&
                    <H1>
                        الأعمال في أميراز: تمكين فرص النمو
                    </H1>
                }

                <Description
                    type='type1'
                    className='max-w-[742px] w-full text-start py-2'
                    text={language === 'en' ? "At Emiraaz, our Business division is the cornerstone of collaboration, innovation, and development. We are dedicated to empowering businesses through strategic partnerships, fostering innovative ideas, and facilitating growth across various sectors. With a focus on Partners, Sponsorship, Investment, and Startups, we create tailored opportunities that meet the unique needs of each business, helping them reach new heights." : 'في أميراز، يعد قسم الأعمال لدينا حجر الزاوية في التعاون والابتكار والتطوير. نحن ملتزمون بتمكين الشركات من خلال الشراكات الاستراتيجية، وتعزيز الأفكار المبتكرة، وتسهيل النمو في مختلف القطاعات. ومن خلال التركيز على الشركاء والرعاية والاستثمار والشركات الناشئة، نقوم بإنشاء فرص مخصصة تلبي الاحتياجات الفريدة لكل شركة، مما يساعدها على الوصول إلى آفاق جديدة.'}
                />
            </div>
        </section>
    )
}

export default HeroSection
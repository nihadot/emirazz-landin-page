import { whereInnovation } from '../../assets/images'
import Image from '../reusable/Image/Image'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function EmiraazInnovationExcellence({ }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);


    return (
        <section className='overflow-hidden  flex md:flex-row pt-20 md:pt-40 relative h-full px-4 md:px-10 lg:px-20  bg-black flex-col'>
            <div className="flex-[60%] ">
                <div className="bg-[#B1842A] absolute -right-20 top-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#B1842A] absolute -left-20 bottom-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>

                {language === 'en' && <H2 type='type1' className='mb-4  md:mb-8 break-words' text={language === 'en' ? 'Emiraaz - Where Innovation Meets Excellence Across Industries' : ''} />}
                {language === 'ar' && <H2 type='type1' className='mb-4  md:mb-8 break-words w-full max-w-[450px]' text={language === 'ar' ? 'أميراز - حيث يلتقي الابتكار بالتميز عبر الصناعات' : ''} />}
                <div className={`flex flex-col md:flex-row ${language === 'ar' && '!flex-col'}`}>

                    <div className="w-32 me-4 mt-2 bg-white h-1 mb-4 sm:mb-8"></div>
                    {language === 'en' && <Description
                        className='max-w-[550px] w-full mb-4 sm:mb-8'
                        type='type1'
                        text={language === 'en' ? "At Emiraaz, we are driven by innovation in Technology, Real Estate, and Invention. We unite industry leaders to collaborate across sectors, creating transformative solutions that address today's challenges and anticipate tomorrow's needs, shaping a future of progress and limitless potential." : ''}
                    />}

                    {language === 'ar' && <Description
                        className='max-w-[550px] w-full mb-4 sm:mb-8'
                        type='type1'
                        text={language === 'ar' ? "في أميراز، نحن مدفوعون بالابتكار في التكنولوجيا والعقارات والاختراع. نحن نوحد قادة الصناعة للتعاون عبر القطاعات، وخلق حلول تحويلية تعالج تحديات اليوم وتتوقع احتياجات الغد، وتشكيل مستقبل من التقدم والإمكانات اللامحدودة." : ''}
                    />}
                </div>
            </div>
            <div className="  flex-[40%] relative flex justify-center md:justify-end ">
                <Image alt={language === 'en' ? 'Emiraaz - Where Innovation Meets Excellence Across Industries' : 'أميراز - حيث يلتقي الابتكار بالتميز عبر الصناعات'} src={whereInnovation} className='w-[451px] rounded-[15px] overflow-hidden h-[350px] object-cover' />
            </div>

        </section>
    )
}

export default EmiraazInnovationExcellence
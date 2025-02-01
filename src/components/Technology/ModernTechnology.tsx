import { image13 } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import H2 from './components/H2'
import Description from './components/Description'
import Image from './components/Image'

type Props = {}

function ModernTechnology({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);


    return (
        <>
             <section className="flex px-4  md:px-10 lg:px-20  relative pb-4 justify-center items-center pt-20 sm:pt-60">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <H2
                        type='type1'
                        className='mb-3'
                        text={language === 'en' ? 'Modern Technology: Creating the Future' : 'التكنولوجيا الحديثة: صناعة المستقبل'}
                    />

                    <Description
                        type='type3'
                        className='max-w-[1015px] w-full'
                        text={language === 'en' ? 'At EMIRAAZ, we build modern, future-proof products that not only meet today’s needs but anticipate tomorrow’s challenges. Our use of modern technology ensures that every product we create is built for the future.' : 'في إميراز، نقوم ببناء منتجات حديثة مقاومة للمستقبل لا تلبي احتياجات اليوم فحسب، بل تتوقع تحديات الغد. إن استخدامنا للتكنولوجيا الحديثة يضمن أن كل منتج نقوم بإنشائه مصمم للمستقبل.'}
                    />
                </div>


            </section>



            <section className='px-4 md:mt-40 mt-16 md:px-10 lg:px-20 w-full h-[700px] '>
            <div  className="relative w-full h-full rounded-[20px]">
                <Image
                    alt={language === 'en' ? 'Cloud-Driven Solutions:' : 'الحلول السحابية:'}
                    className='w-full h-full rounded-[20px] brightness-75 object-cover '
                    src={image13}
                />
                <div className="px-4  md:px-14 md:py-16 flex flex-col h-full  items-start justify-center md:justify-center w-full absolute left-0 top-0 z-30">
                    <H2
                        text={language === 'en' ? 'Cloud-Driven Solutions:' : 'الحلول السحابية:'}
                        type='type6'
                        className='max-w-[800px] md:text-start w-full text-center'
                    />

                    <Description
                        type='type4'
                        className=' w-full text-center md:text-start py-2'
                        text={language === 'en' ? "All our platforms are cloud-based, offering scalability, security, and real-time access for our clients and users. 5G-Enabled Applications: We are preparing for the future with 5G technology, allowing for faster, more reliable connectivity across all our platforms, from real estate to other innovative products. Sustainable Innovation: At EMIRAAZ, we combine technology with sustainability, developing eco-friendly products that reduce environmental impact while providing top-notch functionality." : 'تعتمد جميع منصاتنا على السحابة، وتوفر قابلية التوسع والأمان والوصول في الوقت الفعلي لعملائنا ومستخدمينا. التطبيقات التي تدعم شبكات الجيل الخامس: نحن نستعد للمستقبل باستخدام تقنية الجيل الخامس، مما يسمح باتصال أسرع وأكثر موثوقية عبر جميع منصاتنا، بدءًا من العقارات وحتى المنتجات المبتكرة الأخرى. الابتكار المستدام: في EMIRAAZ، نجمع بين التكنولوجيا والاستدامة، ونقوم بتطوير منتجات صديقة للبيئة تقلل من التأثير البيئي مع توفير وظائف من الدرجة الأولى.'}
                    />

                   



                </div>


            </div>
        </section>
        
        </>
    )
}

export default ModernTechnology
import { image4, image5 } from '../../assets/images'
import Image from '../reusable/Image/Image'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import H2 from './components/H2'
import Description from './components/Description'
type Props = {}

function DigitalTransformation({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <>
            <section className='px-4 relative items-center flex-col-reverse md:flex-row flex md:px-10 lg:px-20 pt-28'>

            <div className="">

                    <Image
                        alt='Digital Transformation in Real Estate'
                        className=' relative rounded-2xl sm:h-[440px] max-w-[526px] w-full h-[390px] object-cover'
                        src={image4}
                        />
                        </div>

                <div className={` flex-1 ${language === 'ar' ? 'md:pt-20' : ''} md:px-16 px-0 justify-center flex flex-col h-full items-center md:items-center w-full `}>
                    <H2
                        text={language === 'en' ? 'Digital Transformation in Real Estate' : 'التحول الرقمي في العقارات'}
                        type='type1'
                        className='w-full md:mb-2 text-start'
                    />


                    <Description
                        type='type1'
                        className={`w-full md:text-start text-start py-2`}
                        text={language === 'en' ? "In the real estate sector, we are leading the charge with smart building technologies and data-driven solutions. From virtual tours to AI-powered property management, we use technology to improve efficiency, sustainability, and customer experience. Our real estate ventures leverage advanced analytics and automation, reducing costs and improving outcomes for investors, developers, and buyers alike. Technology enables us to create smarter, safer, and more accessible real estate solutions." : 'وفي قطاع العقارات، نحن نتصدر الريادة في مجال تقنيات البناء الذكية والحلول المبنية على البيانات. من الجولات الافتراضية إلى إدارة العقارات المدعومة بالذكاء الاصطناعي، نستخدم التكنولوجيا لتحسين الكفاءة والاستدامة وتجربة العملاء. تستفيد مشاريعنا العقارية من التحليلات المتقدمة والأتمتة، مما يقلل التكاليف ويحسن النتائج للمستثمرين والمطورين والمشترين على حدٍ سواء. تمكننا التكنولوجيا من إنشاء حلول عقارية أكثر ذكاءً وأمانًا ويسهل الوصول إليها.'}
                    />



                </div>
            </section>


            <section className='px-4   items-center relative flex-col-reverse md:flex-row flex md:px-10 lg:px-20 pb-0 pt-10 md:pt-28'>
                    <Image
                        alt='Cybersecurity & Data Protection'
                        className='max-w-[526px] w-full relative mt-3 md:mt-0 rounded-2xl sm:h-[440px] h-[390px] object-cover'
                        src={image5}
                    />

                <div className={`flex-1 ${language === 'ar' ? 'md:pt-20' : ''} md:px-16 px-0 justify-center flex flex-col h-full  items-center md:items-center w-full `}>
                    <H2
                        text={language === 'en' ? 'Cybersecurity & Data Protection' : 'التحول الرقمي في العقارات'}
                        type='type1'
                        className='w-full md:mb-2 text-start'
                    />

                    <Description
                        type='type1'
                        className={`w-full md:text-start text-start py-2`}
                        text={language === 'en' ? "In a digital-first world, cybersecurity is paramount. Emiraaz prioritizes data protection and security by investing in advanced cybersecurity solutions that safeguard our clients' data and ensure compliance with global regulations. We understand that trust is built on the foundation of secure digital ecosystems, and we work diligently to protect sensitive information across all our platforms." : 'في عالم رقمي أولاً، يعد الأمن السيبراني أمرًا بالغ الأهمية. تعطي أميراز الأولوية لحماية البيانات وأمنها من خلال الاستثمار في حلول الأمن السيبراني المتقدمة التي تحمي بيانات عملائنا وتضمن الامتثال للوائح العالمية. نحن ندرك أن الثقة مبنية على أساس النظم البيئية الرقمية الآمنة، ونعمل بجد لحماية المعلومات الحساسة عبر جميع منصاتنا.'}
                    />

                </div>
            </section>
        </>

    )
}

export default DigitalTransformation



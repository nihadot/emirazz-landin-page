import { image10, image11, image12 } from '../../assets/images'
import Image from '../reusable/Image/Image'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function InventionRealEstate({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);

    return (
        <>

            <section className="flex px-4  md:px-10 lg:px-20  relative pb-4 justify-center items-center pt-20 sm:pt-60">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <H2
                        type='type1'
                        className='mb-3'
                        text={language === 'en' ? 'Invention in Real Estate' : 'الذكاء الاصطناعي: محرك الابتكار'}
                    />

                    <Description
                        type='type3'
                        className='max-w-[1015px] w-full'
                        text={language === 'en' ? 'Redefining the Industry EMIRAAZ is reinventing the real estate landscape by inventing products that leverage technology to solve industry challenges. Our focus is on creating platforms and tools that make real estate more accessible, transparent, and efficient.' : 'الذكاء الاصطناعي هو جوهر التقدم التكنولوجي الذي نحققه في إميراز. نحن نستخدم الذكاء الاصطناعي لدعم تطوير منتجاتنا، مما يمكننا من إنشاء حلول أكثر ذكاءً وكفاءة وابتكارًا تعيد تشكيل الصناعات التي نعمل فيها.'}
                    />
                </div>


            </section>



            <section className='px-4   items-center relative flex-col-reverse md:flex-row flex md:px-10 lg:px-20 pb-0 pt-10 md:pt-28'>


                <Image
                    alt='Virtual Property Experiences:'
                    className='max-w-[526px] w-full relative mt-3 md:mt-0 rounded-2xl sm:h-[440px] h-[390px] object-cover'
                    src={image10}
                />


                <div className={`flex-1 ${language === 'ar' ? 'md:pt-20' : ''} md:px-16 px-0 justify-center flex flex-col h-full  items-center md:items-center w-full `}>
                    <H2
                        text={language === 'en' ? 'Property Management Reimagined' : 'تطوير المنتجات المعتمدة على الذكاء الاصطناعي'}
                        type='type1'
                        className='w-full md:mb-2 text-start'
                    />


                    <Description
                        type='type1'
                        className={`w-full md:text-start text-start py-2`}
                        text={language === 'en' ? "Our internally developed solutions streamline property management, offering smart technologies for landlords and property owners. From automated maintenance scheduling to data-driven insights on market trends, we reinvent how properties are managed." : 'نحن نسخر الذكاء الاصطناعي لتحليل بيانات السوق واتجاهاته، مما يساعدنا على إنشاء منتجات جديدة تتوافق بدقة مع الاحتياجات المستقبلية. تتطور خوارزميات الذكاء الاصطناعي لدينا باستمرار لضمان بقاء حلولنا متطورة. الذكاء الاصطناعي للنمذجة التنبؤية: سواء كان الأمر يتعلق بالعقارات أو القطاعات الأخرى، فإن أنظمة الذكاء الاصطناعي لدينا تتنبأ بالاتجاهات واحتياجات العملاء، مما يساعدنا على البقاء في المقدمة من خلال تطوير المنتجات التي تلبي المتطلبات قبل ظهورها.'}
                    />



                </div>
            </section>



            <section className='px-4   items-center relative flex-col md:flex-row flex md:px-10 lg:px-20 pb-0 pt-10 md:pt-28'>

                <div className={`flex-1 ${language === 'ar' ? 'md:pt-20' : ''} md:pe-16 px-0 justify-center flex flex-col h-full  items-center md:items-center w-full `}>
                    <H2
                        text={language === 'en' ? 'Smart Contracts with Blockchain' : 'التحول الرقمي في العقارات'}
                        type='type1'
                        className='w-full md:mb-2 text-start'
                    />


                    <Description
                        type='type1'
                        className={`w-full md:text-start text-start py-2`}
                        text={language === 'en' ? "We’ve incorporated blockchain into real estate to introduce smart contracts that eliminate the need for intermediaries, making transactions faster, more secure, and transparent." : 'وفي قطاع العقارات، نحن نتصدر الريادة في مجال تقنيات البناء الذكية والحلول المبنية على البيانات. من الجولات الافتراضية إلى إدارة العقارات المدعومة بالذكاء الاصطناعي، نستخدم التكنولوجيا لتحسين الكفاءة والاستدامة وتجربة العملاء. تستفيد مشاريعنا العقارية من التحليلات المتقدمة والأتمتة، مما يقلل التكاليف ويحسن النتائج للمستثمرين والمطورين والمشترين على حدٍ سواء. تمكننا التكنولوجيا من إنشاء حلول عقارية أكثر ذكاءً وأمانًا ويسهل الوصول إليها.'}
                    />



                </div>


                <Image
                    alt='Smart Contracts with Blockchain'
                    className='max-w-[526px] w-full relative mt-3 md:mt-0 rounded-2xl sm:h-[440px] h-[390px] object-cover'
                    src={image11}
                />
            </section>



            <section className='px-4   items-center relative flex-col-reverse md:flex-row flex md:px-10 lg:px-20 pb-0 pt-10 md:pt-28'>


                <Image
                    alt='Property Management Reimagined'
                    className='max-w-[526px] w-full relative mt-3 md:mt-0 rounded-2xl sm:h-[440px] h-[390px] object-cover'
                    src={image12}
                />


                <div className={`flex-1 ${language === 'ar' ? 'md:pt-20' : ''} md:px-16 px-0 justify-center flex flex-col h-full  items-center md:items-center w-full `}>
                    <H2
                        text={language === 'en' ? 'Virtual Property Experiences:' : 'تطوير المنتجات المعتمدة على الذكاء الاصطناعي'}
                        type='type1'
                        className='w-full md:mb-2 text-start'
                    />


                    <Description
                        type='type1'
                        className={`w-full md:text-start text-start py-2`}
                        text={language === 'en' ? "Our product innovations include immersive virtual tours and 3D visualization tools, giving buyers and investors the ability to explore properties from anywhere, anytime, without limitations." : 'نحن نسخر الذكاء الاصطناعي لتحليل بيانات السوق واتجاهاته، مما يساعدنا على إنشاء منتجات جديدة تتوافق بدقة مع الاحتياجات المستقبلية. تتطور خوارزميات الذكاء الاصطناعي لدينا باستمرار لضمان بقاء حلولنا متطورة. الذكاء الاصطناعي للنمذجة التنبؤية: سواء كان الأمر يتعلق بالعقارات أو القطاعات الأخرى، فإن أنظمة الذكاء الاصطناعي لدينا تتنبأ بالاتجاهات واحتياجات العملاء، مما يساعدنا على البقاء في المقدمة من خلال تطوير المنتجات التي تلبي المتطلبات قبل ظهورها.'}
                    />



                </div>
            </section>




        </>
    )
}

export default InventionRealEstate
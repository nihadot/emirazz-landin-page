import { image14, image15 } from '../../assets/images'
import Image from '../reusable/Image/Image'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import H2 from './components/H2'
import Description from './components/Description'


function InventingSustainable() {

    const language = useSelector((state: RootState) => state.language.language);

    return (

        <>

            <section className="flex px-4  md:px-10 lg:px-20  relative pb-4 justify-center items-center pt-20 sm:pt-60">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <H2
                        type='type1'
                        className='mb-3'
                        text={language === 'en' ? 'Inventing a Sustainable Future' : 'ابتكار مستقبل مستدام'}
                    />

                    <Description
                        type='type3'
                        className='max-w-[1015px] w-full'
                        text={language === 'en' ? 'In everything we do, sustainability is a priority. Our innovations are designed to contribute to a more sustainable future by integrating green technology and practices into all of our projects.' : 'في كل ما نقوم به، تعتبر الاستدامة أولوية. تم تصميم ابتكاراتنا للمساهمة في مستقبل أكثر استدامة من خلال دمج التكنولوجيا والممارسات الخضراء في جميع مشاريعنا.'}
                    />
                </div>


            </section>




            <section className='px-4   items-center relative flex-col-reverse md:flex-row flex md:px-10 lg:px-20 pb-0 pt-10 md:pt-28'>


                <Image
                    alt='Eco-Innovation'
                    className='max-w-[526px] w-full relative mt-3 md:mt-0 rounded-2xl sm:h-[440px] h-[390px] object-cover'
                    src={image14}
                />


                <div className={`flex-1 ${language === 'ar' ? 'md:pt-20' : ''} md:px-16 px-0 justify-center flex flex-col h-full  items-center md:items-center w-full `}>
                    <H2
                        text={language === 'en' ? 'Eco-Innovation' : 'الابتكار البيئي'}
                        type='type1'
                        className='w-full md:mb-2 text-start'
                    />


                    <Description
                        type='type1'
                        className={`w-full md:text-start text-start py-2`}
                        text={language === 'en' ? "From smart energy management systems to green building materials, our inventions incorporate sustainable solutions, reducing waste and energy consumption while enhancing product efficiency." : 'من أنظمة إدارة الطاقة الذكية إلى مواد البناء الخضراء، تتضمن اختراعاتنا حلولاً مستدامة، مما يقلل من استهلاك النفايات والطاقة مع تعزيز كفاءة المنتج.'}
                    />



                </div>
            </section>



            <section className='px-4   items-center relative flex-col md:flex-row flex md:px-10 lg:px-20 pb-0 pt-10 md:pt-28'>

                <div className={`flex-1 ${language === 'ar' ? 'md:pt-20' : ''} md:pe-16 px-0 justify-center flex flex-col h-full  items-center md:items-center w-full `}>
                    <H2
                        text={language === 'en' ? 'Sustainable Real Estate' : 'العقارات المستدامة'}
                        type='type1'
                        className='w-full md:mb-2 text-start'
                    />


                    <Description
                        type='type1'
                        className={`w-full md:text-start text-start py-2`}
                        text={language === 'en' ? "We are developing products that make sustainable practices easier for developers and property managers, helping them build and manage eco-friendly properties with innovative technologies." : 'نحن نعمل على تطوير المنتجات التي تجعل الممارسات المستدامة أسهل للمطورين ومديري العقارات، ومساعدتهم على بناء وإدارة العقارات الصديقة للبيئة بتقنيات مبتكرة.'}
                    />



                </div>


                <Image
                    alt='Sustainable Real Estate'
                    className='max-w-[526px] w-full relative mt-3 md:mt-0 rounded-2xl sm:h-[440px] h-[390px] object-cover'
                    src={image15}
                />
            </section>

        </>
    )
}

export default InventingSustainable
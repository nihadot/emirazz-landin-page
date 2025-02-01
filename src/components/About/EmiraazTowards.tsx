import Image from '../reusable/Image/Image'
import { aboutImage3, aboutImage4 } from '../../assets/images'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import Description from './components/Description'
import H2 from './components/H2'

type Props = {}

function EmiraazTowards({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);

    return (

        <>

            <section className='overflow-hidden  flex md:flex-row pt-20 md:pt-40 relative h-full px-4 md:px-10 lg:px-20  bg-black flex-col'>


                <div className="flex-[60%] md:pe-28">
                    <div className="bg-[#BC13FE] absolute -left-20 bottom-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>

                    <Description
                        className=' w-full mb-4 sm:mb-4'
                        type='type1'
                        text={language === 'en' ? "Leadership" : 'قيادة'}
                    />

                   <H2 type='type1' className='mb-4 max-w-[597px] w-full  md:mb-4 break-words' text={language === 'en' ? 'Emiraaz Towards Excellence' : 'اميراز نحو التميز'} />
                  
                    <div className={`flex flex-col md:flex-row ${language === 'ar' && '!flex-col'}`}>

                        {language === 'en' && <Description
                            className=' w-full mb-4 sm:pb-4'
                            type='type1'
                            text={language === 'en' ? "At the core of Emiraaz’s success is a visionary leadership team that drives our strategic direction and ensures we remain at the forefront of innovation. Our leaders bring decades of experience across multiple industries, guiding the company with insight, determination, and a relentless focus on delivering exceptional results. With a clear vision for the future, the leadership team at Emiraaz prioritizes sustainable growth, ethical business practices, and the creation of long-term value. Their hands-on approach ensures that every decision we make is aligned with our core principles of integrity, collaboration, and innovation. Each member of our leadership team contributes a unique perspective, fostering a culture of creativity and forward-thinking that allows Emiraaz to navigate complex markets with confidence." : ''}
                        />}

                        {language === 'ar' && <Description
                            className='max-w-[550px] mb-4 sm:pb-4 w-full'
                            type='type1'
                            text={language === 'ar' ? 'يكمن جوهر نجاح أميراز في فريق القيادة صاحب الرؤية الذي يقود توجهنا الاستراتيجي ويضمن بقائنا في طليعة الابتكار. يتمتع قادتنا بعقود من الخبرة في العديد من الصناعات، ويوجهون الشركة ببصيرة وتصميم وتركيز لا هوادة فيه على تحقيق نتائج استثنائية.' : ''}
                        />}

{language === 'ar' && <Description
                            className='max-w-[550px] w-full'
                            type='type1'
                            text={language === 'ar' ? 'ومن خلال رؤية واضحة للمستقبل، يعطي فريق القيادة في أميراز الأولوية للنمو المستدام، والممارسات التجارية الأخلاقية، وخلق قيمة طويلة الأجل. ويضمن نهجهم العملي أن كل قرار نتخذه يتماشى مع مبادئنا الأساسية المتمثلة في النزاهة والتعاون والابتكار. يساهم كل عضو في فريق القيادة لدينا بمنظور فريد، مما يعزز ثقافة الإبداع والتفكير المستقبلي الذي يسمح لإميراز بالتنقل في الأسواق المعقدة بثقة.' : ''}
                        />}

                       

                    </div>



                </div>
                <div dir='ltr' className="  pb-32 md:pb-0 md:flex-[40%] w-full relative mt-28 md:mt-0 flex-col-reverse md:flex-row flex items-end md:items-start md:justify-end ">
                    <Image alt={language === 'en' ? 'Emiraaz - Where Innovation Meets Excellence Across Industries' : 'أميراز - حيث يلتقي الابتكار بالتميز عبر الصناعات'} src={aboutImage3} className='w-[297px] flex-none -mt-24  md:mt-36 mr-0 self-start md:-mr-20 relative rounded-[15px] z-50 md:z-40 overflow-hidden h-[340px] object-cover' />
                    <Image alt={language === 'en' ? 'Emiraaz - Where Innovation Meets Excellence Across Industries' : 'أميراز - حيث يلتقي الابتكار بالتميز عبر الصناعات'} src={aboutImage4} className='w-[297px] flex-none rounded-[15px]  overflow-hidden h-[340px] z-40 md:z-30 object-cover' />
                    <div className="bg-[#CECECE33] absolute -top-24 md:top-0 left-0 w-[70px] h-[70px] rounded-[13px]"></div>
                    <div className="bg-[#CECECE33] absolute bottom-4 md:bottom-0 w-[70px] h-[70px] rounded-[13px]"></div>

                </div>

            </section>
        </>

    )
}

export default EmiraazTowards
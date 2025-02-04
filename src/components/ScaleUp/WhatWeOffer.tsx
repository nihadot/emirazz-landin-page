import Image from '../reusable/Image/Image'
import { whatWeOffer1, whatWeOffer2, whatWeOffer3, whatWeOffer4 } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function WhatWeOffer({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className='overflow-hidden flex md:flex-row pt-20 md:py-14 relative h-full px-4 md:px-10 lg:px-20 bg-black flex-col'>


            <div className="md:flex-[60%]">

                {language === 'en' && <H2 type='type1' className='mb-4 max-w-[600px] md:mb-4 break-words' text={language === 'en' ? 'What We Offer: Key Pillars of Scale Up' : ''} />}
                {language === 'ar' && <H2 type='type1' className='mb-4  md:mb-4 break-words w-full max-w-[450px]' text={language === 'ar' ? 'ما نقدمه: الركائز الأساسية للتوسع' : ''} />}
                <div className={`flex flex-col md:flex-row ${language === 'ar' && '!flex-col'}`}>


                </div>

                {language === 'en' ? <ul className='text-white list-disc mt-1 mx-8 md:ms-12'>
                    <li className='md:text-[20px] md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>Mentorship & Advisory</li>
                    <Description
                        text='We offer access to a network of seasoned professionals and industry experts who provide invaluable mentorship and strategic advice. Whether you need help with business strategy, operations, marketing, or innovation, our advisors guide you through every stage of growth.'
                        type='type1'
                        className='!font-light mt-1'
                    />

                    <li className='md:text-[20px] mt-1 md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>Funding & Investment Opportunities</li>
                    <Description
                        text='Scale Up connects businesses with potential investors, venture capitalists, and funding opportunities to fuel growth. We help identify the right financial partners who share your vision and provide the capital required to scale effectively.'
                        type='type6'
                        className='!font-light mt-1'

                    />


                    <li className='md:text-[20px] mt-1 md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>Access to a Global Network</li>
                    <Description
                        text='Through Emiraaz’s extensive network, you gain access to a global community of businesses, investors, and thought leaders. Our connections open doors to new markets, partnerships, and collaborative ventures, enabling businesses to expand their reach and create valuable relationships.'
                        type='type6'
                        className='!font-light mt-1'

                    />



                    <li className='md:text-[20px] mt-1 md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>Innovation & Technology</li>
                    <Description
                        text='Emiraaz believes that innovation is the key to future growth. We provide businesses with the tools and resources needed to leverage cutting-edge technologies such as AI, IoT, and data analytics, helping them stay ahead of industry trends and create a competitive edge.'
                        type='type6'
                        className='!font-light mt-1'

                    />


                    <li className='md:text-[20px] mt-1 md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>Workshops & Training Programs</li>
                    <Description
                        text='We offer a variety of workshops, seminars, and training programs that focus on key areas like leadership, operational excellence, and digital transformation. These sessions are designed to equip business leaders and their teams with the knowledge and skills needed to succeed in today’s dynamic market'
                        type='type6'
                        className='!font-light mt-1'

                    />
                </ul> : ''}


                {language === 'ar' ? <ul className='text-white list-disc mt-1 mx-8 md:ms-12'>
                    <li className='md:text-[20px] md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>الإرشاد والمشورة</li>
                    <Description
                        text='نحن نوفر الوصول إلى شبكة من المهنيين المتمرسين وخبراء الصناعة الذين يقدمون إرشادًا لا يقدر بثمن ومشورة استراتيجية. سواء كنت بحاجة إلى مساعدة في استراتيجية العمل أو العمليات أو التسويق أو الابتكار، فإن مستشارينا يرشدونك خلال كل مرحلة من ملh'
                        type='type1'
                        className='!font-light mt-1'
                    />

                    <li className='md:text-[20px] mt-1 md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>فرص التمويل والاستثمار</li>
                    <Description
                        text='تعمل مبادرة Scale Up على ربط الشركات بالمستثمرين المحتملين وأصحاب رؤوس الأموال الاستثمارية وفرص التمويل لدعم النمو. نحن نساعد في تحديد الشركاء الماليين المناسبين الذين يشاركونك رؤيتك ويوفرون رأس المال المطلوب للتوسع بفعالية.'
                        type='type6'
                        className='!font-light mt-1'

                    />


                    <li className='md:text-[20px] mt-1 md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>الوصول إلى شبكة عالمية</li>
                    <Description
                        text='من خلال شبكة Emiraaz الواسعة، يمكنك الوصول إلى مجتمع عالمي من الشركات والمستثمرين وقادة الفكر. اتصالاتنا تفتح الأبواب أمام أسواق جديدة وشراكات ومشاريع تعاونية، مما يمكّن الشركات من توسيع نطاق وصولها وإنشاء علاقات قيمة.'
                        type='type6'
                        className='!font-light mt-1'

                    />



                    <li className='md:text-[20px] mt-1 md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>الابتكار والتكنولوجيا</li>
                    <Description
                        text='يعتقد أميراز أن الابتكار هو مفتاح النمو المستقبلي. نحن نزود الشركات بالأدوات والموارد اللازمة للاستفادة من التقنيات المتطورة مثل الذكاء الاصطناعي وإنترنت الأشياء وتحليلات البيانات، مما يساعدهم على البقاء في صدارة اتجاهات الصناعة وإنشاء ميزة تنافسية.'
                        type='type6'
                        className='!font-light mt-1'

                    />


                    <li className='md:text-[20px] mt-1 md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>ورش العمل والبرامج التدريبية</li>
                    <Description
                        text='نحن نقدم مجموعة متنوعة من ورش العمل والندوات والبرامج التدريبية التي تركز على المجالات الرئيسية مثل القيادة والتميز التشغيلي والتحول الرقمي. تم تصميم هذه الجلسات لتزويد قادة الأعمال وفرقهم بالمعرفة والمهارات اللازمة للنجاح في السوق الديناميكي اليوم' type='type6'
                        className='!font-light mt-1'

                    />
                </ul> : ''}
            </div>
            <div dir='ltr' className=" flex-col md:flex-[40%] w-full h-[1100px] md:h-full md:pt-0 pt-64 relative mt-0 md:mt-0  flex ">
                <div className="md:flex-1 w-full flex relative  ">
                    <Image alt={language === 'en' ? 'Emiraaz - What We Offer: Key Pillars of Scale Up' : 'أميراز - حيث يلتقي الابتكار بالتميز عبر الصناعات'} src={whatWeOffer1} className='w-[297px] flex-none -mt-56  md:mt-20 mr-0 self-start top-20   rounded-[15px] md:z-40 overflow-hidden h-[340px] object-cover' />
                    <Image alt={language === 'en' ? 'Emiraaz - What We Offer: Key Pillars of Scale Up' : 'أميراز - حيث يلتقي الابتكار بالتميز عبر الصناعات'} src={whatWeOffer2} className='w-[297px]  rounded-[15px] flex-none right-0 absolute overflow-hidden h-[340px] object-cover' />
                </div>


                <div className="md:flex-1 w-full flex relative mt-96 md:mt-16 ">
                    <Image alt={language === 'en' ? 'Emiraaz - What We Offer: Key Pillars of Scale Up' : 'أميراز - حيث يلتقي الابتكار بالتميز عبر الصناعات'} src={whatWeOffer3} className='w-[297px] flex-none -mt-24  md:mt-20 mr-0 self-start top-20   rounded-[15px] md:z-40 overflow-hidden h-[340px] object-cover' />
                    <Image alt={language === 'en' ? 'Emiraaz - What We Offer: Key Pillars of Scale Up' : 'أميراز - حيث يلتقي الابتكار بالتميز عبر الصناعات'} src={whatWeOffer4} className='w-[297px]  rounded-[15px] flex-none right-0 absolute overflow-hidden h-[340px] object-cover' />
                </div>

            </div>




        </section>

    )
}

export default WhatWeOffer
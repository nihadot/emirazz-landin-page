import { image2, image3 } from '../../assets/images'
import Image from '../reusable/Image/Image'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Description from './components/Description'
import H2 from './components/H2'

type Props = {}

function InnovatingMetaverse({ }: Props) {


    const language = useSelector((state: RootState) => state.language.language);

    return (

        <section className='overflow-hidden  flex md:flex-row pt-20 md:py-40 relative h-full px-4 md:px-10 lg:px-20  bg-black flex-col'>

            <div className="bg-[#BC13FE] absolute -left-20 -top-12 w-40 h-40 rounded-full blur-xl opacity-55"></div>
            <div className="bg-[#BC13FE] absolute -right-20 -top-12 w-40 h-40 rounded-full blur-xl opacity-55"></div>

            <div className="flex-[60%] ">
                <div className="bg-[#BC13FE] absolute -left-20 bottom-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>

                {language === 'en' && <H2 type='type1' className='mb-4  md:mb-4 break-words' text={language === 'en' ? 'Innovating with the Metaverse' : ''} />}
                {language === 'ar' && <H2 type='type1' className='mb-4  md:mb-4 break-words w-full max-w-[450px]' text={language === 'ar' ? 'الابتكار مع' : ''} />}
                {language === 'ar' && <H2 type='type1' className='mb-4  md:mb-4 break-words w-full max-w-[450px]' text={language === 'ar' ? ' Metaverse' : ''} />}
                <div className={`flex flex-col md:flex-row ${language === 'ar' && '!flex-col'}`}>

                    {language === 'en' && <Description
                        className='max-w-[550px] w-full mb-4 sm:mb-4'
                        type='type6'
                        text={language === 'en' ? "The Metaverse represents the next frontier in digital interaction, and at Emiraaz, we are leading the charge into this immersive virtual landscape. We believe that the future of:" : ''}
                    />}

                    {language === 'ar' && <Description
                        className='max-w-[550px] w-full'
                        type='type6'
                        text={language === 'ar' ? "يمثل Metaverse الحدود التالية في التفاعل الرقمي، وفي Emiraaz، نحن نقود الريادة في هذا المشهد الافتراضي الغامر. نحن نؤمن بأن مستقبل:" : ''}
                    />}

                    {language === 'ar' && <Description
                        className='max-w-[550px] w-full '
                        type='type6'
                        text={language === 'ar' ? "تعمل البيئات الافتراضية الجديدة للأعمال على تمكين التعاون العالمي، مما يخلق فرصًا لا حصر لها للشركات للتواصل والنمو." : ''}
                    />}
                    {language === 'ar' && <Description
                        className='max-w-[550px] w-full '
                        type='type6'
                        text={language === 'ar' ? "تعمل مساحات العمل الرقمية على كسر الحواجز الجغرافية، مما يوفر تواصلًا سلسًا وتفاعلًا جماعيًا من أي مكان في العالم." : ''}
                    />}

                    {language === 'ar' && <Description
                        className='max-w-[550px] w-full mb-4 sm:mb-4'
                        type='type6'
                        text={language === 'ar' ? "التفاعل: سيتم إعادة تعريف المشاركات الشخصية والمهنية من خلال التجارب الافتراضية المحسنة، ودمج الحقائق المادية والرقمية" : ''}
                    />}


                </div>

                {language === 'en' ? <ul className='text-white list-disc mt-1 ms-8 md:ms-12'>
                    <li className='md:text-[20px] md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>Business</li>
                    <Description
                        text='New virtual environments enable global collaboration, creating endless opportunities for businesses to connect and grow.'
                        type='type6'
                        className='!font-light mt-1'
                    />

                    <li className='md:text-[20px] mt-1 md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>Collaboration</li>
                    <Description
                        text='Digital workspaces break down geographic barriers, offering seamless communication and team interaction from anywhere in the world.'
                        type='type6'
                        className='!font-light mt-1'

                    />


                    <li className='md:text-[20px] mt-1 md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'>Interaction</li>
                    <Description
                        text='Personal and professional engagements will be redefined through enhanced virtual experiences, merging physical and digital realities.'
                        type='type6'
                        className='!font-light mt-1'

                    />
                </ul> : ''}
            </div>
            <div dir='ltr' className="  md:flex-[40%] w-full relative mt-12 md:mt-0 flex-col-reverse md:flex-row flex items-end md:items-start md:justify-end ">
                <Image alt={language === 'en' ? 'Emiraaz - Where Innovation Meets Excellence Across Industries' : 'أميراز - حيث يلتقي الابتكار بالتميز عبر الصناعات'} src={image2} className='w-[297px] flex-none -mt-24  md:mt-36 mr-0 self-start md:-mr-20 relative rounded-[15px] z-50 md:z-40 overflow-hidden h-[340px] object-cover' />
                <Image alt={language === 'en' ? 'Emiraaz - Where Innovation Meets Excellence Across Industries' : 'أميراز - حيث يلتقي الابتكار بالتميز عبر الصناعات'} src={image3} className='w-[297px] flex-none rounded-[15px]  overflow-hidden h-[340px] z-40 md:z-30 object-cover' />
                <div className="bg-[#BC13FE] absolute -top-10 md:top-12 left-40 md:left-32 w-40 h-40 rounded-full blur-xl opacity-55"></div>

            </div>

        </section>
    )
}

export default InnovatingMetaverse
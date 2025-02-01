import { image8, image9 } from '../../assets/images'
import Image from '../reusable/Image/Image'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function NurturingCultureCreation({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);

    return (
        <>


            <section className="flex px-4  md:px-10 lg:px-20  relative pb-4 justify-center items-center pt-20 sm:pt-60">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <H2
                        type='type1'
                        className='mb-3'
                        text={language === 'en' ? 'Startups: Nurturing a Culture of Creation' : 'الشركات الناشئة: رعاية ثقافة الإبداع'}
                    />

                    <Description
                        type='type3'
                        className='max-w-[1015px] w-full'
                        text={language === 'en' ? 'At the heart of EMIRAAZ lies a startup mentality—an ethos of agility, creativity, and risk-taking. We build every product from scratch, driven by a relentless passion for invention and a deep commitment to turning ideas into reality.' : 'في قلب EMIRAAZ تكمن عقلية الشركات الناشئة، وهي روح السرعة والإبداع والمجازفة. نحن نبني كل منتج من الصفر، مدفوعين بشغف لا هوادة فيه للاختراع والتزام عميق بتحويل الأفكار إلى واقع.'}
                    />
                </div>


            </section>


            <section className='px-4   items-center relative flex-col-reverse md:flex-row flex md:px-10 lg:px-20 pb-0 pt-10 md:pt-28'>


                <Image
                    alt='From Idea to Product'
                    className='max-w-[526px] w-full relative mt-3 md:mt-0 rounded-2xl sm:h-[440px] h-[390px] object-cover'
                    src={image8}
                />


                <div className={`flex-1 ${language === 'ar' ? 'md:pt-20' : ''} md:px-16 px-0 justify-center flex flex-col h-full  items-center md:items-center w-full `}>
                    <H2
                        text={language === 'en' ? 'From Idea to Product' : 'من الفكرة إلى المنتج'}
                        type='type1'
                        className='w-full md:mb-2 text-start'
                    />


                    <Description
                        type='type1'
                        className={`w-full md:text-start text-start py-2`}
                        text={language === 'en' ? "We don’t follow trends—we create our own. Every product we launch originates from an internal idea, tested and refined through rigorous development processes, making sure it stands out in the market." : 'نحن لا نتبع الاتجاهات، بل نصنع اتجاهاتنا الخاصة. كل منتج نطلقه ينبع من فكرة داخلية، ويتم اختباره وتحسينه من خلال عمليات تطوير صارمة، والتأكد من تميزه في السوق.'}
                    />



                </div>
            </section>



            <section className='px-4   items-center relative flex-col md:flex-row flex md:px-10 lg:px-20 pb-0 pt-10 md:pt-28'>

                <div className={`flex-1 ${language === 'ar' ? 'md:pt-20' : ''} md:pe-16 px-0 justify-center flex flex-col h-full  items-center md:items-center w-full `}>
                    <H2
                        text={language === 'en' ? 'Startup Culture' : 'ثقافة الشركات الناشئة'}
                        type='type1'
                        className='w-full md:mb-2 text-start'
                    />


                    <Description
                        type='type1'
                        className={`w-full md:text-start text-start py-2`}
                        text={language === 'en' ? "Our innovation hub operates like a startup within our company. This allows us to think big and move fast, ensuring that new ideas are quickly developed, tested, and brought to market with the same energy and speed as any top-tier startup. Innovation-Driven Growth: We actively support and invest in new ideas within EMIRAAZ, allowing us to develop groundbreaking products and technologies that disrupt markets and redefine expectations." : 'يعمل مركز الابتكار لدينا مثل شركة ناشئة داخل شركتنا. وهذا يسمح لنا بالتفكير الكبير والتحرك بسرعة، مما يضمن تطوير الأفكار الجديدة واختبارها وطرحها في السوق بنفس الطاقة والسرعة التي تتمتع بها أي شركة ناشئة من الدرجة الأولى. النمو القائم على الابتكار: نحن ندعم ونستثمر بنشاط في الأفكار الجديدة داخل EMIRAAZ، مما يسمح لنا بتطوير منتجات وتقنيات رائدة تعمل على إحداث تغييرات جذرية في الأسواق وإعادة تعريف التوقعات.'}
                    />



                </div>


                <Image
                    alt='Startup Culture'
                    className='max-w-[526px] w-full relative mt-3 md:mt-0 rounded-2xl sm:h-[440px] h-[390px] object-cover'
                    src={image9}
                />
            </section>
        </>

    )
}

export default NurturingCultureCreation
import { aboutImage2 } from '../../assets/images'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import Image from './components/Image'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function VisionReality({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className='px-4 md:mt-40 mt-16 md:px-10 lg:px-20 w-full h-[700px] '>
            <div className="relative w-full h-full rounded-[20px]">
                <Image
                    alt={language === 'en' ? 'Our Journey: From Vision to Reality' : 'رحلتنا: من الرؤية إلى الواقع'}
                    className='w-full h-full rounded-[20px] brightness-75 object-cover '
                    src={aboutImage2}
                />
                <div className="px-4  md:px-24 md:py-16 flex flex-col h-full  items-start justify-center md:justify-center w-full absolute left-0 top-0 z-30">
                    <H2
                        text={language === 'en' ? 'Our Journey: From Vision to Reality' : 'رحلتنا: من الرؤية إلى الواقع'}
                        type='type6'
                        className='max-w-[500px] md:text-start w-full text-center'
                    />

                    <Description
                        type='type1'
                        className=' w-full text-center md:text-start max-w-[923px] py-2'
                        text={language === 'en' ? "Emiraaz was born out of a singular vision: to create a conglomerate that would lead across industries, shaping the future of business, technology, and innovation. Since our inception, we’ve grown into a multifaceted organization, excelling in Technology, Real Estate, Investment, and more. With a commitment to excellence, we have continuously evolved, pushing boundaries and setting new standards in every sector we operate in. Our journey has been fueled by a deep belief in collaboration, innovation, and the pursuit of creating long-lasting value for our clients, partners, and communities." : 'ولدت "إميراز" من رؤية واحدة: إنشاء تكتل من شأنه أن يقود مختلف الصناعات، ويشكل مستقبل الأعمال والتكنولوجيا والابتكار. منذ بدايتنا، تطورنا لنصبح مؤسسة متعددة الأوجه، ونتميز في مجالات التكنولوجيا والعقارات والاستثمار والمزيد. مع الالتزام بالتميز، قمنا بالتطور المستمر، ودفعنا الحدود ووضع معايير جديدة في كل قطاع نعمل فيه. لقد كانت رحلتنا مدفوعة بإيمان عميق بالتعاون والابتكار والسعي لخلق قيمة طويلة الأمد لعملائنا. والشركاء والمجتمعات.'}
                    />

                    <Description
                        type='type1'
                        className=' w-full text-center md:text-start max-w-[923px] py-2'
                        text={language === 'en' ? "Emiraaz is not just a company; it is a testament to what can be achieved when ambition meets opportunity. Over the years, we have expanded our footprint globally, leveraging our expertise and resources to make a meaningful impact. As we continue to grow, our story is one of resilience, adaptability, and an unwavering commitment to success." : 'أميراز ليست مجرد شركة؛ إنها شهادة على ما يمكن تحقيقه عندما يلتقي الطموح بالفرصة. على مر السنين، قمنا بتوسيع بصمتنا على مستوى العالم، والاستفادة من خبراتنا ومواردنا لإحداث تأثير ملموس. ومع استمرارنا في النمو، فإن قصتنا هي قصة المرونة والقدرة على التكيف والالتزام الثابت بالنجاح.'}
                    />

                </div>


            </div>
        </section>
    )
}

export default VisionReality
import { aboutImage7 } from '../../assets/images'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import Image from './components/Image'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function CultureIntegrity({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);



    return (
        <section className='px-4 md:mt-20 mt-16 md:px-10 lg:px-20 w-full h-[700px] '>
            <div className="relative w-full h-full rounded-[20px]">
                <Image
                    alt={language === 'en' ? ' A Culture of Integrity, Innovation, and Collaboration' : 'الحلول السحابية:'}
                    className='w-full h-full rounded-[20px] brightness-50 object-cover '
                    src={aboutImage7}
                />
                <div className="px-4  md:px-24 md:py-16 flex flex-col h-full  items-start justify-center md:justify-center w-full absolute left-0 top-0 z-30">

                    <Description
                        className=' w-full text-center md:text-start'
                        type='type1'
                        text={language === 'en' ? "Culture & Values" : 'عن المؤسس'}
                    />

                    <H2
                        text={language === 'en' ? ' A Culture of Integrity, Innovation, and Collaboration' : 'الحلول السحابية:'}
                        type='type6'
                        className='max-w-[900px] md:text-start w-full text-center'
                    />


                    <Description
                        type='type1'
                        className=' w-full text-center md:text-start py-2'
                        text={language === 'en' ? "At Emiraaz, our culture is built on a foundation of integrity, innovation, and collaboration. We believe that the strength of our company lies in the diversity of our people and the shared values that unite us. Our commitment to fostering an inclusive and supportive environment enables our teams to thrive, bringing their best selves to work every day." : 'تعتمد جميع منصاتنا على السحابة، وتوفر قابلية التوسع والأمان والوصول في الوقت الفعلي لعملائنا ومستخدمينا. التطبيقات التي تدعم شبكات الجيل الخامس: نحن نستعد للمستقبل باستخدام تقنية الجيل الخامس، مما يسمح باتصال أسرع وأكثر موثوقية عبر جميع منصاتنا، بدءًا من العقارات وحتى المنتجات المبتكرة الأخرى. الابتكار المستدام: في EMIRAAZ، نجمع بين التكنولوجيا والاستدامة، ونقوم بتطوير منتجات صديقة للبيئة تقلل من التأثير البيئي مع توفير وظائف من الدرجة الأولى.'}
                    />

                    <Description
                        type='type1'
                        className=' w-full text-center md:text-start py-2'
                        text={language === 'en' ? "We hold ourselves to the highest ethical standards, ensuring that every decision we make reflects our core principles of transparency, responsibility, and respect. At the same time, we encourage a culture of innovation, where new ideas are welcomed, and bold thinking is rewarded. Collaboration is key to our success, both internally and with our partners, as we work together to achieve common goals and drive meaningful progress." : 'تعتمد جميع منصاتنا على السحابة، وتوفر قابلية التوسع والأمان والوصول في الوقت الفعلي لعملائنا ومستخدمينا. التطبيقات التي تدعم شبكات الجيل الخامس: نحن نستعد للمستقبل باستخدام تقنية الجيل الخامس، مما يسمح باتصال أسرع وأكثر موثوقية عبر جميع منصاتنا، بدءًا من العقارات وحتى المنتجات المبتكرة الأخرى. الابتكار المستدام: في EMIRAAZ، نجمع بين التكنولوجيا والاستدامة، ونقوم بتطوير منتجات صديقة للبيئة تقلل من التأثير البيئي مع توفير وظائف من الدرجة الأولى.'}
                    />



                </div>


            </div>
        </section>
    )
}

export default CultureIntegrity
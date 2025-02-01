import { image16 } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function OurVisionFuture({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className="mt-20 relative w-full h-[700px]">

            <Image
                alt={language === 'en' ? 'Technology. Real Estate. Invention.' : 'تكنولوجيا, العقارات, اختراع '}
                className='w-full brightness-50 h-full object-cover'
                src={image16}
            />

            <div className=" px-4  md:px-10 lg:px-20 flex flex-col justify-center z-30 absolute top-0 left-0 w-full h-full">
                <div className="border border-white pt-16 px-8 md:px-12 pb-12 w-fit">

                    {language === 'en' && <H2
                        type='type1'
                        className='mb-3'
                        text={language === 'en' ? 'Our Vision for the Future' : ''}

                    />}
                    {language === 'ar' &&
                        <H2
                            type='type1'
                            className='mb-3'
                            text={language === 'ar' ? 'رؤيتنا للمستقبل' : ''}

                        />
                    }

                    <Description
                        type='type4'
                        className='max-w-[742px] w-full text-start py-2'
                        text={language === 'en' ? "Emiraaz believes that technology is the key to shaping a better tomorrow. Our mission is to continue exploring groundbreaking advancements, integrating them into our business strategies, and enabling a seamless transition into the future. By embracing technology, we aim to lead industries, elevate experiences, and create lasting impact in a constantly evolving digital landscape." : 'يعتقد أميراز أن التكنولوجيا هي المفتاح لتشكيل غد أفضل. مهمتنا هي مواصلة استكشاف التطورات الرائدة، ودمجها في استراتيجيات أعمالنا، وتمكين الانتقال السلس إلى المستقبل. ومن خلال تبني التكنولوجيا، نهدف إلى قيادة الصناعات ورفع مستوى الخبرات وخلق تأثير دائم في مشهد رقمي يتطور باستمرار.'}
                    />


                </div>
            </div>
        </section>
    )
}

export default OurVisionFuture
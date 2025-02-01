import { emirazzTechnologyLeadingWith } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import Description from './components/Description'
import H2 from './components/H2'
import H3 from './components/H3'
import ArrowIconButton from './components/ArrowIconButton'

type Props = {}

function EmiraazTechnologyInnovation({ }: Props) {

    const language = useSelector((state: RootState) => state?.language?.language);

    return (
        <section dir='ltr' className='px-4 md:my-20 md:mt-40 mt-12 md:px-10 lg:px-20 w-full h-[600px]'>
            <div className="relative w-full h-full">
                <Image
                    alt={language === 'en' ? 'Explore the World of Art at Emiraaz' : 'شركة أميراز للتكنولوجيا الرائدة في الابتكار'}
                    className='w-full h-full brightness-90 object-cover rounded-[20px]'
                    src={emirazzTechnologyLeadingWith}
                />
                <div className="md:px-16 px-4 justify-center flex flex-col h-full  items-center md:items-start justify-enter w-full absolute left-0 top-0 z-30">
                    <H2
                        text={language === 'en' ? 'Emiraaz Technology Leading with Innovation' : 'شركة أميراز للتكنولوجيا الرائدة في الابتكار'}
                        type='type11'
                        className='max-w-[519px] w-full text-center md:text-start'
                    />

                    <H3
                        className='py-2 text-center !text-white md:text-black'
                        text={language === 'en' ? 'Always Ahead in the New Tech Landscape' : 'دائما في المقدمة في المشهد التكنولوجي الجديد'}
                        type='type1'
                    />

                    <Description
                        type='type6'
                        className='max-w-[450px] w-full md:text-start text-center py-2'
                        text={language === 'en' ? "At Emiraaz, we are constantly advancing with the latest technology. From metaverse integration to AI and blockchain, our commitment to innovation helps us stay at the forefront of the digital age. Discover how we utilize cutting-edge solutions to transform industries and drive progress." : 'في أميراز، نحن نتقدم باستمرار بأحدث التقنيات. من التكامل Metaverse إلى الذكاء الاصطناعي و blockchain، يساعدنا التزامنا بالابتكار على البقاء في طليعة العصر الرقمي. اكتشف كيف نستخدم الحلول المتطورة لتحويل الصناعات ودفع عجلة التقدم.'}
                    />


                    <div className="flex w-ful justify-center md:justify-start ">

                        <div className="md:flex hidden">
                            <ArrowIconButton
                                className='md:!text-black'
                                black
                                link='/'
                                text={language === 'en' ? 'Know More' : 'يتعلم أكثر'}
                                type='type2'
                            />
                        </div>


                        <div className="md:hidden block">
                            <ArrowIconButton
                                className='md:!text-black'
                                link='/'
                                text={language === 'en' ? 'Know More' : 'يتعلم أكثر'}
                                type='type2'
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default EmiraazTechnologyInnovation
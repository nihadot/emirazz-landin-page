import { getStarted } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import H2 from './components/H2'
import Description from './components/Description'
import H3 from './components/Button'
import ArrowIconButton from './components/ArrowIconButton'

type Props = {}

function StartedToday({ }: Props) {


    const language = useSelector((state: RootState) => state.language.language);


    return (
        <section className='px-4 md:mt-20 mt-12 md:px-10 lg:px-20 w-full h-[600px]'>
            <div className="relative w-full h-full">
                <Image
                    alt={language === 'en' ? 'Get Started Today' : ''}
                    className='w-full h-full brightness-50 object-cover rounded-[20px]'
                    src={getStarted}
                />
                <div className="px-4 md:px-20 flex flex-col h-full  items-start justify-center w-full absolute left-0 top-0 z-30">
                    <H3
                        className='py-2 text-start'
                        text={language === 'en' ? 'Scale up by Emiraaz' : 'قم بالارتقاء بواسطة Emiraaz'}
                        type='type2'
                    />
                    <H2
                        text={language === 'en' ? 'Get Started Today' : 'ابدأ اليوم'}
                        type='type6'
                        className='md:max-w-[792px] w-full text-start'
                    />


                    <Description
                        type='type6'
                        className='max-w-[700px] w-full text-start py-2'
                        text={language === 'en' ? "Are you interested in accelerating your business’s growth? Reach out to Emiraaz to learn more about how Scale Up can provide you with the resources, support, and connections to transform your business. Contact us today and unlock your potential with Scale Up by Emiraaz." : 'هل أنت مهتم بتسريع نمو عملك؟ تواصل مع Emiraaz لمعرفة المزيد حول كيفية قيام Scale Up بتزويدك بالموارد والدعم والاتصالات لتحويل أعمالك. اتصل بنا اليوم وأطلق العنان لإمكاناتك مع برنامج توسيع نطاق طيران الإمارات.'}
                    />


                    <div className="flex w-full justify- ">

                        <ArrowIconButton
                            className=''
                            link='/'
                            text={language === 'en' ? 'Learn More' : 'يتعلم أكثر'}
                            type='type2'
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default StartedToday
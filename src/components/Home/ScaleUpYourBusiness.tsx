import { scaleupYOurBusinessWith } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import H2 from './components/H2'
import H3 from './components/H3'
import Description from './components/Description'
import ArrowIconButton from './components/ArrowIconButton'

type Props = {}

function ScaleUpYourBusiness({ }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);

    return (
        <section className='px-4 md:mt-40 mt-12 md:px-10 lg:px-20 w-full h-[600px]'>
            <div className="relative w-full h-full">
                <Image
                    alt={language === 'en' ? 'Scale Up Your Business with Emiraaz' : 'قم بتوسيع نطاق أعمالك مع Emiraaz'}
                    className='w-full h-full brightness-50 object-cover rounded-[20px]'
                    src={scaleupYOurBusinessWith}
                />
                <div className="px-4 flex flex-col h-full  items-center justify-center w-full absolute left-0 top-0 z-30">
                    <H2
                        text={ language === 'en' ? 'Scale Up Your Business with Emiraaz' : 'أطلق العنان لفرص النمو المصممة خصيصًا لك'}
                        type='type6'
                        className='md:max-w-[792px] w-full text-center'
                    />

                    <H3
                        className='py-2 text-center'
                        text={ language === 'en' ? 'Unlock Growth Opportunities Tailored to You' : 'أطلق العنان لفرص النمو المصممة خصيصًا لك'}
                        type='type3'
                    />

                    <Description
                        type='type4'
                        className='max-w-[700px] w-full text-center py-2'
                        text={ language === 'en' ? "Our 'Scale Up by Emiraaz' program is designed to help businesses expand and innovate. Whether you're looking to grow your operations, enter new markets, or enhance your technological capabilities, we have the tools and expertise to make it happen." : 'تم تصميم برنامجنا "توسيع نطاق طيران الإمارات" لمساعدة الشركات على التوسع والابتكار. سواء كنت تتطلع إلى تنمية عملياتك، أو دخول أسواق جديدة، أو تعزيز قدراتك التكنولوجية، فلدينا الأدوات والخبرة اللازمة لتحقيق ذلك.'}
                    />


<div className="flex w-full justify-center ">

<ArrowIconButton
    className=''

    link='/'
    text={language === 'en' ? 'Know More' : 'يتعلم أكثر'}
    type='type2'
/>
</div>
                </div>

            </div>
        </section>
    )
}

export default ScaleUpYourBusiness
import Image from '../reusable/Image/Image'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { bundlessPotential } from '../../assets/images'
import Description from "./components/Description"
import H2 from "./components/H2"

type Props = {}

function BundlessPotensial({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className="md:py-20 py-20 flex justify-end flex-col-reverse md:flex-row  md:items-center relative w-full">

            <Image
                alt={language === 'en' ? 'Boundless Potential' : 'إمكانيات لا حدود لها'}
                className='w-full max-w-[780px] rounded-[15px] mt-3 md:mt-0 h-[400px] object-cover'
                src={bundlessPotential}
            />

            <div className="bg-black justify-end mb-3 md:mb-0 pe-4 flex-col md:justify-center flex max-w-[650px] w-full md:h-[290px] md:absolute left-0 md:left-10 rounded-[15px]">
                <H2
                    text={language === 'en' ? 'Boundless Potential' : 'إمكانيات لا حدود لها'}
                    type='type5'
                    className='pb-2'
                />

                <Description
                    type='type2'
                    className='max-w-[700px] w-full text-start py-0'
                    text={language === 'en' ? 'The ocean’s depths are limitless, just like the potential for new ideas and innovations. For us, the deep sea represents infinite possibilities—a reminder that no matter how much we’ve achieved, there’s always more to discover. We are committed to leading the way in developing forward-thinking solutions that not only meet today’s needs but also shape the future.' :
                    'إن أعماق المحيط لا حدود لها، تمامًا مثل الإمكانات المتاحة للأفكار والابتكارات الجديدة. بالنسبة لنا، يمثل البحر العميق إمكانيات لا حصر لها - وهو تذكير بأنه بغض النظر عن مقدار ما حققناه، فهناك دائمًا المزيد لاكتشافه. نحن ملتزمون بقيادة الطريق في تطوير حلول مستقبلية لا تلبي احتياجات اليوم فحسب، بل وتشكل المستقبل أيضًا.'}
                        />
            </div>
        </section>

    )
}

export default BundlessPotensial
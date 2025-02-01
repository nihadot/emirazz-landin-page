import { businessImage4 } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import Description from './components/Description'
import H2 from './components/H2'

type Props = {}

function Investment({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <section className="mt-6 md:mt-40 flex justify-end flex-col-reverse md:flex-row items-center relative w-full">

    <Image
        alt={language === 'en' ? 'Technology. Real Estate. Invention.' : 'تكنولوجيا, العقارات, اختراع '}
        className='w-full max-w-[780px] mt-4 md:mt-0 rounded-[15px] h-[400px] object-cover'
        src={businessImage4}
    />

    <div className="bg-black pe-4 flex-col justify-center flex max-w-[650px] w-full h-[290px] md:absolute left-0 md:left-0 rounded-[15px]">
        <H2
            text={language === 'en' ? 'Investment' : 'استثمار'}
            type='type1'
            className='pb-4'
        />

        <Description
            type='type2'
            className=''
            text={language === 'en' ? 'Our investment strategy revolves around empowering businesses with the resources they need to scale. Emiraaz provides funding and strategic guidance to high-potential ventures, helping them navigate challenges and capitalize on opportunities. We see every investment as a partnership where we contribute to long-term success, ensuring businesses can achieve their goals and unlock new milestones of growth.' : 'تدور إستراتيجيتنا الاستثمارية حول تمكين الشركات بالموارد التي تحتاجها للتوسع. توفر "إميراز" التمويل والتوجيه الاستراتيجي للمشاريع ذات الإمكانات العالية، مما يساعدها على التغلب على التحديات والاستفادة من الفرص. نحن ننظر إلى كل استثمار باعتباره شراكة نساهم فيها في تحقيق النجاح على المدى الطويل، مما يضمن قدرة الشركات على تحقيق أهدافها وفتح معالم جديدة للنمو.'}
        />
    </div>
</section>
  )
}

export default Investment
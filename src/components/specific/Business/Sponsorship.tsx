import Image from '../../reusable/Image/Image'
import { businessImage3 } from '../../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function Sponsorship({}: Props) {

    const language = useSelector((state: RootState) => state.language.language);

  return (
    <section className="mt-0 md:mt-0 flex  flex-col md:flex-row items-center relative w-full">


<div className="bg-black  px-0 md:px-12 flex-col justify-center flex max-w-[600px] w-full h-[290px] md:absolute right-0 md:right-10 rounded-[15px]">
        <H2
            text={language === 'en' ? 'Sponsorship' : 'الرعاية'}
            type='type1'
            className='pb-4'
        />

        <Description
            type='type2'
            className=''
            text={language === 'en' ? 'At Emiraaz, we understand the power of sponsorship in driving impact and visibility. We align ourselves with initiatives that inspire innovation and foster meaningful contributions to industries and communities. By supporting key projects, events, and ideas, we not only expand our influence but also create lasting value for the partners we sponsor, all while reflecting our commitment to growth and positive change.' : 'في أميراز، نحن ندرك قوة الرعاية في إحداث التأثير والرؤية. نحن ننضم إلى المبادرات التي تلهم الابتكار وتعزز المساهمات الهادفة في الصناعات والمجتمعات. ومن خلال دعم المشاريع والفعاليات والأفكار الرئيسية، فإننا لا نقوم بتوسيع تأثيرنا فحسب، بل نخلق أيضًا قيمة دائمة للشركاء الذين نرعاهم، وكل ذلك يعكس التزامنا بالنمو والتغيير الإيجابي.'}
        />
    </div>
    <Image
        alt={language === 'en' ? 'Technology. Real Estate. Invention.' : 'تكنولوجيا, العقارات, اختراع '}
        className='w-full max-w-[780px] rounded-[15px] h-[400px] object-cover'
        src={businessImage3}
    />

   
</section>
  )
}

export default Sponsorship
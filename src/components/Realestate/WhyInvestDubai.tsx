import { yourGateWayToDubai } from '../../assets/images'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import Image from './components/Image'
import Description from './components/Description'
import H2 from './components/H2'

type Props = {}

function WhyInvestDubai({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  

return (
    <section className='px-4 md:mt20 mt-24 md:px-10 lg:px-20 w-full h-[700px]'>
    <div className="relative w-full h-full">
      <Image
        alt={language === 'en' ? 'Why Invest in Dubai?' : 'قم بتوسيع نطاق أعمالك مع Emiraaz'}
        className='w-full h-full brightness-50 object-cover rounded-[20px]'
        src={yourGateWayToDubai}
      />
      <div className="px-4 md:px-36 flex flex-col h-full  items-start justify-center w-full absolute left-0 top-0 z-30">
        <H2
        text={language === 'en' ? 'Why Invest in Dubai?' : 'تمكين الرؤى من خلال الرعاية'}
type='type2'
/>

        <Description 
          type='type2'
          className='max-w-[800px] w-full text-start py-2'
          text={language === 'en' ? "Dubai’s real estate market stands out as a top destination for investors worldwide. With no property taxes and attractive rental yields, it offers strong potential for generating steady income. The city’s growing economy, coupled with its status as a global business hub, continues to drive demand for high-quality properties. Dubai boasts world-class infrastructure, luxury developments, and a thriving tourism sector, all of which contribute to property value appreciation. Whether you're looking for a short-term return or a long-term capital investment, Dubai’s real estate market provides unmatched opportunities for growth and profitability." : 'في إمارة، نؤمن بقوة التعاون في دعم النمو والابتكار. تم تصميم مبادرات الرعاية الخاصة بنا لدعم المشاريع والأحداث والأفراد الرؤيويين الذين يتماشون مع قيمنا الأساسية. من خلال الشراكة معنا، يمكنك الوصول إلى شبكة من الموارد والخبرات والتعرض التي تدفع النجاح المتبادل. سواء كان ذلك ثقافيًا أو تكنولوجيًا أو موجهًا نحو العمل، فإن التزامنا برعاية التميز يضمن أننا معًا نحقق تأثيرًا بعيد المدى وأهدافًا مشتركة.'}
        />


      </div>

    </div>
  </section>
)
}

export default WhyInvestDubai
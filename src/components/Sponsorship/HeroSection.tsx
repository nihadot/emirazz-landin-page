import { empoweringVision } from '../../assets/images'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import Image from './components/Image'
import Description from './components/Description'
import H1 from './components/H1'

type Props = {}

function HeroSection({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <section className='px-4 md:mt-40 mt-24 md:px-10 lg:px-20 w-full h-[700px]'>
      <div className="relative w-full h-full">
        <Image
          alt={language === 'en' ? 'Scale Up Your Business with Emiraaz' : 'قم بتوسيع نطاق أعمالك مع Emiraaz'}
          className='w-full h-full brightness-50 object-cover rounded-[20px]'
          src={empoweringVision}
        />
        <div className="px-4 md:px-36 flex flex-col h-full  items-start justify-center w-full absolute left-0 top-0 z-30">
          <H1
            children={language === 'en' ? 'Scale Up Your Business with Emiraaz' : 'تمكين الرؤى من خلال الرعاية'}
          />

          <Description
            type='type1'
            className='max-w-[800px] w-full text-start py-2'
            text={language === 'en' ? "At Emiraaz, we believe in the power of collaboration to fuel growth and innovation. Our sponsorship initiatives are designed to support visionary projects, events, and individuals that align with our core values. By partnering with us, you gain access to a network of resources, expertise, and exposure that drives mutual success. Whether it’s cultural, technological, or business-oriented, our commitment to sponsoring excellence ensures that together, we achieve far-reaching impact and shared goals." : 'في إمارة، نؤمن بقوة التعاون في دعم النمو والابتكار. تم تصميم مبادرات الرعاية الخاصة بنا لدعم المشاريع والأحداث والأفراد الرؤيويين الذين يتماشون مع قيمنا الأساسية. من خلال الشراكة معنا، يمكنك الوصول إلى شبكة من الموارد والخبرات والتعرض التي تدفع النجاح المتبادل. سواء كان ذلك ثقافيًا أو تكنولوجيًا أو موجهًا نحو العمل، فإن التزامنا برعاية التميز يضمن أننا معًا نحقق تأثيرًا بعيد المدى وأهدافًا مشتركة.'}
          />


        </div>

      </div>
    </section>
  )
}

export default HeroSection
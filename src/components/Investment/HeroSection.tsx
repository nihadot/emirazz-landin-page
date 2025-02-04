import { empoweringInnovation } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import H1 from './components/H1'
import Description from './components/Description'

type Props = {}

function HeroSection({}: Props) {
  
  const language = useSelector((state: RootState) => state.language.language);


  return (
    <section className='px-4 md:mt20 mt-24 md:px-10 lg:px-20 w-full h-[700px]'>
    <div className="relative w-full h-full">
      <Image
        alt={language === 'en' ? 'Empowering Innovation Through Strategic Investments' : 'قم بتوسيع نطاق أعمالك مع Emiraaz'}
        className='w-full h-full brightness-50 object-cover rounded-[20px]'
        src={empoweringInnovation}
      />
      <div className="px-4 md:px-36 flex flex-col h-full  items-start justify-center w-full absolute left-0 top-0 z-30">
        <H1
          children={language === 'en' ? 'Empowering Innovation Through Strategic Investments' : 'تمكين الرؤى من خلال الرعاية'}
        />

        <Description
          type='type1'
          className='max-w-[800px] w-full text-start py-2'
          text={language === 'en' ? "At Emiraaz, we believe in investing in visionary ideas that drive change and create lasting impact. Our investment strategy focuses on identifying and supporting groundbreaking projects, startups, and businesses with the potential to transform industries. By providing capital, resources, and expert guidance, we help fuel growth and innovation. Whether you're an emerging entrepreneur or an established company, Emiraaz is committed to fostering partnerships that deliver mutual success and pave the way for a brighter future." : 'في إمارة، نؤمن بقوة التعاون في دعم النمو والابتكار. تم تصميم مبادرات الرعاية الخاصة بنا لدعم المشاريع والأحداث والأفراد الرؤيويين الذين يتماشون مع قيمنا الأساسية. من خلال الشراكة معنا، يمكنك الوصول إلى شبكة من الموارد والخبرات والتعرض التي تدفع النجاح المتبادل. سواء كان ذلك ثقافيًا أو تكنولوجيًا أو موجهًا نحو العمل، فإن التزامنا برعاية التميز يضمن أننا معًا نحقق تأثيرًا بعيد المدى وأهدافًا مشتركة.'}
        />


      </div>

    </div>
  </section>
  )
}

export default HeroSection
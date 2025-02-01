import {  fuelingTomorrowsInnovations } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import Description from './components/Description'
import H1 from './components/H1'

type Props = {}

function HeroSection({}: Props) {
  const language = useSelector((state: RootState) => state.language.language);



  return (
    <section className='px-4 md:mt-40 mt-24 md:px-10 lg:px-20 w-full h-[700px]'>
    <div className="relative w-full h-full">
      <Image
        alt={language === 'en' ? 'Fueling Tomorrow’s Innovations' : 'تعزيز ابتكارات الغد'}
        className='w-full h-full brightness-50 object-cover rounded-[20px]'
        src={fuelingTomorrowsInnovations}
      />
      <div className="px-4 md:px-36 flex flex-col h-full  items-start justify-center w-full absolute left-0 top-0 z-30">
        <H1
          children={language === 'en' ? 'Fueling Tomorrow’s Innovations' : 'تمكين الرؤى من خلال الرعاية'}
        />

        <Description
          type='type1'
          className='max-w-[800px] w-full text-start py-2'
          text={language === 'en' ? "At Emiraaz, we are dedicated to empowering startups that redefine industries and create meaningful change. Our Startup division provides entrepreneurs with the resources, mentorship, and financial support necessary to turn groundbreaking ideas into successful ventures. We believe in nurturing talent and fostering creativity, offering a platform where bold innovations can thrive. Whether you're just starting out or looking to scale your business, Emiraaz is your partner in building a future filled with possibilities." : 'في Emiraaz، نحن ملتزمون بتمكين الشركات الناشئة التي تعيد تعريف الصناعات وتخلق تغييرًا هادفًا. يوفر قسم الشركات الناشئة لدينا لرواد الأعمال الموارد والإرشاد والدعم المالي اللازم لتحويل الأفكار الرائدة إلى مشاريع ناجحة. نؤمن برعاية المواهب وتشجيع الإبداع، وتقديم منصة حيث يمكن للابتكارات الجريئة أن تزدهر. سواء كنت قد بدأت للتو أو تتطلع إلى توسيع نطاق عملك، فإن Emiraaz هي شريكك في بناء مستقبل مليء بالإمكانيات.'}
        />


      </div>

    </div>
  </section>
  )
}

export default HeroSection
import {  innovationFromAbyss } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function Innovation({ }: Props) {
  const language = useSelector((state: RootState) => state.language.language);


  return (
    <section className='px-4 pt-20 md:pt-0 md:py-0 md:my-20 mt-0 md:px-10 lg:px-20 w-full h-[650px]'>
    <div className="relative w-full h-full">
      <Image
        alt={language === 'en' ? 'Innovation from the Abyss' : 'الابتكار من الهاوية'}
        className='w-full h-full  brightness-50 object-cover rounded-[20px]'
        src={innovationFromAbyss}
      />
      <div className="px-4 md:px-20 flex flex-col h-full  items-start justify-center w-full absolute left-0 top-0 z-30">
        <H2
          type='type3'
          className=' text-center  '
          text={language === 'en' ? 'Innovation from the Abyss' : 'الابتكار من الهاوية'}
        />

        <Description
              type='type2'
            className='max-w-[700px] w-full text-start py-2'
          text={language === 'en' ? "n the depths of the ocean, life thrives in the most unexpected ways, adapting and evolving to survive in an extreme environment. At EMIRAAZ, we draw inspiration from this adaptability. We believe that true innovation comes from being bold enough to dive deeper—finding solutions where others see challenges. The deep sea’s secrets push us to constantly rethink how we can evolve and bring something new to the market, creating value for our clients and partners." :
'في أعماق المحيط، تزدهر الحياة بطرق غير متوقعة، حيث تتكيف وتتطور من أجل البقاء في بيئة قاسية. في EMIRAAZ، نستمد الإلهام من هذه القدرة على التكيف. نعتقد أن الابتكار الحقيقي يأتي من الجرأة الكافية للغوص في أعماق البحار - وإيجاد حلول حيث يرى الآخرون تحديات. تدفعنا أسرار أعماق البحار إلى إعادة التفكير باستمرار في كيفية تطورنا وإحضار شيء جديد إلى السوق، وخلق قيمة لعملائنا وشركائنا.'            }
        />
      </div>

    </div>
  </section>

  )
}

export default Innovation
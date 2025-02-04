import { theDepthOfExploration } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function DepthExploration({ }: Props) {
  const language = useSelector((state: RootState) => state.language.language);


  return (

    <section className='px-4 md:mb-28 mt-0 md:px-10 lg:px-20 w-full h-[650px]'>
      <div className="relative w-full h-full">
        <Image
          alt={language === 'en' ? 'The Depth of Exploration' : 'عمق الاستكشاف'}
          className='w-full h-full  brightness-50 object-cover rounded-[20px]'
          src={theDepthOfExploration}
        />
        <div className="px-4 md:px-20 flex flex-col h-full  items-start justify-center w-full absolute left-0 top-0 z-30">
          <H2
            type='type3'
            className=' text-center  '
            text={language === 'en' ? 'The Depth of Exploration' : 'عمق الاستكشاف'}
          />

          <Description
            type='type2'
            className='max-w-[700px] w-full text-start py-2'
            text={language === 'en' ? "The deep sea is a place of discovery. Only a fraction of it has been explored, yet it contains a world of unseen ecosystems, rare species, and untold stories. Like the explorers of the deep, we are driven to explore beyond the familiar, bringing fresh ideas and revolutionary solutions to the surface. This relentless curiosity guides our approach to every project we take on, whether in real estate, short-term rentals, or other ventures." :
'إن أعماق البحار مكان للاستكشاف. فلم يتم استكشاف سوى جزء ضئيل منها، ولكنها تحتوي على عالم من النظم البيئية غير المرئية، والأنواع النادرة، والقصص التي لم تُروَ بعد. ومثل مستكشفي الأعماق، فإننا مدفوعون لاستكشاف ما هو أبعد من المألوف، ونجلب أفكارًا جديدة وحلولًا ثورية إلى السطح. وهذا الفضول الدؤوب يوجه نهجنا في كل مشروع نخوضه، سواء في مجال العقارات أو الإيجارات قصيرة الأجل أو غيرها من المشاريع.'              }
          />
        </div>

      </div>
    </section>

  )
}

export default DepthExploration
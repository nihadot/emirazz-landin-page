import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function ArtAtEmiraaz({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <section className='px-4 relative pb-40  gap-4 md:px-10 lg:px-20 pt-32 justify-center items-center flex flex-col'>

      <div className="bg-[#FE133D] absolute top-0 -left-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>
      <div className="bg-[#13B7FE] -right-10 absolute top-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>



      <H2
        type='type1'
        className='mb-3'
        text={language === 'en' ? 'Art at Emiraaz' : 'الفن في اميراز'}
      />

      <H2
        type='type3'
        className='mb-3 max-w-[800px] text-center'
        text={language === 'en' ? 'Where Creativity, Innovation, and Cultural Excellence Come Together' : 'حيث يجتمع الإبداع والابتكار والتميز الثقافي معًا'}
      />


      <Description
        type='type2'
        className='max-w-[800px] text-center w-full'
        text={language === 'en' ? 'At Emiraaz, art transcends expression; it drives our commitment to innovation, culture, and progress. We believe art shapes perceptions and connects people, bridging our business goals with creativity. This synergy helps us explore new frontiers while honoring cultural heritage, making creativity central to our mission.' :
          'في أميراز، يتجاوز الفن التعبير؛ إنه يدفع التزامنا بالابتكار والثقافة والتقدم. نحن نؤمن بأن الفن يشكل التصورات ويربط الناس، ويربط أهداف أعمالنا بالإبداع. ويساعدنا هذا التآزر على استكشاف حدود جديدة مع تكريم التراث الثقافي، مما يجعل الإبداع محوريًا في مهمتنا.'}
      />

      <div className="bg-[#A513FE] absolute bottom-0 -left-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>
      <div className="bg-[#FE133D] -right-10 absolute bottom-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>

    </section>
  )
}

export default ArtAtEmiraaz
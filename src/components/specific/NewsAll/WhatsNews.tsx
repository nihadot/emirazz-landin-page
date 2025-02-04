import { useSelector } from 'react-redux'
import Description from './components/Description'
import H2 from './components/H2'
import { RootState } from '../../../store'


type Props = {}



function WhatsNews({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);


  return (
    <section className="flex flex-col relative justify-center items-center pt-4 px-4 md:px-10 bg-black lg:px-20">
      {/*  */}

  

<H2
                    type='type2'
                    className='mb-3'
                    text={language === 'en' ? 'What’s New @ Emiraaz' : 'ما الجديد في اميراز'}
                />

                <Description
                    type='type1'
                    className='max-w-[1015px] pb-4 md:pb-0 w-full'
                    text={language === 'en' ? 'Stay updated with the latest from Emiraaz. Discover our groundbreaking projects, key partnerships, and technological advancements, offering insights into our growth and impact.' : 'تابع آخر أخبارنا من إميراز. اكتشف مشاريعنا الرائدة وشراكاتنا الرئيسية والتطورات التكنولوجية التي نقدمها، والتي تقدم رؤى حول نمونا وتأثيرنا.'}
                />




    </section>
  )
}

export default WhatsNews
import Image from '../../reusable/Image/Image'
import { ourApproachToInvention } from '../../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function OurApproach({ }: Props) {
  const language = useSelector((state: RootState) => state.language.language);

  return (
    <section className='overflow-hidden flex md:flex-row mt-20 md:mt-32 relative h-full px-4 md:px-10 lg:px-20 bg-black flex-col'>


      <div className="md:flex-[60%] pe-8">

        {language === 'en' && <H2 type='type1' className='mb-4 max-w-[600px] md:mb-4 break-words' text={language === 'en' ? 'Our Approach to Invention' : ''} />}
        {language === 'ar' && <H2 type='type1' className='mb-4  md:mb-4 break-words w-full max-w-[450px]' text={language === 'ar' ? 'نهجنا في الاختراع' : ''} />}


        <Description
          text={language === 'en' ? 'At Emiraaz, we believe that true innovation comes from thinking beyond the present and envisioning the future. We nurture creativity and encourage bold ideas across all our sectors, ensuring that every aspect of our business reflects our inventive spirit. This proactive approach to invention has led us to:'

            : 'في شركة امارات، نؤمن بأن الابتكار الحقيقي يأتي من التفكير خارج الحاضر وتصور المستقبل. نحن نرعى الإبداع ونشجع الأفكار الجريئة في جميع قطاعاتنا، ونضمن أن كل جانب من جوانب أعمالنا يعكس روحنا الإبداعية. وقد قادنا هذا النهج الاستباقي للاختراع إلى:'
          }
          type='type6'
          className='!font-light mt-1'
        />


        {language === 'en' ? <ul className='text-white list-disc mt-1 mx-8 md:ms-12'>
          <li >

            <Description
              text='Technology-Driven Solutions: We integrate cutting-edge technologies into our operations, ensuring that our innovations meet modern demands and drive future growth.'
              type='type6'
              className='!font-light mt-1'
            />
          </li>
          <li >

            <Description
              text='Collaborative Research & Development: Our R&D teams work closely with industry experts and partners to bring new ideas to life, ensuring that our inventions have a real-world impact.'
              type='type6'
              className='!font-light mt-1'
            />
          </li>
          <li >

            <Description
              text='Sustainable Innovation: We prioritize sustainable practices in our inventive efforts, ensuring that our innovations not only drive progress but also contribute to a better, greener future.'
              type='type6'
              className='!font-light mt-1'
            />
          </li>

        </ul> : ''}


        {language === 'ar' ? <>

          <Description
            text={language === 'ar' ? 'حلول تعتمد على التكنولوجيا: ندمج التقنيات المتطورة في عملياتنا، مما يضمن أن ابتكاراتنا تلبي المتطلبات الحديثة وتدفع النمو المستقبلي.'

              : ''}
            type='type6'
            className='!font-light my-2'
          />

          <Description
            text={language === 'ar' ? 'البحث والتطوير التعاوني: تعمل فرق البحث والتطوير لدينا بشكل وثيق مع خبراء الصناعة والشركاء لإضفاء الحيوية على الأفكار الجديدة، وضمان أن يكون لاختراعاتنا تأثير حقيقي في العالم الحقيقي.'

              : ''}
            type='type6'
            className='!font-light my-2'
          />


          <Description
            text={language === 'ar' ? 'الابتكار المستدام: نعطي الأولوية للممارسات المستدامة في جهودنا الإبداعية، مما يضمن أن ابتكاراتنا لا تدفع التقدم فحسب، بل تساهم أيضًا في مستقبل أفضل وأكثر اخضرارًا.'

              : ""}
            type='type6'
            className='!font-light my-2'
          />
        </> : ''}
      </div>
      <div dir='ltr' className=" flex-col md:flex-[40%] w-full  md:h-full md:pt-0  mt-8 relative md:mt-0  flex ">
        <div className="md:flex-1 w-full flex relative  ">
          <Image alt={language === 'en' ? 'Our Approach to Invention' : 'نهجنا في الاختراع'} src={ourApproachToInvention} className='w-full   rounded-[15px] h-[400px] md:h-[500px] object-cover' />
        </div>

      </div>
    </section>
  )
}

export default OurApproach
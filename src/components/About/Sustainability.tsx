import Image from '../reusable/Image/Image'
import { aboutImage8 } from '../../assets/images'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import Description from './components/Description'
import H2 from './components/H2'


type Props = {}

function Sustainability({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <section className='  flex md:flex-row pt-20 md:pt-40 gap-8 relative h-full px-4 md:px-10 lg:px-20  bg-black flex-col'>


      <Image alt={language === 'en' ? 'Committed to a Sustainable Future' : 'عن المؤسس'} src={aboutImage8} className='max-w-[480px] w-full  rounded-[15px] sm:h-[480px] h-[390px] object-cover' />


      <div className="flex-1 items-center justify-center flex flex-col">

        <Description
          className=' w-full '
          type='type1'
          text={language === 'en' ? "Sustainability" : 'عن المؤسس'}
        />

        <H2 type='type1' className='mb-4 w-full md:mb-4 break-words' text={language === 'en' ? 'Committed to a Sustainable Future' : 'القيادة الحكيمة منذ البداية'} />

        <div className={`flex flex-col md:flex-col ${language === 'ar' && '!flex-col'}`}>

          {language === 'en' && <Description
            className=' w-full mb-4 sm:mb-4'
            type='type1'
            text={language === 'en' ? "Sustainability is not just a goal at Emiraaz—it’s a responsibility. We are committed to integrating sustainable practices across all facets of our business, from technology and real estate to procurement and investment. Our approach to sustainability is holistic, ensuring that we balance economic growth with environmental stewardship and social responsibility.Whether through green building practices in our real estate projects or the use of innovative technologies that reduce our carbon footprint, Emiraaz is dedicated to contributing to a more sustainable future. We actively seek out partnerships and projects that align with our sustainability goals, understanding that the choices we make today will have a lasting impact on future generations. By prioritizing sustainability, we ensure that our growth is not only profitable but also responsible." : ''}
          />}


          {language === 'ar' && <Description
            className='w-full pb-6'
            type='type1'
            text={language === 'ar' ? "لا يمكن فصل قصة أميراز عن رؤية مؤسسنا، الذي وضع شغفه بالابتكار والتميز الأساس للشركة. منذ البداية، رأى مؤسسنا إمكانية الجمع بين الصناعات المتنوعة تحت مظلة واحدة، والاستفادة من أوجه التآزر بين التكنولوجيا والعقارات والاختراعات لإنشاء شركة يمكنها تشكيل المستقبل." : ''}
          />}

          {language === 'ar' && <Description
            className='w-full '
            type='type1'
            text={language === 'ar' ? "بفضل الفهم العميق للأسواق العالمية والالتزام بتطوير الصناعات من خلال الابتكار، كان مؤسسنا هو القوة الدافعة وراء نمو ونجاح أميراز. إن قدرتهم على توقع الاتجاهات وإقامة شراكات قوية وإلهام ثقافة التميز كان لها دور فعال في تحويل   من شركة ناشئة إلى لاعب عالمي. واليوم، تستمر رؤيتهم في توجيهنا بينما نستكشف فرصًا جديدة ونوسع تأثيرنا في جميع أنحاء العالم." : ''}
          />}



        </div>



      </div>



    </section>


  )
}

export default Sustainability
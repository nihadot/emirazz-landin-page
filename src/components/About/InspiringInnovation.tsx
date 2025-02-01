import { aboutImage6 } from "../../assets/images"
import Image from "../reusable/Image/Image"
import { RootState } from "../../store"
import { useSelector } from "react-redux"
import Description from "./components/Description"
import H2 from "./components/H2"

type Props = {}

function InspiringInnovation({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);


  return (
    <>


      <section className='  flex md:flex-row pt-0 md:py-20 gap-8 relative h-full px-4 md:px-10 lg:px-20  bg-black flex-col'>

        <div className="flex-1 items-center justify-center flex flex-col">

          <Description
            className=' w-full '
            type='type4'
            text={language === 'en' ? "Inspire" : 'عن المؤسس'}
          />

          <H2 type='type1' className='mb-4 w-full md:mb-4 break-words' text={language === 'en' ? 'Inspiring Innovation and Excellence' : 'القيادة الحكيمة منذ البداية'} />

          <div className={`flex flex-col md:flex-col ${language === 'ar' && '!flex-col'}`}>

            {language === 'en' && <Description
              className=' w-full mb-4 sm:mb-4'
              type='type1'
              text={language === 'en' ? "At the core of Emiraaz’s success is a visionary leadership team that drives our strategic direction and ensures we remain at the forefront of innovation. Our leaders bring decades of experience across multiple industries, guiding the company with insight, determination, and a relentless focus on delivering exceptional results. With a clear vision for the future, the leadership team at Emiraaz prioritizes sustainable growth, ethical business practices, and the creation of long-term value. Their hands-on approach ensures that every decision we make is aligned with our core principles of integrity, collaboration, and innovation. Each member of our leadership team contributes a unique perspective, fostering a culture of creativity and forward-thinking that allows Emiraaz to navigate complex markets with confidence." : ''}
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

        <Image alt={language === 'en' ? 'About Founder' : 'عن المؤسس'} src={aboutImage6} className='max-w-[480px] w-full  rounded-[15px] sm:h-[480px] h-[390px] object-cover' />


      </section>
    </>

  )
}

export default InspiringInnovation
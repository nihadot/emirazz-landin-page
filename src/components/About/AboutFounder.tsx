import { RootState } from "../../store"
import {   user } from "../../assets/images"
import Image from "../reusable/Image/Image"
import { useSelector } from "react-redux"
import Description from "./components/Description"
import H2 from "./components/H2"

type Props = {}

function AboutFounder({ }: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <>

      <section className='  flex md:flex-row pt-00 md:py-20 gap-8 relative h-full px-4 md:px-10 lg:px-20  bg-black flex-col'>


      <div className="hidden md:block">

<Image alt={language === 'en' ? 'About Founder' : 'عن المؤسس'} src={user} className='sm:w-[374px] border w-full rounded-2xl h-[420px] p-28 object-contain' />
</div>

        <div className="flex-1 items-center justify-center flex flex-col">

          <Description
            className=' w-full mb-4 sm:mb-4'
            type='type1'
            text={language === 'en' ? "About Founder" : 'عن المؤسس'}
          />

          <H2 type='type1' className='mb-4 w-full md:mb-4 break-words' text={language === 'en' ? 'Visionary Leadership from the Start' : 'القيادة الحكيمة منذ البداية'} />

          <div className={`flex flex-col md:flex-col ${language === 'ar' && '!flex-col'}`}>

            {language === 'en' && <Description
              className=' w-full mb-4 sm:mb-4'
              type='type1'
              text={language === 'en' ? "The story of Emiraaz is inseparable from the vision of our founder, whose passion for innovation and excellence laid the foundation for the company. From the outset, our founder saw the potential in combining diverse industries under one umbrella, leveraging synergies between technology, real estate, and invention to create a company that could shape the future." : ''}
            />}


            {language === 'en' && <Description
              className=' w-full mb-4 sm:mb-4'
              type='type1'
              text={language === 'en' ? "With a deep understanding of global markets and a commitment to advancing industries through innovation, our founder has been the driving force behind Emiraaz’s growth and success. Their ability to anticipate trends, cultivate strong partnerships, and inspire a culture of excellence has been instrumental in transforming Emiraaz from a startup to a global player. Today, their vision continues to guide us as we explore new opportunities and expand our impact across the world." : ''}
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


       <div className="block md:hidden">

<Image alt={language === 'en' ? 'About Founder' : 'عن المؤسس'} src={user} className='sm:w-[374px] border w-full rounded-2xl h-[300px] p-20 object-contain' />
       </div>


      </section>

    </>

  )
}

export default AboutFounder
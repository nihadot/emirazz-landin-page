import Image from '../../reusable/Image/Image'
import { founder } from '../../../assets/images'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import Description from './components/Description'
import H2 from './components/H2'

type Props = {}

function AboutFounder({ }: Props) {
  const language = useSelector((state: RootState) => state.language.language);


  return (

    <>
      <section className='mt-28 md:mt-28 flex md:flex-row gap-8 relative h-full px-4 md:px-10 lg:px-20  bg-black flex-col'>


        <div className="hidden md:block">

          <Image alt={language === 'en' ? 'About Founder' : 'عن المؤسس'} src={founder} className='w-[374px] md:mt-16 rounded-[15px] h-[400px] md:h-[460px] object-cover' />
          <div className="py-4">

            <H2
              text={ language === 'en' ?  'Ashiq Emiraaz' : 'عاشق إميراز'}
              type='type6'
              className='text-center'
            />

            <H2
              text={ language === 'en' ? 'Founder & CEO' : 'المؤسس والرئيس التنفيذي'}
              type='type2'
              className='text-center'
            />
          </div>
        </div>

        <div className="flex-1 flex-col items-center justify-center flex">

          <Description
            className=' w-full mb-4 sm:mb-4'
            type='type1'
            text={language === 'en' ? "About Founder" : 'About مؤسس'}
          />

          <H2 type='type1' className='mb-4 w-full text-start md:mb-4  self-start max-w-[600px]' text={language === 'en' ? 'Visionary Leadership from the Start' : 'القيادة الرؤيوية منذ البداية'} />

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
              text={language === 'ar' ? "إن قصة إمارة لا تنفصل عن رؤية مؤسسنا، الذي كان شغفه بالإبداع والتميز هو الأساس الذي قامت عليه الشركة. فمنذ البداية، رأى مؤسسنا الإمكانات الكامنة في الجمع بين الصناعات المتنوعة تحت مظلة واحدة، والاستفادة من التآزر بين التكنولوجيا والعقارات والاختراع لإنشاء شركة قادرة على تشكيل المستقبل." : ''}
            />}

            {language === 'ar' && <Description
              className='w-full '
              type='type1'
              text={language === 'ar' ? "وبفضل فهمه العميق للأسواق العالمية والتزامه بتطوير الصناعات من خلال الإبداع، كان مؤسسنا هو القوة الدافعة وراء نمو إمارة ونجاحها. وكانت قدرته على توقع الاتجاهات وتنمية الشراكات القوية وإلهام ثقافة التميز عاملاً أساسياً في تحويل إمارة من شركة ناشئة إلى لاعب عالمي. واليوم، تواصل رؤيتهم توجيهنا بينما نستكشف فرصًا جديدة ونوسع نطاق تأثيرنا في جميع أنحاء العالم." : ''}
            />}



          </div>



        </div>


        <div className="block md:hidden">

          <Image alt={language === 'en' ? 'About Founder' : 'عن المؤسس'} src={founder} className='w-[374px]  rounded-[15px] h-[400px] md:h-[460px] object-cover' />
          <div className="py-4">

<H2
  text={'Ashiq Emiraaz'}
  type='type6'
  className='text-center'
/>

<H2
  text={'Founder & CEO'}
  type='type2'
  className='text-center'
/>
</div>
        </div>


      </section>
    </>


  )
}

export default AboutFounder
import Image from '../reusable/Image/Image'
import { aboutImage9 } from '../../assets/images'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import Description from './components/Description'
import H2 from './components/H2'

type Props = {}

function StrategicProcurement({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  
  return (
    <section className='  flex md:flex-row pt-20 md:pt-40 gap-8 relative h-full px-4 md:px-10 lg:px-20  bg-black flex-col'>


    
    
            <div className="flex-1 items-center justify-center flex flex-col">

              <Description
                className=' w-full '
                type='type1'
                text={language === 'en' ? "Procurement" : 'عن المؤسس'}
              />
    
              <H2 type='type1' className='mb-4 w-full md:mb-4 break-words' text={language === 'en' ? 'Strategic Procurement for Lasting Value' : 'القيادة الحكيمة منذ البداية'} />
    
              <div className={`flex flex-col md:flex-col ${language === 'ar' && '!flex-col'}`}>
    
                {language === 'en' && <Description
                  className=' w-full mb-4 sm:mb-4'
                  type='type1'
                  text={language === 'en' ? "At Emiraaz, procurement is more than just acquiring goods and services—it’s about building relationships that deliver long-term value. Our strategic procurement practices focus on quality, sustainability, and cost-efficiency, ensuring that we partner with suppliers who share our commitment to excellence and innovation. We take a proactive approach to procurement, leveraging our industry expertise and global network to secure the best products, services, and solutions for our business. From cutting-edge technology to sustainable materials, our procurement strategies are designed to support our operations while contributing to our broader goals of innovation, sustainability, and growth. At Emiraaz, procurement is an integral part of our mission to create value for our clients, partners, and communities." : ''}
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
            <Image alt={language === 'en' ? 'Committed to a Sustainable Future' : 'عن المؤسس'} src={aboutImage9} className='max-w-[480px] w-full  rounded-[15px] sm:h-[480px] h-[390px] object-cover' />
    
    
    
          </section>
  )
}

export default StrategicProcurement
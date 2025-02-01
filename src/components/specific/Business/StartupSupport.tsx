import {  businessImage5 } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import Description from './components/Description'
import H2 from './components/H2'

type Props = {}

function StartupSupport({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className="mt-0 md:mt-40 flex  flex-col md:flex-row items-center relative w-full">


        <div className="bg-black px-0 mt-2 md:px-12 flex-col justify-center flex max-w-[600px] w-full h-[290px] md:absolute right-0 md:right-10 rounded-[15px]">
                <H2
                    text={language === 'en' ? 'Startup Support' : 'دعم بدء التشغيل'}
                    type='type1'
                    className='pb-4'
                />
        
                <Description
                    type='type2'
                    className=''
                    text={language === 'en' ? 'At Emiraaz, we understand the power of sponsorship in driving impact and visibility. We align ourselves with initiatives that inspire innovation and foster meaningful contributions to industries and communities. By supporting key projects, events, and ideas, we not only expand our influence but also create lasting value for the partners we sponsor, all while reflecting our commitment to growth and positive change.' : 'أميراز شغوف بدعم الجيل القادم من المبتكرين. من خلال برنامجنا الشامل لدعم الشركات الناشئة، نقوم بتزويد الشركات في مرحلة مبكرة بالإرشاد والموارد والتمويل لمساعدتها على تحقيق رؤيتها. نحن نؤمن بأن تمكين الشركات الناشئة هو المفتاح لتعزيز الابتكار في الصناعة، ونحن ملتزمون بمساعدة المشاريع الجديدة على النمو والنجاح وإحداث تأثير مفيد في قطاعاتها.'}
                />
            </div>
            <Image
                alt={language === 'en' ? 'Emiraaz is passionate about supporting the next generation of innovators. Through our comprehensive startup support program, we provide early-stage businesses with mentorship, resources, and funding to help them realize their vision. We believe that empowering startups is key to fostering industry innovation, and we are committed to helping new ventures grow, succeed, and make a meaningful impact in their sectors.' : 'تكنولوجيا, العقارات, اختراع '}
                className='w-full max-w-[780px] rounded-[15px] h-[400px] object-cover'
                src={businessImage5}
            />
        
           
        </section>
    )
}

export default StartupSupport
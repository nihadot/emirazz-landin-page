import { businessImage2 } from '../../../assets/images'
import Image from '../../reusable/Image/Image'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function Partnership({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className="mt-20 md:mt-40 flex justify-end flex-col-reverse md:flex-row items-center relative w-full">

            <Image
                alt={language === 'en' ? 'Technology. Real Estate. Invention.' : 'تكنولوجيا, العقارات, اختراع '}
                className='w-full max-w-[780px] rounded-[15px] mt-3 md:mt-0 h-[400px] object-cover'
                src={businessImage2}
            />

            <div className="bg-black pe-4 flex-col justify-center flex max-w-[650px] w-full h-[290px] md:absolute left-0 md:left-0 rounded-[15px]">
                <H2
                    text={language === 'en' ? 'Partnership' : 'شراكة'}
                    type='type1'
                    className='pb-4'
                />

                <Description
                    type='type2'
                    className=''
                    text={language === 'en' ? 'Our approach to partnerships is built on trust, mutual benefit, and long-term success. Emiraaz works closely with organizations across industries to build strategic alliances that enhance capabilities, expand market reach, and unlock new opportunities. We believe that strong partnerships form the foundation for sustainable growth and shared success, and we actively seek collaborations that align with our values and vision.' : 'يعتمد نهجنا في الشراكة على الثقة والمنفعة المتبادلة والنجاح على المدى الطويل. تعمل أميراز بشكل وثيق مع المؤسسات عبر الصناعات لبناء تحالفات استراتيجية تعزز القدرات وتوسع الوصول إلى السوق وتفتح فرصًا جديدة. نحن نؤمن بأن الشراكات القوية تشكل الأساس للنمو المستدام والنجاح المشترك، ونسعى بنشاط إلى التعاون الذي يتوافق مع قيمنا ورؤيتنا.'}
                />
            </div>
        </section>
    )
}

export default Partnership
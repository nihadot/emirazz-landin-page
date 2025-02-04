import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { diveDeepUs } from '../../assets/images'
import Image from './components/Image'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function DeepWithUs({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);



    return (
        <section className='px-4 pt-20 md:pt-0 md:py-0 md:my-20 mt-0 md:px-10 lg:px-20 w-full h-[650px]'>
            <div className="relative w-full h-full">
                <Image
                    alt={language === 'en' ? 'Dive Deep with Us' : 'انغمس معنا في أعماقنا'}
                    className='w-full h-full  brightness-50 object-cover rounded-[20px]'
                    src={diveDeepUs}
                />
                <div className="px-4 md:px-20 flex flex-col h-full  items-start justify-center w-full absolute left-0 top-0 z-30">
                    <H2
                        type='type3'
                        className=' text-center  '
                        text={language === 'en' ? 'Dive Deep with Us' : 'انغمس معنا في أعماقنا'}
                    />

                    <Description
                        type='type2'
                        className='max-w-[700px] w-full text-start py-2'
                        text={language === 'en' ? "Join us on this journey of discovery and innovation, where we delve beneath the surface to bring you the extraordinary. At EMIRAAZ, we’re not just following trends; we’re creating new depths in every venture we pursue." :
'انضم إلينا في رحلة الاكتشاف والابتكار، حيث نتعمق في أعماق الأشياء لنقدم لك ما هو غير عادي. في EMIRAAZ، لا نتبع الاتجاهات فحسب؛ بل نبتكر أعماقًا جديدة في كل مشروع نسعى إليه.'                        }
                    />
                </div>

            </div>
        </section>
    )
}

export default DeepWithUs
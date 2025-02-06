import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import * as images from "../../assets"
import H1 from './components/H1'
type Props = {}
type Language = "en" | "ar";

function TechnologyRealEstateInvention({ }: Props) {

    const language = useSelector((state: RootState) => state?.language?.language) as Language;

    return (
        <section className="mt-20 relative w-full h-[calc(100vh-80px)] md:h-[700px]">

            <Image
                alt={language === 'en' ? `Technology. Real Estate. Invention.` : 'تكنولوجيا, العقارات, اختراع '}
                className='w-full h-full object-cover'
                src={images.technology_real_estateWebP}
            />

            <div className=" px-4  md:px-10 lg:px-20 flex justify-start items-center z-30 absolute top-0 left-0 w-full h-full">
                {language === 'en' && <H1>Technology. Real Estate. Invention.</H1>}
                {language === 'ar' &&
                    <H1>
                        تكنولوجيا
                        <br /> العقارات
                        <br /> اختراع
                    </H1>
                }
            </div>
        </section>
    )
}

export default TechnologyRealEstateInvention
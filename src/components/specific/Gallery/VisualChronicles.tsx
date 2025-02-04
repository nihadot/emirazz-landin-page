import Image from '../../reusable/Image/Image'
import { visualChronicles1, visualChronicles2, visualChronicles3 } from '../../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import H1 from './components/H1'
import AllGalleries from './AllGalleries'

type Props = {}

function VisualChronicles({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);


    return (
        <section className='pt-10 ms:pt-0 overflow-hidden pb-60 bg-black w-full   relative  max-w-full'>

            <div className="bg-[#13FEB7] absolute -right-20 -top-20 md:top-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>
            <div className="bg-[#13B7FE] absolute -left-20  -bottom-10 md:bottom-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>
            <div className="bg-[#A513FE] absolute -left-20 -top-20  md:top-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>
            <div className="bg-[#FE133D] absolute -right-20 -bottom-10  m:bottom-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>


            <div className="flex flex-col pb-3 md:pb-0 justify-center items-center text-center">
                <H1>
                    {language === 'en' ? 'Visual Chronicles' : 'سجلات مرئية'}
                </H1>

                <h1 className='font-normal italic md:text-[60px] text-[33px] leading-[38.51px] text-white font-Komorebi md:leading-[70.02px]'>

                    {language === 'en' ? 'The Emiraaz Journey in Pictures' : 'رحلة الإميراز بالصور'}
                </h1>
            </div>


            <div className="flex justify-center mt-0 relative z-10">

                <Image
                    alt=''
                    className='w-[140px] xs-xs:w-[200px] lg:w-[345px] xs-md:w-[210px] xs-xs:h-[230px] h-[100px] mt-4 ms-2 rotate-[-6deg] lg:h-[327px] object-cover rounded-[15px]'
                    src={visualChronicles1}
                />
                <Image
                    alt=''
                    className='w-[100px] xs-xs:w-[200px] lg:w-[345px] xs-md:w-[260px] h-[114px] xs-xs:h-[230px] relative z-20 lg:h-[368px] object-cover rounded-[15px]'
                    src={visualChronicles2}
                />

                <Image
                    alt=''
                    className='w-[100px] xs-xs:w-[200px] lg:w-[345px] xs-md:w-[210px] mt-4 xs-xs:h-[230px]  h-[100px] -rotate-[-6deg] lg:h-[327px] object-cover rounded-[15px]'
                    src={visualChronicles3}
                />
            </div>


<div className="w-full h-full overflow-hidden">

            <h1 className='flex-none text-nowrap font-normal italic md:text-[60px] text-[33px] leading-[38.51px] text-white font-Komorebi md:leading-[70.02px]'>

{language === 'en' ? 'Gallery • Gallery •Gallery •Gallery •Gallery •Gallery •Gallery •Gallery •Gallery •' : 
'المعرض • المعرض •المعرض •المعرض •المعرض •المعرض •المعرض •المعرض •المعرض •المعرض •'
}
</h1>
</div>

            <br />
            <AllGalleries/>

        </section>
    )
}

export default VisualChronicles
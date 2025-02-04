import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { visualChronicles1, visualChronicles2, visualChronicles3 } from '../../assets/images';
import H2 from './components/H2';
import Image from './components/Image';
import ArrowIconButton from './components/ArrowIconButton';

type Props = {}

function VisualChronicles({ }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);

    return (
        <section className='pt-32 bg-black w-full h-[500px] md:h-full relative overflow-hidden max-w-full'>
       
       <div className="bg-[#13FEB7] absolute -right-20 top-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#13B7FE] absolute -left-20 bottom-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#A513FE] absolute -left-20 top-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#FE133D] absolute -right-20 bottom-10 w-40 h-40 rounded-full blur-xl opacity-55"></div>


            <H2
                type='type10'

                className='text-center !font-normal text-[26px] md:text-[50px] !max-w-[100%]'
                text={language === 'en' ? 'Visual Chronicles' : 'سجلات مرئية'}
            />
            <H2
                className='text-center'
                type='type2'
                text={language === 'en' ? 'The Emiraaz Journey in Pictures' : 'رحلة الإميراز بالصور'}
            />

            <div className="flex justify-center mt-0 relative z-10">

                <Image
                    alt=''
                    className='w-[100px] xs-xs:w-[200px] lg:w-[345px] xs-md:w-[210px] xs-xs:h-[230px] h-[100px] mt-4 ms-2 rotate-[-6deg] lg:h-[327px] object-cover rounded-[15px]'
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

            <div className="flex justify-center items-center py-3 sm:py-8">

                <div className="flex w-full justify-center ">

                    <ArrowIconButton
                        className=''

                        link='/gallery'
                        text={language === 'en' ? 'View All' : 'عرض الكل'}
                        type='type2'
                    />
                </div>
            </div>

        </section>
    )
}

export default VisualChronicles
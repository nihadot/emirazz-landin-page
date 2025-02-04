import { art, noOpacityLogo } from '../../../assets/images'
import { RootState } from '../../../store';
import Image from '../../reusable/Image/Image'
import { useSelector } from 'react-redux'

type Props = {}

function SectionOne({ }: Props) {


    const language = useSelector((state: RootState) => state.language.language);


    return (
        <section className='px-4  md:mt20 mt-24 md:px-10 lg:px-20 w-full h-[700px]'>



            <div className="relative w-full h-full">

                <div className="bg-[#13FEB7] absolute top-0 -left-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#A513FE] -right-20 absolute top-0 w-40 h-40 rounded-full blur-xl opacity-55"></div>

                <Image
                    alt={language === 'en' ? 'Empowering Innovation Through Strategic Investments' : 'قم بتوسيع نطاق أعمالك مع Emiraaz'}
                    className='w-full h-full brightness-50 object-cover rounded-[20px]'
                    src={art}
                />
                <div className="px-4  flex items-center md:px-10 lg:px-20 absolute top-0 left-0 flex-col justify-center w-full h-full">
                    <Image
                        className='w-60 h-60 object-contain'
                        src={noOpacityLogo}
                        alt=''
                    />
                </div>


            </div>
        </section>
    )
}

export default SectionOne
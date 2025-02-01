import { emirazzRealEstateTransformin } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import ArrowIconButton from './components/ArrowIconButton'
import H3 from './components/H3'
import H2 from './components/H2'
import Description from './components/Description'


function EmiraazRealEstate() {

    const language = useSelector((state: RootState) => state?.language?.language);

    return (

        <section className='px-4 flex-col-reverse md:flex-row flex md:px-10 lg:px-20 py-20'>
            <div className="flex-1">
                <Image
                    alt='Emiraaz Real Estate – Transforming Spaces for a Better Tomorrow'
                    className='w-full rounded-2xl sm:h-[440px] h-[392px] object-cover'
                    src={emirazzRealEstateTransformin}
                />
            </div>

            <div className="flex-1 md:px-16 px-0 justify-center flex flex-col h-full  items-center md:items-start justify-enter w-full ">
                <H2
                    text={language === 'en' ? 'Emiraaz Real Estate – Transforming Spaces for a Better Tomorrow' : 'اميراز العقارية – تحويل المساحات من أجل غد أفضل'}
                    type='type9'
                    className='w-full md:mb-2 text-start'
                />

                <H3
                    className='py-2  md:mb-2 text-start'
                    text={language === 'en' ? 'Building Communities, Redefining Living and Working' : 'بناء المجتمعات، إعادة تعريف الحياة والعمل'}
                    type='type5'
                />

                <Description
                    type='type1'
                    className='w-full md:text-start text-start py-2'
                    text={language === 'en' ? "At Emiraaz, our real estate division is focused on creating innovative, sustainable, and future-ready spaces. From luxury residential developments to cutting-edge commercial and industrial properties, we provide world-class real estate solutions that meet the evolving needs of businesses and communities." : 'في أميراز، يركز قسم العقارات لدينا على إنشاء مساحات مبتكرة ومستدامة وجاهزة للمستقبل. بدءًا من التطويرات السكنية الفاخرة وحتى العقارات التجارية والصناعية المتطورة، فإننا نقدم حلولًا عقارية عالمية المستوى تلبي الاحتياجات المتطورة للشركات والمجتمعات.'}
                />


                <div className="flex w-full pb-4 justify-start ">

                    <ArrowIconButton
                        link='/'
                        text={language === 'en' ? 'Learn More' : 'يتعلم أكثر'}
                        type='type2'
                    />
                </div>

            </div>
        </section>
    )
}

export default EmiraazRealEstate
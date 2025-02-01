import { exploreTheWorld } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import H2 from './components/H2'
import Description from './components/Description'
import ArrowIconButton from './components/ArrowIconButton'

type Props = {}

function ExploreWorldOfArt({ }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);

    return (
        <section className='px-4 md:mt-40 mt-16 md:px-10 lg:px-20 w-full h-[600px] '>
            <div style={{boxShadow: 'rgba(255, 0, 0, 0.41) 0px 0px 62.4px 1px'}} className="relative w-full h-full rounded-[20px]">
                <Image
                    alt={language === 'en' ? 'Explore the World of Art at Emiraaz' : 'اكتشف عالم الفن في أميراز'}
                    className='w-full h-full rounded-[20px] brightness-75 object-cover '
                    src={exploreTheWorld}
                />
                <div className="px-4 md:px-14 md:py-16 flex flex-col h-full  items-start justify-center md:justify-start w-full absolute left-0 top-0 z-30">
                    <H2
                        text={language === 'en' ? 'Explore the World of Art at Emiraaz' : 'اكتشف عالم الفن في أميراز'}
                        type='type6'
                        className='max-w-[800px] md:text-start w-full text-center'
                    />

                    <Description
                        type='type4'
                        className='max-w-[650px] w-full text-center md:text-start py-2'
                        text={language === 'en' ? "At Emiraaz, we celebrate art in all its forms. From innovative installations to thought-provoking exhibitions, our Art division is committed to pushing creative boundaries and showcasing talent from around the world. Discover the latest in artistic expression and explore how art transforms our world." : 'في أميراز، نحتفل بالفن بجميع أشكاله. من المنشآت المبتكرة إلى المعارض المثيرة للتفكير، يلتزم قسم الفنون لدينا بدفع الحدود الإبداعية وعرض المواهب من جميع أنحاء العالم. اكتشف أحدث أشكال التعبير الفني واستكشف كيف يغير الفن عالمنا.'}
                    />

                    <div className="flex  justify-center w-full md:justify-end md:flex-1 md:items-end">

                        <ArrowIconButton
                            className=''

                            link='/'
                            text={language === 'en' ? 'Know More' : 'يتعلم أكثر'}
                            type='type2'
                        />
                    </div>



                </div>


            </div>
        </section>
    )
}

export default ExploreWorldOfArt
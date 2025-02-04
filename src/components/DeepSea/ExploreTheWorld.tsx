import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { ANewFrontier } from '../../assets/images';
import Image from '../reusable/Image/Image';
import H2 from './components/H2';
import Description from './components/Description';


type Props = {}


function ExploreTheWorld({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);

    return (
        <section className="mt-6 relative md:my-20 flex  flex-col md:flex-row items-center w-full">


            <div className="bg-black px-0 md:px-12 flex-col justify-center flex max-w-[600px] w-full md:h-[320px] md:absolute right-0 md:right-10 rounded-[15px]">
                <H2
                    text={language === 'en' ? 'Sponsorship' : 'آفاق جديدة في كل مجال'}
                    type='type5'
                    className='pb-4'
                />

                <Description
                    type='type2'
                    className=''
                    text={language === 'en' ? 'From real estate to short-term rentals and beyond, we take inspiration from the ocean’s endless expanses to redefine industries and bring fresh perspectives. Just as each deep-sea expedition unveils new frontiers, our mission is to continue exploring new markets, technologies, and strategies, always setting a course for unexplored horizons.' : 'من العقارات إلى الإيجارات قصيرة الأجل وما إلى ذلك، نستلهم الإلهام من المساحات اللامتناهية للمحيط لإعادة تعريف الصناعات وتقديم وجهات نظر جديدة. وكما تكشف كل رحلة استكشافية في أعماق البحار عن آفاق جديدة، فإن مهمتنا هي الاستمرار في استكشاف أسواق وتقنيات واستراتيجيات جديدة، وتحديد مسار دائمًا لآفاق غير مستكشفة.'}
                />
            </div>
            <Image
                alt={language === 'en' ? 'Technology. Real Estate. Invention.' : 'آفاق جديدة في كل مجال '}
                className='w-full max-w-[780px] rounded-[15px] mt-4 md:mt-0 h-[400px] object-cover'
                src={ANewFrontier}
            />


        </section>


    )
}

export default ExploreTheWorld
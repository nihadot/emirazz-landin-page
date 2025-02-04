import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import H2 from './components/H2'
import H3 from './components/Button'

type Props = {}

function SectionOne({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);
   


  return (
    <section className="px-4 md:px-10 lg:px-20 pt-0 pb-0 overflow-hidden md:pt-10 md:mb-0  bg-black">

    <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">


<H3
type='type2'
text={language === 'en' ? 'Our Blogs' : 'مدوناتنا'}
/>
        <H2
            type='type2'
            className='mb-3 max-w-[600px]'
            text={language === 'en' ? 'Unveiling Innovation and Industry Trends' : 'الكشف عن اتجاهات الابتكار والصناعة'}
        />

        {/* <Description
            type='type2'
            className='max-w-[1015px] pb-4 md:pb-0 w-full'
            text={language === 'en' ? 'Explore Dubai’s finest properties, from luxurious apartments to spacious villas. Find your perfect home in prime locations today.' : 'اكتشف أرقى العقارات في دبي، بدءًا من الشقق الفاخرة وحتى الفيلات الفسيحة. ابحث عن منزلك المثالي في المواقع الرئيسية اليوم.'}
        /> */}
    </div>





</section>
  )
}

export default SectionOne
import Image from '../reusable/Image/Image'
import { realsEstateAbout } from '../../assets/images'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function AboutUs({}: Props) {

    const language = useSelector((state: RootState) => state.language.language);

  return (
    <section className="mt-20 md:my-20 flex justify-end flex-col-reverse md:flex-row  md:items-center relative w-full">

            <Image
                alt={language === 'en' ? 'Technology. Real Estate. Invention.' : 'تكنولوجيا, العقارات, اختراع '}
                className='w-full max-w-[780px] rounded-[15px] mt-3 md:mt-0 h-[400px] object-cover'
                src={realsEstateAbout}
            />

            <div className="bg-black justify-end mb-3 md:mb-0 pe-4 flex-col md:justify-center flex max-w-[650px] w-full md:h-[290px] md:absolute left-0 md:left-0 rounded-[15px]">
                <H2
                    text={language === 'en' ? '⁠About Us' : '⁠نبذة عنا'}
                    type='type1'
                    className='pb-4'
                />

                <Description
                    type='type2'
                    className=''
                    text={language === 'en' ? 'EMIRAAZ Real Estate is your trusted partner in Dubai’s primary property market. With exclusive access to new developments, we provide a seamless experience for property buyers, investors, and short-term rental seekers. As part of the EMIRAAZ group, we leverage our strong local and international networks to deliver high-quality service and market insights.' : 'إميراز العقارية هي شريكك الموثوق به في سوق العقارات الرئيسي في دبي. ومن خلال الوصول الحصري إلى التطورات الجديدة، فإننا نقدم تجربة سلسة لمشتري العقارات والمستثمرين والباحثين عن الإيجار على المدى القصير. باعتبارنا جزءًا من مجموعة إميراز، فإننا نستفيد من شبكاتنا المحلية والدولية القوية لتقديم خدمات عالية الجودة ورؤى السوق.'}
                />
            </div>
        </section>
  )
}

export default AboutUs
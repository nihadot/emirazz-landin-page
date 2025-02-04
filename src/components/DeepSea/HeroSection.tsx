import { useSelector } from 'react-redux';
import { arabicLogoDeepsea, deepSea, deepSeaIcon, } from '../../assets/images'
import Image from '../reusable/Image/Image'
import { RootState } from '../../store';
type Props = {}

function HeroSection({ }: Props) {

  const language = useSelector((state: RootState) => state?.language?.language);

  return (
    <section className=' md:mt20 mt-24 px-4 md:px-8 w-full h-[600px]'>
      <div className="relative w-full h-full">
        <Image
          alt={'Deep Sea'}
          className='w-full h-full brightness-100 object-cover rounded-[20px]'
          src={deepSea}
        />
        <div className="px-4  flex items-center md:px-10 lg:px-20 absolute top-0 left-0 flex-col justify-center w-full h-full">
          <Image
            className='w-[600px] h-[340px] object-contain'
            src={ language === 'en' ? deepSeaIcon : arabicLogoDeepsea}
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
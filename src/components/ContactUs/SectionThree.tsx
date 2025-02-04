import TextBanner from '../reusable/TextBanner/TextBanner'
import Image from '../reusable/Image/Image'
import { businessImage3 } from '../../assets/images'

type Props = {}

function SectionThree({}: Props) {
  return (
    <div className="sm:pt-40 pt-4 flex items-center flex-col sm:flex-row relative justify-end">

    <div className="sm:absolute relative left-0">
        <TextBanner
        containerClassName='sm:!ps-8'
            heading='Sponsorship'
            paragraph='At Emiraaz, we understand the power of sponsorship in driving impact and visibility. We align ourselves with initiatives that inspire innovation and foster meaningful contributions to industries and communities. By supporting key projects, events, and ideas, we not only expand our influence but also create lasting value for the partners we sponsor, all while reflecting our commitment to growth and positive change..'
        />
    </div>

    <div className="flex justify-end">

        <Image
            src={businessImage3}
            alt='Sponsorship'
            className='w-[780px]  rounded-2xl h-[400px] object-cover'
        />
    </div>
</div>
  )
}

export default SectionThree
import { businessImage2 } from '../../assets/images'
import Image from '../reusable/Image/Image'
import TextBanner from '../reusable/TextBanner/TextBanner'

type Props = {}

function SectionTwo({ }: Props) {


    return (
        <div className="sm:pt-40 pt-10 flex items-center flex-col sm:flex-row relative justify-end">

            <div className="sm:absolute relative left-0">
                <TextBanner
                    heading='Partnership'
                    paragraph=' Our approach to partnerships is built on trust, mutual benefit, and long-term success. Emiraaz works closely with organizations across industries to build strategic alliances that enhance capabilities, expand market reach, and unlock new opportunities. We believe that strong partnerships form the foundation for sustainable growth and shared success, and we actively seek collaborations that align with our values and vision.'
                />
            </div>

            <div className="flex justify-end">

                <Image
                    src={businessImage2}
                    alt='Partnership'
                    className='w-[780px]  rounded-2xl h-[400px] object-cover'
                />
            </div>
        </div>
    )
}

export default SectionTwo
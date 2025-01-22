import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import HomeJSON from "../../../data/home.json"
import Image from '../../reusable/Image/Image';
import { visualChronicles1, visualChronicles2, visualChronicles3 } from '../../../assets/images';
import { IconButton } from '../../reusable/Buttons';
import { rightArrow } from '../../../assets/svg';
import { Link } from 'react-router';
import H3 from '../../reusable/Home/H3';

type Props = {}

function SectionTwelve({ }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);

    return (
        <div className='pt-20 bg-black w-full overflow-hidden max-w-full'>
            <H3
                className='text-center !font-normal text-[26px] md:text-[50px] !max-w-[100%]'
                value={HomeJSON?.section11[language as 'en' | 'ar']?.h3}
            />
            <H3
                className='text-center mt-3 mb-8 italic !text-[30px] md:!text-[60px] !font-normal !font-Komorebi !max-w-[100%]'

                value={HomeJSON?.section11[language as 'en' | 'ar']?.p}
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

<Link to={'/gallery'}>

                <IconButton
                    iconUrl={rightArrow}
                    className='my-4'
                    content={'en' === "en" ? 'View All' : 'عرض المزيد'}
                    
                    />
                    </Link>
            </div>

        </div>
    )
}

export default SectionTwelve
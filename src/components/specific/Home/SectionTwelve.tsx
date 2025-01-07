import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import HomeJSON from "../../../data/home.json"
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree';
import Image from '../../reusable/Image/Image';
import { visualChronicles1, visualChronicles2, visualChronicles3 } from '../../../assets/images';
import { IconButton } from '../../reusable/Buttons';
import { rightArrow } from '../../../assets/svg';
import { Link } from 'react-router';

type Props = {}

function SectionTwelve({ }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);

    return (
        <div className='pt-20 bg-black w-full overflow-hidden max-w-full'>
            <HeadingOne
                className='text-center !max-w-[100%]'
                content={HomeJSON?.section11[language as 'en' | 'ar']?.h3}
            />
            <HeadingThree
                className='text-center !max-w-[100%]'

                content={HomeJSON?.section11[language as 'en' | 'ar']?.p}
            />

            <div className="flex justify-center mt-12 relative z-10">

                <Image
                alt=''
                    className='w-[100px] xs-xs:w-[200px] lg:w-[345px] xs-md:w-[210px] xs-xs:h-[230px] h-[100px] mt-8 ms-2 rotate-6 lg:h-[327px] object-cover rounded-[15px]'
                    src={visualChronicles1}
                />
                <Image
                alt=''
                    className='w-[100px] xs-xs:w-[200px] lg:w-[345px] xs-md:w-[260px] h-[130px] xs-xs:h-[230px] relative z-20 lg:h-[368px] object-cover rounded-[15px]'
                    src={visualChronicles2}
                />

                <Image
                alt=''
                    className='w-[100px] xs-xs:w-[200px] lg:w-[345px] xs-md:w-[210px] mt-8 xs-xs:h-[230px]  h-[100px] -rotate-6 lg:h-[327px] object-cover rounded-[15px]'
                    src={visualChronicles3}
                />
            </div>

            <div className="flex justify-center items-center py-8">

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
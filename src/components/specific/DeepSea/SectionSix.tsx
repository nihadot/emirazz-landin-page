import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import TextBanner from '../../reusable/TextBanner/TextBanner';
import { ANewFrontier, treeThree, treeTwo } from '../../../assets/images';
import Image from '../../reusable/Image/Image';
import deepSea from "../../../data/home.json"


type Props = {}

// deepSea.section1.en.p
// deepSea.section6.en.h1

function SectionSix({}: Props) {
    const language = useSelector((state: RootState) => state.language.language);
  
    return (
        <div className="relative pb-44">

        <div className="bg-black z-30 relative px-4 md:px-10 lg:px-20  w-full py-0">
    
        <div className="sm:pt-40 pt-10 flex items-center flex-col sm:flex-row-reverse relative justify-end">
    
        <div className={`sm:absolute relative right-0 `}>
            <TextBanner
                    containerClassName='!pr-8 ps-8 !max-h-[350px]'
    
                heading={deepSea.section6[language as 'en' | 'ar'].h3}
                paragraph={deepSea.section6[language as 'en' | 'ar'].p}
            />
        </div>
    
        <div className="flex justify-end">
    
            <Image
                src={ANewFrontier}
                alt={deepSea.section6[language as 'en' | 'ar'].h3}
                className='w-[780px]  rounded-2xl h-[400px] object-cover'
            />
        </div>
   
    </div>
    </div>

    <Image
    alt={deepSea.section6[language as 'en' | 'ar'].h3}
        src={treeThree}
        className='w-[280px] brightness-50 h-[500px] absolute -bottom-40 left-10 md:left-24 object-contain'
        />
            <Image
            alt={deepSea.section6[language as 'en' | 'ar'].h3}
        src={treeTwo}
        className='w-[240px] md:block hidden z-40 absolute -right-8 bottom-0 brightness-50 h-[360px] object-contain'
        />
    </div>

    
  )
}

export default SectionSix
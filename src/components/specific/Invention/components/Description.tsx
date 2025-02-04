import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

// Define the type for the `type` prop
type DescriptionType = 'type1' | 'type3' | 'type4' | 'type6';

// Define the Props interface
interface Props {
    text: string;
    type: DescriptionType;
    className?: string;
}

function Description({ text, type, className }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);

    // Function to get class names based on the type
    const getClassNames = (type: DescriptionType): string => {
        switch (type) {
            case 'type1':
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} font-normal md:text-[16px]  md:leading-[22.24px] text-[#CECECE] text-[15px] leading-[20.85px]`;
            case 'type4':
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[18px] md:leading-[25.02px] text-[#FFFFFF] font-normal text-[15px] leading-[20.85px]`; ////
            case 'type6':
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[18px] md:leading-[27.80px] text-[#CECECE] font-normal text-[15px] leading-[20.85px]`; ////
            case 'type3':
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} text-[15px] leading-[20.85px] text-[#CECECE] font-medium  md:text-[20px] md:leading-[27.80px]`;
            default:
                return '';
        }
    };

    // font-normal - 400
    // font-medium - 500
    return (
        <p className={` ${getClassNames(type)} ${className}`}>
            {text}
        </p>
    );
}

export default Description;
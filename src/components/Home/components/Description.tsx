import { useSelector } from "react-redux";
import { RootState } from "../../../store";

// Define the type for the `type` prop
type DescriptionType = 'type1' | 'type4' | 'type6' | 'type8' | 'type11';

// Define the Props interface
interface Props {
    text: string;
    type: DescriptionType;
    className?: string;
}

function Description({ text, type, className }: Props) {
    // Function to get class names based on the type

  const language = useSelector((state: RootState) => state?.language?.language);

    const getClassNames = (type: DescriptionType): string => {
        switch (type) {
            case 'type1':
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[20px]  md:leading-[27.8px] text-[#CECECE] font-normal  text-[15px] leading-[20.85px]`;
            case 'type4':
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[18px] md:leading-[25.02px] text-[#FFFFFF] font-normal  text-[15px] leading-[20.85px]`;
            case 'type6':
                return `${language === 'en' ? 'md:font-sfregular font-montserrat' : 'font-almaraiLight'} md:text-[20px] md:leading-[27.80px] text-[#000000] font-normal  text-[15px] leading-[20.85px] text-[#FFFFFF] md:text-[#000000]`;
            case 'type8':
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[18px] md:leading-[25.02px] text-[#CECECE] font-normal  text-[15px] leading-[20.85px]`;
            case 'type11':
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} text-[15px] leading-[18.29px] text-[#FFFFFF]  font-medium md:font-medium md:text-[15px] md:leading-[18.29px]`;
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
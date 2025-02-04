import { useSelector } from "react-redux";
import { RootState } from "../../../store";

// Define the type for the `type` prop
type DescriptionType = 'type1' | 'type2' | 'type11';

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
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[18px]  md:leading-[24.38px] text-[#FFFFFF] font-normal  text-[17px] leading-[20.72px]`;
            case 'type2':
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} font-normal md:text-[16px]  md:leading-[22.24px] text-[#CECECE] text-[15px] leading-[20.85px]`;
         case 'type11':
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} text-[13px] leading-[18.07px] text-[#CECECE]  font-normal`;
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
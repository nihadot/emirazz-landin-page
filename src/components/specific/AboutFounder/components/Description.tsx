import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

// Define the type for the `type` prop
type DescriptionType = 'type1' | 'type4';

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
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[18px]  md:leading-[27.80px] text-[#C1C1C1] font-montserrat font-light text-[15px] leading-[20.85px]`; ////
            case 'type4':
                return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[18px] md:leading-[25.02px] text-[#FFFFFF] font-normal font-montserrat text-[15px] leading-[20.85px]`;
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
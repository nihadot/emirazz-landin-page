import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

// Define the type for the `type` prop
type HeadingType = 'type1' | 'type6' | 'type2';

// Define the Props interface
interface Props {
  text: string;
  type: HeadingType;
  className?: string;
}

function H2({ text, type, className }: Props) {
  // Function to get class names based on the type
  const language = useSelector((state: RootState) => state?.language?.language);
  
  
  const getClassNames = (type: HeadingType): string => {
    switch (type) {
      case "type1":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[45px] md:leading-[54.86px] font-bold font-montserrat text-white text-[26px] leading-[31.69px]`;
      case "type6":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} leading-tight text-xl md:text-2xl w-full sm:text-4xl font-semibold text-white md:font-bold`;
      
        case "type2":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} font-medium text-[20px] max-w-[600px]  w-full text-white `;
        default:
        return '';
    }
  };

  // font-medium = 500
  // font-normal = 400
  return (
    <h2 className={` ${getClassNames(type)} ${className}`}>
      {text}
    </h2>
  );
}

export default H2;
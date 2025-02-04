import { useSelector } from "react-redux";
import { RootState } from "../../../store";

// Define the type for the `type` prop
type HeadingType = 'type1' | 'type6';

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
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[50px] md:leading-[60.95px] font-montserrat font-bold text-white text-[26px] leading-[31.69px]`;
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
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

// Define the type for the `type` prop
type HeadingType = 'type1' | 'type2' | 'type3' | 'type4' | 'type5' | 'type6' | 'type7' | 'type8' | 'type9' | 'type10';

// Define the Props interface
interface Props {
  text: string;
  type: HeadingType;
  className?: string;
}

function H3({ text, type, className }: Props) {
  // Function to get class names based on the type
  const language = useSelector((state: RootState) => state?.language?.language);

  const getClassNames = (type: HeadingType): string => {
    switch (type) {
      case "type2":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[25px] md:leading-[30.48px] font-bold text-white text-[25px] leading-[30.48px]`; /////
      case "type3":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[18px] md:leading-[25.02px] font-light italic text-white text-[15px] leading-[20.85px] font-normal`; /////
      case "type5":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[18px] md:leading-[25.02px] md:font-sfmedium text-[#CECECE] text-[15px] leading-[20.85px] font-normal`; //////
      case "type7":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} font-black  text-white text-[30px] leading-[36.57px]`; /////
      default:
        return '';
    }
  };
  // font-medium - 500
  // font-normal - 400
  return (
    <h3 className={`${className} ${getClassNames(type)}`}>
      {text}
    </h3>
  );
}

export default H3;
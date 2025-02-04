import { useSelector } from "react-redux";
import { RootState } from "../../../store";

// Define the type for the `type` prop
type HeadingType = 'type1' | 'type2' | 'type6' | 'type7'| 'type9' | 'type10' | 'type11';

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
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[45px] md:leading-[54.86px] font-bold text-white text-[26px] leading-[31.69px]`;
      case "type2":
        return `${language === 'en' ? 'font-Komorebi' : 'font-almaraiLight'}  md:text-[60px] md:leading-[70px] font-normal  text-white text-[33px] italic leading-[38.51px]`;
      case "type6":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'}  md:text-[50px] md:leading-[60.95px] font-bold text-white text-[26px] leading-[31.69px]`;
      case "type7":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[45px] md:leading-[54.86px] font-bold text-white text-[26px] leading-[31.69px]`;
      case "type9":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[45px] md:leading-[54.86px] font-bold text-white text-[26px] leading-[31.69px]'`;
      case "type10":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[50px] md:leading-[60.95px] text-[26px] md:leading-[31.69px] font-medium text-white`;
      case "type11":
        return `${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[45px] md:leading-[54.86px] font-bold text-[26px] leading-[31.69px] sm:text-black text-white`;

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
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

// Define the type for the `type` prop
export type HeadingType = 'type1' | 'type2' | 'type3' | 'type4' | 'type5' | 'type6' | 'type7' | 'type8' | 'type9' | 'type10';

// Define the Props interface
interface Props {
  text: string;
  type: HeadingType;
  className?:string;
}

function H3({ text, type,className }: Props) {
  // Function to get class names based on the type

  const language = useSelector((state: RootState) => state?.language?.language);


  const getClassNames = (type: HeadingType): string => {
    switch (type) {
      case "type1":
        return `${language === 'en' ? 'font-montserrat ' : 'font-almaraiLight'} text-[15px] leading-[18.29px] font-bold font-montserrat text-white`;
      case "type2":
        return `${language === 'en' ? 'font-montserrat ' : 'font-almaraiLight'} text-[17px] font-sfbold font-bold leading-[24px] text-white`;
      default:
        return '';
    }
  };

  return (
    <button className={` ${getClassNames(type)} ${className}`}>
      {text}
    </button>
  );
}

export default H3;
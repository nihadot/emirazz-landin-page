import { useSelector } from "react-redux";
import { RootState } from "../../../store";

// Define the type for the `type` prop
type HeadingType = 'type1';

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
      case "type1":
        return `${language === 'en' ? 'font-montserrat ' : 'font-almaraiLight'} md:text-[20px] md:leading-[20px]  text-[#ffffff] text-[20px] leading-[18.07px] font-bold`; /////
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
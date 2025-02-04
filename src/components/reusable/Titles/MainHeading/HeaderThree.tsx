import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

type Props = {
    id?:string,
    className?:string,
    content:string,
}

function HeadingThree({className,id,content}: Props) {
  const language = useSelector((state: RootState) => state?.language?.language);

  return (
   <h3 className={`${language === 'en' ? 'font-poppins' : 'font-almaraiLight'}  max-w-[600px] leading-tight md:text-[45px] text-3xl font-semibold text-white md:font-bold ${className}`} id={id}  >{content}</h3>
  )
}

export default HeadingThree
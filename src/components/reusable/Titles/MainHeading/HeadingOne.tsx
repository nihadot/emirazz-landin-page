import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

type Props = {
    id?:string,
    className?:string,
    content:any,
}

function HeadingOne({className,id,content}: Props) {

  const language = useSelector((state: RootState) => state?.language?.language);

  return (
   <h1 className={` ${language === 'en' ? 'font-poppins' : 'font-almaraiLight'}
 max-w-[600px] font-semibold md:font-bold w-full text-4xl md:text-5xl text-white ${className}`} id={id}  >{content}</h1>
  )
}

export default HeadingOne
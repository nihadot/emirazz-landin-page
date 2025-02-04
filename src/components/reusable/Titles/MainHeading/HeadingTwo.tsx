import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

type Props = {
    id?:string,
    className?:string,
    content:any,
}

function HeadingTwo({className,id,content}: Props) {

  const language = useSelector((state: RootState) => state?.language?.language);

  return (
   <h2 className={` ${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'}
 max-w-[600px] mb-4 w-full  md:leading-[54.84px] text-[26px] leading-[31.69px] md:text-[45px] font-bold text-white md:font-bold ${className}`} id={id}  >{content}</h2>
  )
}

export default HeadingTwo
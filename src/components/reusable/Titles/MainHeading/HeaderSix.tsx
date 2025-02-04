import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

type Props = {
    id?:string,
    className?:string,
    content:string,
}

function HeaderSix({className,id,content}: Props) {

  const language = useSelector((state: RootState) => state?.language?.language);

  return (
   <h6 className={`${language === 'en' ? 'font-poppins' : 'font-almaraiLight'} leading-loose text-sm sm:text-base text-white/60 font-light ${className}`} id={id}  >{content}</h6>
  )
}

export default HeaderSix
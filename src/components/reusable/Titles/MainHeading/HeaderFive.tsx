import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

type Props = {
    id?:string,
    className?:string,
    content:string,
}

function HeaderFive({className,id,content}: Props) {

  const language = useSelector((state: RootState) => state?.language?.language);

  return (
   <h5 className={`${language === 'en' ? 'font-poppins' : 'font-almaraiLight'} leading-tight text-lg md:text-xl text-white font-semibold ${className}`} id={id}  >{content}</h5>
  )
}

export default HeaderFive
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

type Props = {
    id?:string,
    className?:string,
    content:string,
}

function HeaderFour({className,id,content}: Props) {

  const language = useSelector((state: RootState) => state?.language?.language);

  return (
   <h4 className={`${language === 'en' ? 'font-poppins' : 'font-almaraiLight'} max-w-[600px] leading-tight text-xl md:text-2xl w-full sm:text-4xl font-semibold text-white md:font-bold ${className}`} id={id}  >{content}</h4>
  )
}

export default HeaderFour

type Props = {
    id?:string,
    className?:string,
    content:string,
}

function SubTitleParagraph({className,id,content}: Props) {
  return (
   <p className={`max-w-[800px] w-full text-xl font-poppins font-normal leading-6 text-[#CECECE] ${className}`} id={id}  >{content}</p>
  )
}

export default SubTitleParagraph
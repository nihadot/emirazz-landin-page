
type Props = {
    id?:string,
    className?:string,
    content:any,
}

function Paragraph({className,id,content}: Props) {
  return (
   <p className={` max-w-[800px]  font-montserrat font-normal text-[15px] w-full text-base md:text-[18px] md:font-normal leading-[20.85px] sm:leading-[27.85px] text-[#cecece] ${className} `} id={id}  >{content}</p>
  )
}

export default Paragraph
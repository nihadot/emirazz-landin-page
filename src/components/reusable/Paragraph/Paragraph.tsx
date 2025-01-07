
type Props = {
    id?:string,
    className?:string,
    content:string,
}

function Paragraph({className,id,content}: Props) {
  return (
   <p className={` max-w-[800px]  font-poppins w-full text-base md:text-xl font-light md:font-normal leading-normal text-white/70 ${className} `} id={id}  >{content}</p>
  )
}

export default Paragraph
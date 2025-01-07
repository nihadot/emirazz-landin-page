
type Props = {
    id?:string,
    className?:string,
    content:any,
}

function HeadingTwo({className,id,content}: Props) {
  return (
   <h2 className={`max-w-[600px] mb-4 w-full text-4xl md:text-[45px] font-semibold text-white font-poppins md:font-bold ${className}`} id={id}  >{content}</h2>
  )
}

export default HeadingTwo
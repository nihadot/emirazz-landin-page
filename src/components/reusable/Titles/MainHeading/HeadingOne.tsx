
type Props = {
    id?:string,
    className?:string,
    content:string,
}

function HeadingOne({className,id,content}: Props) {
  return (
   <h1 className={`max-w-[600px] leading-tight font-semibold md:font-bold font-poppins w-full text-4xl md:text-5xl text-white ${className}`} id={id}  >{content}</h1>
  )
}

export default HeadingOne
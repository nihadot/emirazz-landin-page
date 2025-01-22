
type Props = {
    id?:string,
    className?:string,
    content:any,
}

function HeadingTwo({className,id,content}: Props) {
  return (
   <h2 className={`max-w-[600px] mb-4 w-full font-montserrat md:leading-[54.84px] text-[26px] leading-[31.69px] md:text-[45px] font-bold text-white md:font-bold ${className}`} id={id}  >{content}</h2>
  )
}

export default HeadingTwo
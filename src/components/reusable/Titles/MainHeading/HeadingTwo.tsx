
type Props = {
    id?:string,
    className?:string,
    content:string,
}

function HeadingTwo({className,id,content}: Props) {
  return (
   <h2 className={`max-w-[600px] mb-4 leading-tight w-full text-4xl md:text-5xl font-semibold text-white font-poppins md:font-bold ${className}`} id={id}  >{content}</h2>
  )
}

export default HeadingTwo

type Props = {
    id?:string,
    className?:string,
    content:string,
}

function HeadingThree({className,id,content}: Props) {
  return (
   <h3 className={`max-w-[600px] leading-tight md:text-4xl text-3xl font-semibold text-white md:font-bold font-poppins ${className}`} id={id}  >{content}</h3>
  )
}

export default HeadingThree
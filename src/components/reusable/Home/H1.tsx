
type Props = {
    className?:string;
    value:string
}

function H1({value,className}: Props) {
  return (
    <h1 className={`mb-3 pt-8 uppercase !max-w-[650px] font-bold text-center sm:text-start font-montserrat text-[40px] md:text-[85px] leading-[45.95px] md:leading-[103.62px] text-white ${className}`}>{value}</h1>
  )
}

export default H1
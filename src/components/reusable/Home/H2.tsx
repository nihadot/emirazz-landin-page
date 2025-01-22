
type Props = {
    className?:string;
    value:string
}

function H2({value,className}: Props) {
  return (
    <h2 className={`mb-3 pt-8 text-start !max-w-[650px] font-bold sm:text-start font-montserrat text-[26px] md:text-[45px] leading-[31.69px] md:leading-[54.86px] text-white ${className}`}>{value}</h2>
  )
}

export default H2
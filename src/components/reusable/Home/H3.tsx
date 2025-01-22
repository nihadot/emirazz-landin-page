
type Props = {
    className?:string;
    value:string
}

function H3({value,className}: Props) {
  return (
    <h3 className={`font-bold font-montserrat text-white md:text-[45px] text-[26px] leading-[31.69px] md:leading-[54.86px] ${className}`}>{value}</h3>
  )
}

export default H3

type Props = {
    className?:string;
    value:string;
    id?:string;
}

function Paragraph({value,className,id}: Props) {
  return (
    <p className={` max-w-[800px]  font-normal font-montserrat text-[15px] md:text-[20px] leading-[20.85px] md:leading-[27.08px] text-[#CFCFCF] ${className} `} id={id}  >{value}</p>
  )
}

export default Paragraph

type Props = {
    src:string,
    alt:string,
    className:string,
    id?:string,
}

function Image({src,alt,className,id}: Props) {
  return (
   <img id={id} src={src} alt={alt} className={className}/>
  )
}

export default Image
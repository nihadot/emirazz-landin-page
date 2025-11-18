import Image from '../Image/Image';

type Props = {
    imageClassName: string;
    containerClassName?: string;
    imageUrl: string;
    alt: string;
}

function Card({ containerClassName, imageClassName, imageUrl, alt }: Props) {
  return (
    <div 
      className={`bg-slate-50 rounded-[10px] overflow-hidden 
      w-[320px] h-[160px] ${containerClassName}`}
    >
        <Image
          src={imageUrl}
          alt={alt}
          className={`object-cover w-full h-full ${imageClassName}`}
        />
    </div>
  )
}

export default Card;

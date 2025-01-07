import React from 'react'
import Image from '../Image/Image';

type Props = {
    imageClassName:string;
    containerClassName?:string;
    imageUrl:string;
    alt:string;
}

function Card({containerClassName,imageClassName,imageUrl,alt}: Props) {
  return (
    <div className={` bg-slate-50 w-full rounded-[10px] overflow-hidden h-[187px] ${containerClassName} `}>
        <Image
        src={imageUrl}
        alt={alt}
        className={imageClassName}
        />
    </div>
  )
}

export default Card
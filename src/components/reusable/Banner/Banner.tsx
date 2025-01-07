import { ReactNode } from 'react'
import Image from '../Image/Image'

type Props = {
  imageUrl: string;
  alt: string;
  imageClassName?: string;
  children: ReactNode; // Accepts any valid React child
  home?: boolean;
  linearGradient?: boolean;
  containerClassName?: string;
  brightness?: boolean;
  style?:string;
  styleBoxShadow?:boolean;
  containerRound?:string;
};


function Banner({ containerRound,styleBoxShadow,style,imageUrl, alt, children, imageClassName, home, linearGradient, containerClassName, brightness }: Props) {
  return (
    <div style={ styleBoxShadow ? {boxShadow:"0px 0px 62.4px 1px rgba(255, 0, 0, 0.41)"} : undefined} className={`w-full h-[700px] md:h-[820px] ${containerRound ? 'rounded-[20px] overflow-hidden' : ''} relative ${containerClassName}`}>
      <Image
        src={imageUrl}
        className={` object-cover  rounded-[20px] w-full h-full top-0 ${imageClassName} ${home ? 'rounded-none' : ''} ${brightness ? 'brightness-50' : ''} `}
        alt={alt}
      />
      {linearGradient && <div className="w-full absolute z-0 top-0 left-0 h-full bg-gradient-to-r from-black via-black/70 to-transparent"></div>}


      {children}

    </div>
  )
}

export default Banner

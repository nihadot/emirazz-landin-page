import Image from '../Image/Image'

type Props = {
    content:string;
    className?:string;
    iconUrl:string;
    textBlack?:boolean;
    reverce?:boolean;
}

function IconBtn({content,iconUrl,className,textBlack,reverce}: Props) {
  return (
    <button className={`text-white flex items-center gap-3 ${reverce ? 'flex-row-reverse' : ''}`}>
        <Image
        alt=''
        className={`w-8 h-8 object-cover ${className}`}
        src={iconUrl}

        />
        <label className={` text-base font-medium font-sfbold ${textBlack ? 'text-black' : ''}`}>{content}</label>
    </button>
  )
}

export default IconBtn
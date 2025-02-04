import Image from '../Image/Image'
import HeaderFour from '../Titles/MainHeading/HeaderFour'
import { IconButton } from '../Buttons'
import { rightArrow } from '../../../assets/svg'
import Paragraph from '../Paragraph/Paragraph';



export interface IImageLink {
  public_id: string;
  secure_url: string;
  url: string;
  width: number;
  height: number;
}

interface  NewsFormValues{
  newsTitle: string;
  newsTitleAr: string;
  newsDescription: string;
  newsDescriptionAr: string;
  newsDate: Date;
  seoTitle: string;
  seoTitleAr: string;
  seoDescription: string;
  seoDescriptionAr: string;
  seoKeywords: string;
  seoKeywordsAr: string;
  imageLink: IImageLink;
  slugNameEn: string;
  slugNameAr: string;
  createdAt?: Date;
  updatedAt?: Date;
}
type Props  ={
item:NewsFormValues
}

function NewsCard({item}: Props) {
  return (
    <div className=''>
        <Image
        alt={item?.newsTitle}
         src={item?.imageLink?.secure_url}

         className='h-[285px]  w-full rounded-[15px] object-cover'
        />
        <HeaderFour
        className='mt-4 !text-xl capitalize'
        content={item?.newsTitle}

        />

<Paragraph
        className='line-clamp-2 text-ellipsis'
        content={item?.newsDescription}
        />

        <IconButton

        className='!w-6 !h-6 mt-3'
        iconUrl={rightArrow}
        content='10 - 03 - 2024'
        />
    </div>
  )
}

export default NewsCard
import Paragraph from '../Paragraph/Paragraph'
import HeaderFour from '../Titles/MainHeading/HeaderFour'
import { IconButton } from '../Buttons'
import { rightArrow } from '../../../assets/svg'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import Image from '../Image/Image'



export interface IImageLink {
  public_id: string;
  secure_url: string;
  url: string;
  width: number;
  height: number;
}

interface BlogFormValues {
  blogTitle: string;
  blogTitleAr: string;
  blogDescription: string;
  blogDescriptionAr: string;
  blogDate: string;
  seoTitle: string;
  seoTitleAr: string;
  seoDescription: string;
  seoDescriptionAr: string;
  seoKeywords: string;
  seoKeywordsAr: string;
  imageLink: IImageLink;
  slugNameEn:string;
}


type Props  ={
item:BlogFormValues
}

function BlogCard({item}: Props) {
  const language = useSelector((state: RootState) => state?.language?.language);

  return (
    <div className=''>
        <Image
         src={item?.imageLink?.secure_url}
    alt={item?.blogTitle}
         className='h-[285px]  w-full rounded-[15px] object-cover'
        />
     <Link to={`/blog/${item.slugNameEn}`}>
        <HeaderFour
        className='mt-4 !text-xl capitalize'
        content={item?.blogTitle}

        />

        <Paragraph
        className='line-clamp-2 text-ellipsis'
        content={item?.blogDescription}
        />





                    <IconButton
                        className={`my-2 ${language === 'en' ? '' : '-rotate-180'} `}
                        iconUrl={rightArrow}
                        content={language === "en" ? 'View All' : 'يتعلم أكثر'}

                    />
       

</Link>
    </div>
  )
}

export default BlogCard
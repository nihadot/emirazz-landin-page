import  { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { useGetBlogsQuery } from '../../../features/blog/blogApi';
import BlogCard from '../../reusable/BlogCard/BlogCard';

type Props = {}



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


function SectionTwo({}: Props) {


  const [page] = useState(1);
  const { state } = useLocation() as { state: BlogFormValues };
  const { data: blogData } = useGetBlogsQuery<any>({ page, limit: 20 });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!state && blogData) {
      setData(blogData?.data);
    }

  }, [state, blogData]);


  return (
    <div className="sm:pt-4 gap-y-16 px-4 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 items-center flex-col sm:flex-row relative justify-end">



    {
        data?.length > 0 && data?.map((item: BlogFormValues, index: number) => {
          return (
            <BlogCard key={index} item={item} />
          

          )
        })
      }

  </div>
  )
}

export default SectionTwo
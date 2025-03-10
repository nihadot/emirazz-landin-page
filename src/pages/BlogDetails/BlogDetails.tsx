import { useEffect, useState } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import BlogCard from "../../components/reusable/BlogCard/BlogCard"
import Image from '../../components/reusable/Image/Image'
import { useLocation, useParams } from 'react-router'
import { useGetBlogQuery, useGetBlogsQuery } from '../../features/blog/blogApi'
import { formatToDayMonthYear } from '../News/News'
import H3 from './components/H3'
import Description from './components/Description'
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
  slugNameEn: string;
}


function BlogDetails({ }: Props) {


  const { slug } = useParams() as any;
  const { state } = useLocation() as { state: BlogFormValues };
  const { data: newsData } = useGetBlogQuery(slug, {
    skip: !!state, // Skip query if state exists
  });

  const [page] = useState(1);


  const { data: blogAllData } = useGetBlogsQuery<{ data: any }>({ page, limit: 10 });

  const [data, setData] = useState<any>();
  const [allNews, setAllBlogs] = useState<BlogFormValues[]>([]);


  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])

  useEffect(() => {

    if (newsData) {
      setData(newsData?.data);
    }




  }, [newsData]);

  useEffect(() => {
    if (blogAllData) {
      if (blogAllData.data.length !== 0 && data) {
        const filtered = blogAllData?.data?.filter((item: any) => item._id !== data._id)
        setAllBlogs(filtered); // Append new blogs
      }
    }
  }, [blogAllData, data])


  return (
    <section className="m-auto max-w-[1440px]">


      <Header />

      <div className="px-4 pt-24 md:flex-row flex-col gap-20 flex md:px-10 relative lg:px-20 bg-black">

        <BlogBody item={data} />
        <div className="flex gap-6 flex-1 flex-col">


          {
            allNews.length > 0 && allNews.map((item: BlogFormValues, index: number) => {
              return (
                <BlogCard key={index} item={item} />

              )
            })
          }

        </div>
      </div>
      <Footer />
    </section>
  )
}

export default BlogDetails


function BlogBody({ item }: { item: BlogFormValues | undefined }) {
  return (
    <div className='max-w-[772px] w-full'>

      {item?.imageLink?.secure_url && <Image
        alt=''
        src={item?.imageLink?.secure_url}
        className='w-full rounded-[20px] h-[300px] md:h-[512px]'
      />}

      {!item?.imageLink && <div className='rounded-[20px] h-[512px] w-full bg-slate-950'></div>}


      <H3
        className='pt-4'
        type='type1'
        text={item?.blogTitle ? item.blogTitle : ''}
      />

      <Description
        type='type11'
        className='py-1'
        text={formatToDayMonthYear(item?.blogDate ?? '')}
      />

      <Description
        type='type2'
        className='py-1'
        text={item?.blogDescription ?? ''} />
    </div>
  )
}


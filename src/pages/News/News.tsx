import React, { useEffect, useState } from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import Image from '../../components/reusable/Image/Image'
import { empoweringInnovation } from '../../assets/images'
import HeadingTwo from '../../components/reusable/Titles/MainHeading/HeadingTwo'
import Paragraph from '../../components/reusable/Paragraph/Paragraph'
import BlogCard from '../../components/reusable/BlogCard/BlogCard'
import { useGetAllNewsQuery, useGetNewsQuery } from '../../features/news/newsApi'
import { useLocation, useParams } from 'react-router'
import NewCard from '../../components/reusable/BlogCard/BlogCard'

type Props = {}


export interface IImageLink {
  public_id: string;
  secure_url: string;
  url: string;
  width: number;
  height: number;
}

interface NewsFormValues {
  newsTitle: string;
  _id:string;
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


function News({ }: Props) {

  const { slug } = useParams();
  const { state } = useLocation() as { state: NewsFormValues };
  const { data: newsData } = useGetNewsQuery(slug, {
    skip: !!state, // Skip query if state exists
  });

  const [page] = useState(1);


  const { data: newsAllData } = useGetAllNewsQuery({page, limit: 10});

  const [data, setData] = useState<NewsFormValues>();
  const [allNews, setAllNews] = useState<NewsFormValues[]>([]);


  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])

  useEffect(() => {
        
    if (newsData) {
      setData(newsData?.data);
    }
    if(state){
      setData(state)
    }



  }, [newsData]);

useEffect(()=>{
  if (newsAllData) {
    if (newsAllData.data.length !== 0 && data) {
      const filtered = newsAllData?.data?.filter((item:NewsFormValues)=> item._id !== data._id )
        setAllNews(filtered); // Append new blogs
    }
}
},[newsAllData,data])

  return (
    <div className="m-auto max-w-[1440px]">


      <Header />

      <div className="px-4 pt-24 md:flex-row flex-col gap-20 flex md:px-10 relative lg:px-20 bg-black">

        <BlogBody item={data} />
        <div className="flex gap-6 flex-1 flex-col">

        

         {
                    allNews.length > 0 && allNews.map((item: NewsFormValues,index:number) => {
                        return (
                          <NewCard item={item} />

                        )
                    })
                }
         
        </div>
      </div>


      {/* <SectionOne/> */}
      {/* // <SectionTwo/> */}
      {/* // <SectionNine/> */}
      <Footer />
    </div>
  )
}

export default News



export function formatToDayMonthYear(isoDate: string): string {
  if (!isoDate) return "Invalid date";

  const dateObject = new Date(isoDate);

  // Extract day, month, and year
  const day = dateObject.getDate().toString().padStart(2, "0"); // Ensure 2-digit format
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
  const year = dateObject.getFullYear();

  return `${day}-${month}-${year}`;
}


function BlogBody({ item }: { item: NewsFormValues }) {

  return (
    <div className='max-w-[772px] w-full'>

    { item?.imageLink?.secure_url && <Image
    alt={item?.newsTitle}
        src={item?.imageLink?.secure_url}
        className='w-full rounded-[20px] h-[300px] md:h-[512px]'
      />}

      {!item?.imageLink && <div className='rounded-[20px] h-[512px] w-full bg-slate-950'></div>}

      <HeadingTwo
        className='pt-4 !max-w-full !text-4xl'
        content={item?.newsTitle}
      />

      <Paragraph
        className='!text-sm'
        content={formatToDayMonthYear(item?.newsDate)}
      />

      <Paragraph
        className='!text-base pt-4'
        content={item?.newsDescription} />
    </div>
  )
}

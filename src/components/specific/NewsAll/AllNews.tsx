import React, { useEffect, useState } from 'react'
import Banner from '../../reusable/Banner/Banner'
import TextBanner from '../../reusable/TextBanner/TextBanner'
import { Link, useLocation } from 'react-router'
import { useGetAllNewsQuery } from '../../../features/news/newsApi'

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

function AllNews({ }: Props) {


  const [page] = useState(1);
  const { state } = useLocation() as { state: NewsFormValues };
  const { data: newsData } = useGetAllNewsQuery({ page, limit: 20 });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!state && newsData) {
      setData(newsData?.data);
    }

  }, [state, newsData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-black px-4 md:px-10 lg:px-20  pt-0 md:pt-10 gap-8">



      {
        data?.length > 0 && data?.map((item: NewsFormValues, index: number) => {
          return (
            <Banner
              alt={item?.newsTitle}
              key={index}
              children={<Children item={item} />}
              imageUrl={item?.imageLink?.secure_url}
              containerClassName='md:!w-full !h-[470px]'
            />

          )
        })
      }




    </div>
  )
}

export default AllNews



interface CardProps {
  item: NewsFormValues;
}

const Children: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="absolute w-full bottom-0 p-4 z-30">

      <Link to={`/news/${item.slugNameEn}`}>
        <TextBanner
          containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-[128px]'
          paragraphClassName='!text-[13px] line-clamp-2 text-ellipsis !p-0 !m-0 !leading-normal'
          headingClassName='!text-[18px] !p-0 !m-0 line-clamp-1'
          paragraph={item?.newsDescription}
          heading={item?.newsTitle}
        />
      </Link>
    </div>
  )
}

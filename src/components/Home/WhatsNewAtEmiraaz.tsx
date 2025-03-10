import Banner from '../reusable/Banner/Banner'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import TextBanner from '../reusable/TextBanner/TextBanner'
import { useEffect, useState } from 'react'
import { useGetAllNewsQuery } from '../../features/news/newsApi'
import H2 from './components/H2'
import Description from './components/Description'
import ArrowIconButton from './components/ArrowIconButton'

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


function WhatsNewAtEmiraaz({ }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);


    const [page] = useState(1);
    const [allNews, setAllNews] = useState<any[]>([]); // State to hold all blogs
    const { data } = useGetAllNewsQuery({ page, limit: 20 });

    useEffect(() => {
        if (data) {
            if (data.data.length !== 0) {
                setAllNews((prev) => [...prev, ...data.data]); // Append new blogs
            }
        }

    }, [data]);



    return (
        <>

            <section className="flex flex-col pt-0 md:pt-20 pb-0 px-4 md:px-10 lg:px-20 bg-black lg:flex-row justify-center sm:gap-8 items-center">

                {/* images */}
                <div className="flex flex-col  sm:pb-0 pb-4 md:pb-8 flex-1">
                    <H2
                        text={language === 'en' ? 'What’s New @ Emiraaz' : 'الجديد في أميراز'}
                        type='type1'
                    />
                    <Description
                        className=''
                        type='type4'
                        text={language === 'en' ? 'Stay updated with the latest from Emiraaz. Discover our groundbreaking projects, key partnerships, and technological advancements, offering insights into our growth and impact.' : 'ابق على اطلاع بأحدث الأخبار من أميراز. اكتشف مشاريعنا الرائدة، وشراكاتنا الرئيسية، والتقدم التكنولوجي، الذي يقدم رؤى حول نمونا وتأثيرنا.'}
                    />
                </div>

                <div className="pb-4 md:p-0 flex w-full justify-end items-center  flex-1">
                    <div className="flex w-full justify-start md:justify-end items-center ">

                        <ArrowIconButton
                            className=''

                            link='/newsall'
                            text={language === 'en' ? 'Know More' : 'يتعلم أكثر'}
                            type='type2'
                        />
                    </div>
                </div>
            </section>


            <div className="bg-black pt-6s md:pt-0 px-4 md:px-10 lg:px-20  w-full py-0">


                <div id='home-news' className="flex md:flex-row flex-col mt-0 gap-8 overflow-x-scroll">


                    {
                        allNews.length > 0 && allNews.map((item: NewsFormValues, index: number) => {

                            return (
                                <Banner
                                    alt={''}
                                    key={index}

                                    children={<Children item={item} />}
                                    imageClassName='object-cover'
                                    imageUrl={item?.imageLink?.secure_url}
                                    containerClassName='md:!w-[590px] flex-none !h-[470px]'
                                />

                            )
                        })
                    }

                </div>
            </div>
        </>

    )
}

export default WhatsNewAtEmiraaz


interface CardProps {
    item: NewsFormValues;
}

const Children: React.FC<CardProps> = ({ item }) => {

    return (
        <div className="absolute  w-full bottom-0 p-4 z-30">
            <TextBanner
                containerClassName='!ps-4 !pt-3 !pe-3 !pb-3 h-fit lg:!h-[128px]'
                paragraphClassName='!text-[13px] !p-0 !m-0 line-clamp-2 text-ellipsis !leading-normal'
                headingClassName='!text-[18px] !p-0 !m-0 line-clamp-1 !mb-2 text-ellipsis'
                paragraph={item?.newsDescription}
                heading={item?.newsTitle}
            />
        </div>
    )
}

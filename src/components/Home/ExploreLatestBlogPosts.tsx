import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useGetBlogsQuery } from '../../features/blog/blogApi'
import BlogCard from '../reusable/BlogCard/BlogCard'
import H2 from './components/H2'
import Description from './components/Description'
import ArrowIconButton from './components/ArrowIconButton'


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
    slugNameEn: string
}


function ExploreLatestBlogPosts({ }) {

    const language = useSelector((state: RootState) => state?.language?.language);

    const [page] = useState(1);
    const [blogs, setBlogs] = useState([]); // State to hold all blogs
    const { data: BlogData } = useGetBlogsQuery<any>({ page, limit: 10 });


    useEffect(() => {
        if (BlogData) {
            if (BlogData.data.length !== 0) {
                setBlogs(BlogData.data); // Append new blogs
            }
        }

    }, [BlogData]);

    return (
        <section className='px-4 md:px-10 pt-12 md:pt-32  bg-black'>

            <div className="flex flex-col relative justify-center items-center   bg-black">
                <H2
                    text={language === 'en' ? `Explore Our Latest Blog Posts` : 'استكشف أحدث منشورات مدونتنا'}
                    type='type1'
                    className={'mb-3 text-start md:text-center'}
                />

                <Description
                    type='type8'
                    className='max-w-[914px] w-full text-start md:text-center'

                    text={language === 'en' ? 'Explore the Emiraaz blog for expert insights, emerging trends, and thought-provoking ideas across industries like technology, real estate, and innovation.' : 'استكشف مدونة Emiraaz للحصول على رؤى الخبراء والاتجاهات الناشئة والأفكار المثيرة للتفكير عبر صناعات مثل التكنولوجيا والعقارات والابتكار.'}
                />
            </div>

            <div className=" gap-y-16  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 md:pt-10 items-center flex-col sm:flex-row relative justify-end">

                {

                    blogs.length > 0 && blogs.map((item: BlogFormValues, index: number) => {
                        return (
                            <BlogCard key={index} item={item} />
                        )
                    })
                }

            </div>



            <div className="flex w-full  justify-center">

                <ArrowIconButton
                    className=''

                    link='/blogall'
                    text={language === 'en' ? 'Know More' : 'يتعلم أكثر'}
                    type='type2'
                />
            </div>

        </section>
    )
}

export default ExploreLatestBlogPosts
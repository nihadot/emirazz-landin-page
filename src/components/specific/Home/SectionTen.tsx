import Paragraph from '../../reusable/Paragraph/Paragraph'
import HomeJSON from "../../../data/home.json"
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useGetBlogsQuery } from '../../../features/blog/blogApi'
import BlogCard from '../../reusable/BlogCard/BlogCard'
import { IconButton } from '../../reusable/Buttons'
import { Link } from 'react-router'
import { rightArrow } from '../../../assets/svg'


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
    slugNameEn:string
  }
  

function SectionTen({ }) {

    const language = useSelector((state: RootState) => state?.language?.language);

      const [page] = useState(1);
        const [blogs, setBlogs] = useState([]); // State to hold all blogs
        const { data:BlogData } = useGetBlogsQuery<any>({ page, limit: 10 });
    
    
   useEffect(() => {
        if (BlogData) {
            if (BlogData.data.length !== 0) {
                setBlogs(BlogData.data); // Append new blogs
            }
        }

    }, [BlogData]);

    return (
        <div className='px-4 md:px-10 lg:px-20 bg-black'>

            <div className="flex flex-col relative justify-center items-center pt-8 px-4 md:px-10 bg-black lg:px-20">
                <HeadingThree
                    className='!text-center max-w-[400] pb-4 pt-8'
                    content={HomeJSON?.section10[language as 'en' | 'ar']?.h3}
                />
                <Paragraph
                    className='!text-center '
                    content={HomeJSON?.section10[language as 'en' | 'ar']?.p}
                />
            </div>

            <div className="sm:pt-4 gap-y-16  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 items-center flex-col sm:flex-row relative justify-end">

               {

blogs.length > 0 && blogs.map((item:BlogFormValues,index:number)=>{
    return(
        <BlogCard key={index}  item={item} />
    )
})  
               }

            </div>




            <div className="flex justify-center">
                <Link to={'blogall'}>
                    <IconButton
                        className={`my-6 ${language === 'en' ? '' : '-rotate-180'} `}
                        iconUrl={rightArrow}
                        content={language === "en" ? 'View All' : 'يتعلم أكثر'}

                    />
                </Link>
            </div>

        </div>
    )
}

export default SectionTen
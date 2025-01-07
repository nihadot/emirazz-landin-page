import { useEffect, useState } from 'react';
import ProductCard from '../../reusable/Card/ProductCard'
import { useGetAllProductsQuery } from '../../../features/product/productsApi';
import { useLocation } from 'react-router';

type Props = {}

interface ImageLink {
  public_id: string;
  secure_url: string;
  url: string;
  width: number;
  height: number;
}

interface ProductFormValues {
  productTitle: string;
  productTitleAr: string;
  productDescription: string;
  productDescriptionAr: string;
  seoTitle: string;
  seoTitleAr: string;
  seoDescription: string;
  seoDescriptionAr: string;
  seoKeywords: string;
  seoKeywordsAr: string;
  imageLink: ImageLink;
  slugNameEn:string;
}

function SectionTwo({ }: Props) {
  const [page, setPage] = useState(1);
  const [allBlogs, setAllProducts] = useState([]); // State to hold all allBlogs
  const [loading, setLoading] = useState(true); // Track loading state
  const [hasMore, setHasMore] = useState(true); // Track if there are more blogs to load
  const { state } = useLocation();
  const { data, isError, error, isLoading, refetch } = useGetAllProductsQuery({ page, limit: 10 },{skip:false});



  // Effect to fetch data when `data` is available or refetch is triggered
  useEffect(() => {   
    if (data) {
      if (data.data.length === 0) {
        setHasMore(false);
      } else {
        setAllProducts((prev) => [...prev, ...data.data]); // Append new blogs
      }
      setLoading(false); // Stop loading when data is received
    }

    console.log('loading...',loading)

    return ()=>{
      // setAllProducts([]);
    }
  }, [data]);


    // Effect to detect when the user reaches the bottom of the page
    useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 && // 200px before bottom
          !loading &&
          hasMore
        ) {
          setLoading(true); // Start loading more blogs
          setPage((prevPage) => prevPage + 1); // Increment page number
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll); // Cleanup event listener
      };
    }, [loading, hasMore]);

    
    return (
        <div className="sm:pt-4 gap-y-8 md:gap-y-16 px-4 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 items-center flex-col sm:flex-row relative justify-end">

       
          

          {
                    allBlogs.length > 0 && allBlogs.map((item: ProductFormValues,index:number) => {
                        return (
                          <ProductCard key={index} item={item}/>

                        )
                    })
                }
        </div>
    )
}

export default SectionTwo
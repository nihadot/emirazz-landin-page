import React, { useEffect, useState } from 'react'
import { Header } from '../../reusable/Headers'
import Footer from '../../reusable/Footer/Footer'
import Banner from '../../reusable/Banner/Banner'
import { image1 } from '../../../assets/images'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import { useLocation, useParams } from 'react-router'
import { useGetProductQuery } from '../../../features/product/productsApi'

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
}

function SectionOne({}: Props) {
 const {slug} = useParams();
  const {state} = useLocation() as { state: ProductFormValues };
  const { data: productData } = useGetProductQuery(slug, {
    skip: !!state, // Skip query if state exists
});

const [data,setData]=  useState<ProductFormValues>();

useEffect(() => {
  // If state is unavailable and API response is ready, assign it to local state
  if (!state && productData) {
      setData(productData?.data);
      //   setInitialImageState(productData?.data?.imageLink);
      // setPreview(productData?.data?.imageLink?.secure_url || ''); // Set preview image
  }else{
    setData(state)
  }
}, [state, productData]);

  const children = <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
  <HeadingOne
      className='md:mb-6 mb-3 capitalize pt-8 sm:pt-0'
      content={data?.productTitle}
  />
  <Paragraph
      className='text-white/80'
      content={data?.productDescription}
  />
</div>

  return (
    <div className="">
            <Banner
                // containerClassName='pt-8'
                alt='Emiraaz & Technology: Shaping the Future'
                imageUrl={data?.imageLink.secure_url}
                containerClassName='!max-h-[700px]'
                imageClassName='object-cover'
                home
                linearGradient
                children={children}
            />
        </div>
  )
}

export default SectionOne
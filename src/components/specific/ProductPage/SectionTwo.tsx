import  { useEffect, useState } from 'react'
import HeadingTwo from '../../reusable/Titles/MainHeading/HeadingTwo'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import { useLocation, useParams } from 'react-router';
import { useGetProductQuery } from '../../../features/product/productsApi';

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
    productDetails:string;
    productDetailsAr:string;

  }


function SectionTwo({}: Props) {

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
  return (
    <div className='px-4 pt-24 md:px-10 lg:px-20 bg-black'>
        <HeadingTwo
        content='Description'
        />

        <Paragraph
        className='text prose whitespace-break-spaces'
        content={data?.productDetails ?? 'Default value'}
        />


    </div>
  )
}

export default SectionTwo
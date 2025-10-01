import { useEffect, useState } from 'react';
import Banner from '../../reusable/Banner/Banner';
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne';
import Paragraph from '../../reusable/Paragraph/Paragraph';
import { useLocation, useParams } from 'react-router-dom';

interface ImageLink {
  public_id: string;
  secure_url: string;
  url: string;
  width: number;
  height: number;
}

interface ProductFormValues {
  productTitle?: string;
  productTitleAr?: string;
  productDescription?: string;
  productDescriptionAr?: string;
  seoTitle?: string;
  seoTitleAr?: string;
  seoDescription?: string;
  seoDescriptionAr?: string;
  seoKeywords?: string;
  seoKeywordsAr?: string;
  imageLink?: ImageLink;
  productDetails?: string;
  productDetailsAr?: string;
  slugNameEn?: string;
  isComingSoon?: boolean;
  isActive?: boolean;
}

function SectionOne() {
  const { slug } = useParams();
  const { state } = useLocation() as { state: ProductFormValues };
  const [data, setData] = useState<ProductFormValues>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      // First check if we have state from navigation
      if (state) {
        setData(state);
        setLoading(false);
        return;
      }

      // If no state, fetch from JSON file
      try {
        const response = await fetch('/data/OurProducts.json');
        const productData = await response.json();
        const product = productData.products.find(
          (p: ProductFormValues) => p.slugNameEn === slug
        );
        
        if (product) {
          setData(product);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [state, slug]);

  if (loading) {
    return (
      <div className="min-h-[700px] bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const children = (
    <div className="px-4 md:px-10 lg:px-20 absolute top-0 left-0 flex flex-col justify-center w-full h-full">
      <HeadingOne
        className="md:mb-6 mb-3 capitalize pt-8 sm:pt-0"
        content={data?.productTitle ?? 'Default value'}
      />
      <Paragraph
        className="text-white/80"
        content={data?.productDescription ?? 'Default value'}
      />
    </div>
  );

  return (
    <div className="">
      <Banner
        alt="Emiraaz & Technology: Shaping the Future"
        imageUrl={data?.imageLink?.secure_url ?? 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'}
        containerClassName="!max-h-[700px]"
        imageClassName="object-cover"
        home
        linearGradient
        children={children}
      />
    </div>
  );
}

export default SectionOne;
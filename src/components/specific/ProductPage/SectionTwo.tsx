import { useEffect, useState } from 'react';
import HeadingTwo from '../../reusable/Titles/MainHeading/HeadingTwo';
import Paragraph from '../../reusable/Paragraph/Paragraph';
import { useLocation, useParams } from 'react-router';

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

function SectionTwo() {
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
        const response = await fetch('/data/ourProducts.json');
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
      <div className="px-4 pt-24 md:px-10 lg:px-20 bg-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="px-4 pt-24 md:px-10 lg:px-20 bg-black">
      <HeadingTwo content="Description" />
      <Paragraph
        className="text prose whitespace-break-spaces"
        content={data?.productDetails ?? 'Default value'}
      />
    </div>
  );
}

export default SectionTwo;
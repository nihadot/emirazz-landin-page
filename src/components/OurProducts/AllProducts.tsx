import { useEffect, useState } from 'react';
import ProductCard from '../reusable/Card/ProductCard';

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
  slugNameEn: string;
  isComingSoon?: boolean;
  isActive?: boolean;
}

interface ProductsData {
  section1: {
    en: {
      h1: string;
      p: string;
    };
    ar: {
      h1: string;
      p: string;
    };
  };
  products: ProductFormValues[];
}

function AllProducts() {
  const [_page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<ProductFormValues[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [productsData, setProductsData] = useState<ProductsData | null>(null);

useEffect(() => {
  const loadProductsData = async () => {
    try {
      const response = await fetch('/data/OurProducts.json');
      console.log("📡 Fetch status:", response.status, response.ok);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ProductsData = await response.json();
      console.log("✅ Parsed Products Data:", data);
      setProductsData(data);
    } catch (error) {
      console.error('❌ Error loading products data:', error);
      setLoading(false);
    }
  };

  loadProductsData();
}, []);


useEffect(() => {
  if (productsData) {
    setAllProducts(productsData.products); 
    setLoading(false);
    setHasMore(false); // stop pagination since all are loaded
  }
}, [productsData]);


  // Effect to detect when the user reaches the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200 &&
        !loading &&
        hasMore
      ) {
        setLoading(true);
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {allProducts.length > 0 && allProducts.map((item: ProductFormValues, index: number) => (
        <ProductCard key={`${item.slugNameEn}-${index}`} item={item} />
      ))}
      
      {loading && (
        <div className="col-span-full flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
}

export default AllProducts;
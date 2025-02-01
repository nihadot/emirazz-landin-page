import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import genrateColor from "randomcolor";
import { useEffect, useState } from 'react'
import { useGetAllProductsQuery } from '../../features/product/productsApi'
import H2 from './components/H2';
import Description from './components/Description';
import Image from "./components/Image";
import H3 from "./components/H3";
import ArrowIconButton from './components/ArrowIconButton';


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

function DiscoverInnovativeProducts() {
    const language = useSelector((state: RootState) => state?.language?.language);

    const [page] = useState(1);
    const [products, setProducts] = useState<any[]>([]); // State to hold all blogs
    const { data } = useGetAllProductsQuery({ page, limit: 20 });



    useEffect(() => {
        if (data) {
            if (data.data.length !== 0) {
                setProducts((prev) => [...prev, ...data.data]); // Append new blogs
            }
        }

    }, [data]);

    return (

        <section className="bg-black px-4 md:px-10  lg:px-20">
            <div className="flex relative pb-0 md:pb-4 justify-center items-center pt-0 sm:pt-0">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <H2
                    className='mb-4 max-w-[670px] w-full md:mb-8 break-words'
                        text={ language === 'en' ? 'Discover Our Innovative Products' : 'اكتشف منتجاتنا المبتكرة' }
                        type='type7'
                    />

{true && <Description
                        className=' w-full mb-4 sm:mb-8'
                        type='type1'
                        text={language === 'en' ? "At Emiraaz, our products embody the perfect blend of innovation, quality, and craftsmanship. From cutting-edge technology solutions to groundbreaking real estate developments, each product is designed to meet the highest standards and fulfill your needs. Explore our diverse range of offerings and experience the excellence that defines Emiraaz." : 'في أميراز، تجسد منتجاتنا المزيج المثالي من الابتكار والجودة والحرفية. بدءًا من الحلول التقنية المتطورة وحتى التطوير العقاري الرائد، تم تصميم كل منتج لتلبية أعلى المعايير وتلبية احتياجاتك. استكشف مجموعتنا المتنوعة من العروض واستمتع بتجربة التميز الذي يميز أميراز.'}
                    />}

                </div>

            </div>

            <div id='home_section_four' className="flex gap-4 w-full overflow-x-scroll flex-nowrap pt-4 ">

                {
                    products.length > 0 && products.map((item: ProductFormValues,index:number) => {
                        return (
                            <Card key={index} item={item} />

                        )
                    })
                }

            </div>

            <div className="flex w-full pt-3 justify-center ">

<ArrowIconButton
    className=''

    link='/'
    text={language === 'en' ? 'Learn More' : 'يتعلم أكثر'}
    type='type2'
/>
</div>



        </section>
    )
}

export default DiscoverInnovativeProducts

// Define the props type for the Card component
interface CardProps {
    item: ProductFormValues;
}



const Card: React.FC<CardProps> = ({ item }) => {

    return (
        <div style={{ backgroundColor: genrateColor({ luminosity: 'bright' }) }} className='h-[400px] brightness-95 p-4 w-[300px] sm:w-[360px]  flex-none rounded-[20px]'>
            <Image
            alt={item.productTitle}
                src={item.imageLink.secure_url}
                className='mb-2 rounded-2xl h-[324px] object-cover'

            />

            <H3
            type="type2"
                text={item.productTitle}
            />
        </div>
    )
}

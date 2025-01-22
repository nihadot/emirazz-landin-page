import Image from '../../reusable/Image/Image'
import HomeJSON from "../../../data/home.json"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import genrateColor from "randomcolor";
import { rightArrow } from '../../../assets/svg'
import { IconButton } from '../../reusable/Buttons'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useGetAllProductsQuery } from '../../../features/product/productsApi'
import H2 from '../../reusable/Home/H2'
import Paragraph from '../../reusable/Home/Paragraph'


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

function ProductShowcase() {
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

        <div className="bg-black px-4 md:px-10 lg:px-20">
            <div className="flex relative pb-4 justify-center items-center pt-0 sm:pt-0">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <H2
                    className='!text-center'
                        value={HomeJSON?.section4[language as 'en' | 'ar']?.h3}
                    />

                    <Paragraph
                        value={HomeJSON?.section4[language as 'en' | 'ar']?.p}
                    />
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

            <div className="flex justify-center">
                <Link to={'our/products'}>
                    <IconButton
                        className={`my-6 ${language === 'en' ? '' : '-rotate-180'} `}
                        iconUrl={rightArrow}
                        content={language === "en" ? 'Learn More' : 'يتعلم أكثر'}

                    />
                </Link>
            </div>



        </div>
    )
}

export default ProductShowcase

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
                className=' rounded-2xl h-[324px] object-cover'

            />

            <Paragraph
                value={item.productTitle}
                className='!text-[25px] !font-bold line-clamp-1  md:!text-[25px] pt-3 capitalize leading-[30.48px] text-white md!leading-[30.48px]'
            />
        </div>
    )
}

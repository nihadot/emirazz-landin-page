import React from 'react'
import Card from './Card'
import demo from "../../../assets/images/demo.png"
import HeadingThree from '../Titles/MainHeading/HeaderThree'
import Paragraph from '../Paragraph/Paragraph'
import IconBtn from '../Buttons/IconBtn'
import { IconButton } from '../Buttons'
import { rightArrow } from '../../../assets/svg'
import { Link } from 'react-router'

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

// Define the props type for the Card component
interface CardProps {
  item: ProductFormValues;
}


const ProductCard: React.FC<CardProps> = ({ item }) => {
  return (
    
    <div className=" p-0 sm:p-6">
        <Card
        alt={item?.productTitle}
        imageUrl={item?.imageLink?.secure_url}
        imageClassName='w-full h-full object-cover'
        />

        <HeadingThree
                        className='!text-[20px] capitalize pt-4 md:pt-2 !font-medium max-w-max mb-4'
        content={item?.productTitle}
        />

        <Paragraph
                        className='!font-light line-clamp-4 !text-lg pb-0'
        content={item?.productDescription}


        />

<Link to={`/product/${item?.slugNameEn}`} state={item} className='pt-2'>
        <IconButton
        content='View All'
        iconUrl={rightArrow}
        />
        </Link>
    </div>
  )
}

export default ProductCard
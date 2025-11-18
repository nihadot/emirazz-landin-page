import React from 'react'
import Card from './Card'
import HeadingThree from '../Titles/MainHeading/HeaderThree'
import Paragraph from '../Paragraph/Paragraph'
import { IconButton } from '../Buttons'
import { rightArrow } from '../../../assets/svg'
import { Link } from 'react-router'

interface ImageLink {
  public_id: string;
  secure_url: string;
  url: string;
  width: number;
  height: number;
}

interface ProductFormValues {
  productTitle: string;
  productDescription: string;
  imageLink: ImageLink;
  slugNameEn: string;
  isComingSoon?: boolean;
}

interface CardProps {
  item: ProductFormValues;
}

const ProductCard: React.FC<CardProps> = ({ item }) => {
  const comingSoon = item?.isComingSoon;

  return (
    <div className="p-4 hover:border hover:border-white/15 rounded-xl w-[360px] h-[310px] bg-black text-white mx-auto flex flex-col">
      
      {/* Image */}
      <Card
        alt={item?.productTitle}
        imageUrl={item?.imageLink?.secure_url}
        imageClassName="w-full h-full object-cover"
        containerClassName="w-full h-[160px] rounded-lg"
      />

      {/* Title */}
      <HeadingThree
        className="!text-lg font-semibold pt-3 truncate"
        content={comingSoon ? "Coming Soon" : item?.productTitle}
      />

      {/* Description */}
      <Paragraph
        className="!font-light line-clamp-2 text-sm flex-grow"
        content={comingSoon ? "Coming soon" : item?.productDescription}
      />

      {/* CTA */}
      <div className="pt-2">
        {comingSoon ? (
          <button className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white">
            Know More
          </button>
        ) : (
          <Link to={`/product/${item?.slugNameEn}`} state={item}>
            <IconButton content="Know More" iconUrl={rightArrow} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProductCard

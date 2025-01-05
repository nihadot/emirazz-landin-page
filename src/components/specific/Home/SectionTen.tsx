import Paragraph from '../../reusable/Paragraph/Paragraph'
import HomeJSON from "../../../data/home.json"
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import { RootState } from '@reduxjs/toolkit/query'
import { useSelector } from 'react-redux'
import ProductCard from '../../reusable/Card/ProductCard'

type Props = {}

function SectionTen({ }: Props) {

    const language = useSelector((state: RootState) => state?.language?.language);


    return (
        <div className='px-4 md:px-10 lg:px-20 bg-black'>

            <div className="flex flex-col relative justify-center items-center pt-8 px-4 md:px-10 bg-black lg:px-20">
                <HeadingThree
                    className='!text-center max-w-[400] pb-4 pt-8'
                    content={HomeJSON?.section10[language]?.h3}
                />
                <Paragraph
                    className='!text-center '
                    content={HomeJSON?.section10[language]?.p}
                />
            </div>

            <div className="sm:pt-4 gap-y-16  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 items-center flex-col sm:flex-row relative justify-end">

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>

        </div>
    )
}

export default SectionTen
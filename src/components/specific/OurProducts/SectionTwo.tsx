import ProductCard from '../../reusable/Card/ProductCard'

type Props = {}

function SectionTwo({ }: Props) {


    return (
        <div className="sm:pt-4 gap-y-16 px-4 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 items-center flex-col sm:flex-row relative justify-end">

          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>

        </div>
    )
}

export default SectionTwo
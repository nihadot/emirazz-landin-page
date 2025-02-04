import { cityCentreApartment, luxuryWaterFront, modernFamilyHome } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import H2 from './components/H2'
import Description from './components/Description'
import Image from './components/Image'
import H3 from './components/H3'
import ArrowIconButton from './components/ArrowIconButton'

type Props = {}

function ExclusiveProperties({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);



    return (
        <section className="px-4 md:px-10 lg:px-20 pt-0 pb-0 overflow-hidden md:mt-0 md:mb-0  bg-black">

            <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                <H2
                    type='type2'
                    className='mb-3'
                    text={language === 'en' ? 'Exclusive Properties in Dubai' : 'عقارات حصرية في دبي'}
                />

                <Description
                    type='type2'
                    className='max-w-[1015px] pb-4 md:pb-0 w-full'
                    text={language === 'en' ? 'Explore Dubai’s finest properties, from luxurious apartments to spacious villas. Find your perfect home in prime locations today.' : 'اكتشف أرقى العقارات في دبي، بدءًا من الشقق الفاخرة وحتى الفيلات الفسيحة. ابحث عن منزلك المثالي في المواقع الرئيسية اليوم.'}
                />
            </div>


            <div className=" pb-4 md:pt-4 relative grid grid-cols-1 md:grid-cols-3 gap-3">



                <div className=" relative h-[433px]">
                    <Image
                        src={luxuryWaterFront}
                        alt={language === 'en' ? 'Luxury Waterfront Villas' : ''}
                        className='brightness-95 w-full h-full rounded-[18px]  object-cover'
                    />

                    <div className="p-5 w-full  px-4 py-4  z-30 absolute bottom-0 left-0 ">

                        <div className="bg-black px-6 py-6 rounded-xl w-full h-full">
                            <H3

                                text={language === 'en' ? 'Luxury Waterfront Villas' : 'فلل فاخرة على الواجهة البحرية'}
                                type='type1'
                            />
                            <div className=" transition-all">
                                <Description
                                    className='pt-2'
                                    text={language === 'en' ? 'Luxury waterfront villas with private pools, modern designs, ocean views, and exclusive amenities for ultimate privacy.' : 'فلل فاخرة على الواجهة البحرية مع حمامات سباحة خاصة، وتصميمات حديثة، وإطلالات على المحيط، ووسائل راحة حصرية للخصوصية المطلقة.'}
                                    type='type11'
                                />

                            </div>
                        </div>
                    </div>

                </div>



                <div className="relative h-[433px]">
                    <Image
                        src={cityCentreApartment}
                        alt={language === 'en' ? 'City Center Apartments' : 'شقق سيتي سنتر'}
                        className='brightness-95 w-full h-full rounded-[18px]  object-cover'
                    />

                    <div className="p-5 w-full  px-4 py-4  z-30 absolute bottom-0 left-0 ">

                        <div className="bg-black px-6 py-6 rounded-xl w-full h-full">
                            <H3
                                className=''
                                text={language === 'en' ? 'City Center Apartments' : 'شقق سيتي سنتر'}
                                type='type1'
                            />
                            <div className=" transition-all">
                                <Description
                                    className='pt-2'
                                    text={language === 'en' ? `Furnished apartments with skyline views, amenities,  and access to shopping and   dining dining` : 'شقق مفروشة تتمتع بإطلالات على الأفق ووسائل راحة وإمكانية الوصول إلى أماكن التسوق وتناول الطعام.'}
                                    type='type11'
                                />

                            </div>
                        </div>
                    </div>

                </div>


                <div className="relative h-[433px]">
                    <Image
                        src={modernFamilyHome}
                        alt={language === 'en' ? 'Modern Family Homes' : 'منازل الأسرة الحديثة'}
                        className='brightness-95 w-full h-full rounded-[18px]  object-cover'
                    />

                    <div className="p-5 w-full  px-4 py-4  z-30 absolute bottom-0 left-0 ">

                        <div className="bg-black px-6 py-6 rounded-xl w-full h-full">
                            <H3

                                text={language === 'en' ? 'Modern Family Homes' : 'منازل الأسرة الحديثة'}
                                type='type1'
                            />
                            <div className=" transition-all">
                                <Description
                                    className='pt-2'
                                    text={language === 'en' ? 'Spacious, modern homes in vibrant communities with gardens, modern kitchens, and nearby top-tier schools.' : 'منازل فسيحة وحديثة في مجتمعات نابضة بالحياة بها حدائق ومطابخ حديثة ومدارس قريبة من الدرجة الأولى.'}
                                    type='type11'
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="flex w-full justify-center ">

<ArrowIconButton
    className=''

    link='/'
    text={language === 'en' ? 'View All' : 'عرض الكل'}
    type='type2'
/>
</div>


        </section>

    )
}

export default ExclusiveProperties
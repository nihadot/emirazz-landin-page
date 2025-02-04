import { ourServicesImageOne, ourServicesImageTwo } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import H2 from './components/H2'
import Description from './components/Description'
import Image from './components/Image'
import H3 from './components/H3'

type Props = {}

function OurService({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);


    return (
        <section className="px-4 md:px-10 lg:px-20 pt-16 pb-0 overflow-hidden md:mt-20 md:mb-20  bg-black">

            <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                <H2
                    type='type2'
                    className='mb-3'
                    text={language === 'en' ? 'Our Services' : 'خدماتنا'}
                />

                <Description
                    type='type2'
                    className='max-w-[1015px] pb-4 md:pb-0 w-full'
                    text={language === 'en' ? 'Our commercial real estate offerings are designed to meet the needs of businesses in various sectors. From innovative office spaces to retail hubs, we create environments where businesses can thrive.' : 'تم تصميم عروضنا العقارية التجارية لتلبية احتياجات الشركات في مختلف القطاعات. بدءًا من المساحات المكتبية المبتكرة وحتى مراكز البيع بالتجزئة، نقوم بإنشاء بيئات يمكن للشركات أن تزدهر فيها.'}
                />
            </div>


            <div className="md:pb-24 pb-16 md:pt-10 relative grid grid-cols-1 md:grid-cols-2 gap-3">



                <div className=" relative h-[433px]">
                    <Image
                        src={ourServicesImageOne}
                        alt={language === 'en' ? 'Dubai Real Estate – Primary Market' : ''}
                        className='brightness-95 w-full h-full rounded-[18px]  object-cover'
                    />

                    <div className="p-5 w-full  px-4 py-4  z-30 absolute bottom-0 left-0 ">

                        <div className="bg-black px-6 py-6 rounded-xl w-full h-full">
                            <H3

                                text={language === 'en' ? 'Dubai Real Estate – Primary Market' : 'مساحات البيع بالتجزئة'}
                                type='type1'
                            />
                            <div className=" transition-all">
                                <Description
                                    className='pt-2'
                                    text={language === 'en' ? 'Explore Dubai’s primary market with exclusive off-plan projects from top developers like Emaar and Nakheel, offering expert guidance, direct pricing, and high investment potential.' : 'استمتع بإقامات فاخرة قصيرة الأمد مع الشقق والفيلات المفروشة بالكامل، والتي تقدم خدمات الكونسيرج والمواقع الرئيسية وفترات الإيجار المرنة لراحتك.'}
                                    type='type11'
                                />

                            </div>
                        </div>
                    </div>

                </div>



                <div className="relative h-[433px]">
                    <Image
                        src={ourServicesImageTwo}
                        alt={language === 'en' ? 'Retail Spaces' : ''}
                        className='brightness-95 w-full h-full rounded-[18px]  object-cover'
                    />

                    <div className="p-5 w-full  px-4 py-4  z-30 absolute bottom-0 left-0 ">

                        <div className="bg-black px-6 py-6 rounded-xl w-full h-full">
                            <H3

                                text={language === 'en' ? 'Retail Spaces' : 'مساحات البيع بالتجزئة'}
                                type='type1'
                            />
                            <div className=" transition-all">
                                <Description
                                    className='pt-2'
                                    text={language === 'en' ? 'Experience luxury short-term stays with fully furnished apartments and villas, offering concierge services, prime locations, and flexible rental durations for your convenience.' : 'استمتع بإقامات فاخرة قصيرة الأمد مع الشقق والفيلات المفروشة بالكامل، والتي تقدم خدمات الكونسيرج والمواقع الرئيسية وفترات الإيجار المرنة لراحتك.'}
                                    type='type11'
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>

    )
}

export default OurService
import { businessImage2, businessImage4, empoweringVision, fuelingTomorrowsInnovations } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import H2 from './components/H2'
import Description from './components/Description'
import Image from './components/Image'
import H3 from './components/H3'
import IconButton from './components/IconButton'
import { Link } from 'react-router'
type Props = {}

function EmpoweringBusinessOpportunities({ }: Props) {

    const language = useSelector((state: RootState) => state?.language?.language);

    const data = [
        {
            id: 1,
            titleEn: 'Partnership',
            description: 'Join forces with industry leaders and leverage our network to achieve shared success',
            link: '/sponsorship',
            image: businessImage2,
            titleAr:"شراكة",
            descriptionAr:"انضم إلى قادة الصناعة واستفد من شبكتنا لتحقيق النجاح المشترك",
        },
        {
            id: 2,
            titleEn: 'Sponsorship',
            description: 'Explore opportunities to sponsor events and initiatives that align with your brand.',
            link: '/sponsorship',
            titleAr:"الرعاية",
            descriptionAr:"استكشف الفرص المتاحة لرعاية الأحداث والمبادرات التي تتوافق مع علامتك التجارية.",
            image: empoweringVision,
        }
        , {
            id: 3,
            titleEn: 'Investment',
            titleAr:'استثمار',
            descriptionAr:'اكتشف استراتيجياتنا الاستثمارية وكيف يمكننا مساعدتك على تنمية ثروتك.',
            description: 'Discover our investment strategies and how we can help you grow your wealth.',
            link: '/investment',
            image: businessImage4,

        },
        {
            id: 4,
            titleEn: 'Startup',
            titleAr:'بدء',
            descriptionAr:"احصل على الدعم والموارد التي تحتاجها لتحويل فكرة شركتك الناشئة إلى حقيقة.",
            description: 'Get the support and resources you need to turn your startup idea into a reality.',
            link: '/startup',
            image: fuelingTomorrowsInnovations,

        }
    ]


    return (
        <section className=" pt-16 pb-10 overflow-hidden md:mt-40 md:mb-20  bg-black px-4 md:px-10 lg:px-20">

            <div className="flex py-0  lg:flex-row flex-col justify-center sm:gap-8 items-start">
                <H2 type='type1' className='mb-4 flex-1 md:mb-8 break-words' text={language === 'en' ? 'Empowering Business Opportunities' : `تمكين الفرص التجارية`} />
                <Description
                    className='flex-1 text-start md:text-right w-full mb-4 sm:mb-8'
                    type='type8'
                    text={language === 'en' ? "At Emiraaz, we build partnerships, support innovation, and drive growth. Our Business division focuses on Partners, Sponsorship, Investment, and Startups, offering opportunities for collaboration and success." : 'في أميراز، نقوم ببناء الشراكات ودعم الابتكار ودفع عجلة النمو. يركز قسم الأعمال لدينا على الشركاء والرعاية والاستثمار والشركات الناشئة، مما يوفر فرصًا للتعاون والنجاح.'}
                />
            </div>

            <div className="md:pb-24 pb-16 md:pt-2 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

                {
                    data.length > 0 && data.map((item, index) => {
                        return (
                            <Link to={item.link}>

                            <div className="h-[280px] group relative md:h-[433px]">
                                <Image
                                    key={index}
                                    src={item.image}
                                    alt={language === 'en' ? item.titleEn : item.titleAr}
                                    className='brightness-50 w-full h-full rounded-[18px]  object-cover'
                                />

                                <div className="w-full px-6 py-6  z-30 absolute bottom-0 left-0 ">
                                    <H3
                                        text={ language === 'en' ? item.titleEn : item.titleAr}
                                        type='type7'
                                    />
                                    <div className="group-hover:block hidden transition-all">
                                        <Description
                                            className='pt-2'
                                            text={language === 'en' ? item.description : item.descriptionAr}
                                            type='type11'
                                        />
                                        <div className="">

                                            <IconButton
                                                link={item.link}
                                                className=''
                                                text={ language === 'en' ?  'Know More' : 'اعرف المزيد'}
                                                type='type1'
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>

                        )
                    })
                }




                <div className="bg-[#FE13848A] absolute -right-40 -bottom-4 w-40 h-40 rounded-full blur-xl opacity-55"></div>
                <div className="bg-[#26FE138A] absolute -left-40 -bottom-4 w-40 h-40 rounded-full blur-xl opacity-55"></div>

            </div>


        </section>
    )
}

export default EmpoweringBusinessOpportunities



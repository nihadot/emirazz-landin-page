import { useEffect, useState } from 'react'
import Card from '../reusable/Card/Card'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { useGetAllPartnersQuery } from '../../features/partners/partnersApi'
import Description from './components/Description'
import H1 from './components/H1'

type Props = {}




export interface IImageLink {
    public_id: string;
    secure_url: string;
    url: string;
    width: number;
    height: number;
}

interface PartnersFormValues {
    name: string;
    slug: string;
    imageLink: IImageLink
}

function OurPartners({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);


    const [page] = useState(1);
    const { data: partnersData } = useGetAllPartnersQuery({ page, limit: 10 });

    const [data, setData] = useState([]);

    useEffect(() => {
        if (partnersData) {
            setData(partnersData?.data);
        }

    }, [partnersData]);



    return (
        <div className="flex flex-col relative justify-center pb-4 items-center pt-20 md:pt-28 px-4 md:px-10 lg:px-20">
            {/*  */}

            <section className="flex px-4  md:px-10 lg:px-20  relative pb-4 justify-center items-center">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <H1>
                        {language === 'en' ? 'Our Proud Partners' : 'شركاؤنا الفخورون'}
                    </H1>


                    <Description
                        type='type2'
                        className='max-w-[1015px] w-full'
                        text={language === 'en' ? 'At Emiraaz, we build strategic partnerships that drive mutual growth and success. By collaborating with organizations across industries, we create new opportunities and enhance our collective impact. Partner with us to shape a brighter, more innovative future.' : 'في أميراز، نقوم ببناء شراكات استراتيجية تدفع النمو والنجاح المتبادل. ومن خلال التعاون مع المنظمات عبر الصناعات، فإننا نخلق فرصًا جديدة ونعزز تأثيرنا الجماعي. كن شريكًا معنا لتشكيل مستقبل أكثر إشراقًا وابتكارًا.'}
                    />
                </div>


            </section>



            <section className="grid grid-cols-2 sm:grid-cols-4 w-full gap-5 py-0 md:py-8">

                {
                    data?.length > 0 && data?.map((item: PartnersFormValues, index: number) => {
                        return (

                            <Card imageClassName='' alt={item.name} imageUrl={item?.imageLink?.secure_url} key={index} />



                        )
                    })
                }

            </section>
        </div>
    )
}

export default OurPartners
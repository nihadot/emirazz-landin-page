import React, { useEffect, useState } from 'react'
import HeadingOne from '../../reusable/Titles/MainHeading/HeadingOne'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Card from '../../reusable/Card/Card'
import { rightArrow } from '../../../assets/svg'
import { IconButton } from '../../reusable/Buttons'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import partnersJSON from "../../../data/partners.json"
import { useGetAllPartnersQuery } from '../../../features/partners/partnersApi'
import { Link } from 'react-router'

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

function SectionOne({}: Props) {

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
    <div className="flex flex-col relative justify-center items-center pt-20 px-4 md:px-10 lg:px-20">
    {/*  */}

    <div className="relative text-center pb-20 justify-center items-center flex-1 pe-4 flex flex-col ">

        <HeadingOne
            className='text-[45px] max-w-max mb-4'
            content={partnersJSON.section1[language].h1}


        />

        <Paragraph
            className='!font-light !max-w-[900px] text-center !text-lg'
            content={partnersJSON.section1[language].p}

        />
    </div>



<div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-5 py-0 md:py-8">

    {
                                        data?.length > 0 && data?.map((item: PartnersFormValues, index: number) => {
                                                return (

                                                    <Card alt={item.name} imageUrl={item?.imageLink?.secure_url} key={index} />



                                                )
                                        })
                                }

</div>


<div className="pt-8">
{/* <Link to={'/our'} >
<IconButton
iconUrl={rightArrow}
content={language === "en" ? 'View All' : 'عرض المزيد'}
/>
</Link> */}
</div>
    
    


</div>
  )
}

export default SectionOne
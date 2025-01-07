import { useEffect, useState } from 'react'
import Image from '../../reusable/Image/Image'
import { useGetAllGalleryQuery } from '../../../features/gallery/galleryApi'

type Props = {}



export interface IImageLink {
        public_id: string;
        secure_url: string;
        url: string;
        width: number;
        height: number;
}

interface GalleryFormValues {
        name: string;
        slug: string;
        imageLink: IImageLink
}


function SectionTwo({ }: Props) {

useEffect(()=>{
        window.scrollTo(0,0)
},[])

        const [page] = useState(1);
        const { data: galleryData } = useGetAllGalleryQuery({ page, limit: 20 });

        const [data, setData] = useState([]);

        useEffect(() => {
                if (galleryData) {
                        setData(galleryData?.data);
                }

        }, [galleryData]);



        return (
                <div className='px-4  md:px-10 relative lg:px-20 pt-8 md:pt-20'>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">


                                {
                                        data?.length > 0 && data?.map((item: GalleryFormValues, index: number) => {
                                                return (

                                                        <Image
                                                                alt={item?.name}
                                                                src={item?.imageLink?.secure_url}
                                                                className='h-[270px]  w-full object-cover rounded-[15px]'
                                                        />


                                                )
                                        })
                                }


                        </div>
                </div>
        )
}

export default SectionTwo
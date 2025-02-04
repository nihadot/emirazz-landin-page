import { aboutImage1 } from '../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Image from './components/Image'
import H2 from './components/H2'
import H3 from './components/Button'

type Props = {}

function DiscoverJourney({ }: Props) {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <>


            <section className='px-4 relative items-center flex-col-reverse md:flex-row flex md:px-10 lg:px-20 pt-28'>

                <div className={` flex-1 ${language === 'ar' ? 'md:pt-20' : ''} md:px-16 px-0 justify-center flex flex-col h-full items-center md:items-center w-full `}>

                    <H3
                        className='pb-0'
                        type='type1'
                        text={language === 'en' ? 'About Us' : 'معلومات عنا'}
                    />
                    <H2
                        text={language === 'en' ? 'Discover Our Journey, Values, and Commitment to Excellence' : 'اكتشف رحلتنا وقيمنا والتزامنا بالتميز'}
                        type='type1'
                        className='w-full md:mb-2 text-center max-w-[825px]'
                    />
                </div>
            </section>


            <section className='px-4 mt-6 md:px-10 lg:px-20 w-full h-[550px] '>
                <div className="relative w-full h-full rounded-[20px]">
                    <Image
                        alt={language === 'en' ? 'Explore the World of Art at Emiraaz' : 'اكتشف عالم الفن في أميراز'}
                        className='w-full h-full rounded-[20px] brightness-75 object-cover '
                        src={aboutImage1}
                    />



                </div>
            </section>
        </>

    )
}

export default DiscoverJourney
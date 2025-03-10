import { empoweringInnovation } from '../../assets/images'
import Image from '../reusable/Image/Image'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ContactJSON from "../../data/contactUs.json"
import { useState } from 'react'
import axios, { AxiosError } from 'axios'
import { baseUrl } from '../../api'
import toast, { Toaster } from 'react-hot-toast'
import H2 from './components/H2'
import Description from './components/Description'

type Props = {}

function HeroSection({ }: Props) {
    const language = useSelector((state: RootState) => state.language.language);


    return (
        <>
            <section className="pt-10 flex flex-col justify-center items-center px-4 md:px-10 lg:px-20">
                <Description
                    type='type2'
                    className='text-center max-w-[1015px] pb-0 w-full'
                    text={language === 'en' ? 'Let Us Know We Can Help' : 'أخبرنا أننا نستطيع مساعدتك'}
                />
                <H2
                    type='type2'
                    className='mb-3 text-center'
                    text={language === 'en' ? 'Contact Our Friendly Team' : 'اتصل بفريقنا الودود'}
                />

            </section>

            <ContactUs />

        </>
    )
}

export default HeroSection

interface FormData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    message: string;
}



interface ErrorResponse {
    message: string;
}

function ContactUs() {
    const language = useSelector((state: RootState) => state.language.language);

    const [loading, setLoading] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormData>({ firstName: "", lastName: "", message: "", phoneNumber: "" })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(`${baseUrl}/contact-us`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            toast.success('Your message has been sent successfully!');

            setFormData({
                firstName: "",
                lastName: "",
                message: "",
                phoneNumber: ""
            });



        } catch (error) {


            const axiosError = error as AxiosError<ErrorResponse>;
            toast.error(axiosError?.response?.data?.message || axiosError?.message)


        } finally {
            setLoading(false);
        }
    }

    const handleChange = (e: any) => {
        setFormData({
            ...formData, // Spread the current state of formData
            [e.target.name]: e.target.value // Update the specific field using the input's name as the key
        });
    };
    return (
        <section className='flex sm:flex-row flex-col gap-8 md:mt-8 px-4 md:px-10 lg:px-20'>
            <Image
                alt={ContactJSON.section1[language as 'en' | 'ar'].h1}
                className='rounded-[20px] m-auto w-[432px] h-[512px] object-cover'
                src={empoweringInnovation}
            />

            <form onSubmit={handleSubmit} className=' w-full mt-12 font-sfmedium'>
            <H2
                    type='type2'
                    className='mb-3 text-start'
                    text={language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
                />
                <div className="flex gap-4 lg:flex-row flex-col">
                    <input name='firstName' value={formData.firstName} onChange={handleChange} disabled={loading} type="text" required placeholder={language === "en" ? 'Enter your First Name' : 'أدخل اسمك الأول'} className='w-full text-sm text-[#666666] h-[53px] px-6 border-none outline-none rounded-[10px]' />
                    <input name='lastName' value={formData.lastName} onChange={handleChange} disabled={loading} type="text" required placeholder={language === "en" ? 'Enter your Last Name' : 'أدخل اسمك الأخير'} className='w-full text-sm text-[#666666] h-[53px] px-4 border-none outline-none rounded-[10px]' />
                </div>

                <div className="flex pt-4 gap-4">
                    <input name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} disabled={loading} type="text" required placeholder={language === "en" ? 'Enter Your Phone' : 'أدخل رقم هاتفك'} className='w-full text-sm text-[#666666] h-[53px] px-4 border-none outline-none rounded-[10px]' />
                </div>


                <div className="flex pt-4 gap-4">
                    <textarea onChange={handleChange} value={formData.message} disabled={loading} required placeholder={language === 'en' ? 'Your Message' : 'رسالتك'} className='w-full text-sm text-[#666666] h-[170px] p-4 border-none outline-none rounded-[10px]' name="message" id=""></textarea>
                    {/* <input type="text" placeholder='Enter' className='w-full h-[53px] ps-3 border-none outline-none rounded-[10px]' /> */}
                </div>

                <div className="flex justify-end">

                    <button className='w-[100px] h-[46px] text-[17px] font-semibold bg-white text-base rounded-[5px] mt-4 font-sfmedium'>{language === 'en' ? !loading ? 'Sent' : 'sending...' : !loading ? 'يرسل' : '...'}</button>
                </div>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </section>
    )
}

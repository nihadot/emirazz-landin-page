import { useEffect, useState } from 'react'
import Description from './components/Description'
import H1 from './components/H1'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

export interface IImageLink {
  public_id: string
  secure_url: string
  url: string
  width: number
  height: number
}

interface PartnersFormValues {
  name: string
  slug: string
  imageLink: IImageLink
}

function OurPartners() {
  const language = useSelector((state: RootState) => state.language.language)

  const [partners, setPartners] = useState<PartnersFormValues[]>([])

  useEffect(() => {
    fetch('/data/partners.json')
      .then((res) => res.json())
      .then((json) => {
        console.log('Partners data:', json)
        setPartners(json.partners) // 👈 use the partners array
      })
      .catch((err) => console.error('Error loading partners.json', err))
  }, [])

  return (
    <div className="flex flex-col relative justify-center pb-4 items-center pt-20 md:pt-28 px-4 md:px-10 lg:px-20">
      <section className="flex px-4 md:px-10 lg:px-20 relative pb-4 justify-center items-center">
        <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">
          <H1>
            {language === 'en' ? 'Our Proud Partners' : 'شركاؤنا الفخورون'}
          </H1>

          <Description
            type="type2"
            className="max-w-[1015px] w-full"
            text={
              language === 'en'
                ? 'At Emiraaz, we build strategic partnerships that drive mutual growth and success. By collaborating with organizations across industries, we create new opportunities and enhance our collective impact. Partner with us to shape a brighter, more innovative future.'
                : 'في أميراز، نقوم ببناء شراكات استراتيجية تدفع النمو والنجاح المتبادل. ومن خلال التعاون مع المنظمات عبر الصناعات، فإننا نخلق فرصًا جديدة ونعزز تأثيرنا الجماعي. كن شريكًا معنا لتشكيل مستقبل أكثر إشراقًا وابتكارًا.'
            }
          />
        </div>
      </section>

 {/* Logos grid */}
<section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 w-full gap-10 py-0 md:py-8">
  {partners?.length > 0 &&
    partners.map((item, index) => (
      <div
        key={index}
        className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md grayscale hover:grayscale-0 transition-all duration-300"
        style={{ minHeight: "120px" }} 
      >
        <img
          src={item.imageLink.secure_url}
          alt={item.name}
          className="object-contain max-h-28" 
        />
      </div>
    ))}
</section>


    </div>
  )
}

export default OurPartners

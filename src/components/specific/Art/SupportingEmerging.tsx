import {  supportingEmergingImages } from '../../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import Description from './components/Description'
import Image from './components/Image'
import H2 from './components/H2'

type Props = {}

function SupportingEmerging({}: Props) {

  const language = useSelector((state: RootState) => state.language.language);



    return (
      <section className='px-4 md:mt-40 mt-12 md:px-10 lg:px-20 w-full h-[700px]'>
      <div className="relative w-full h-full">
          <Image
              alt={language === 'en' ? 'Supporting Emerging Artists' : 'دعم الفنانين الناشئين'}
              className='w-full h-full  brightness-50 object-cover rounded-[20px]'
              src={supportingEmergingImages}
          />
          <div className="px-4 md:px-20 flex flex-col h-full  items-start justify-center w-full absolute left-0 top-0 z-30">
          <H2
        type='type3'
        className='mb-3 max-w-[800px] text-start !text-[40px] md:!text-[55px]'
        text={language === 'en' ? 'Supporting Emerging Artists' : 'دعم الفنانين الناشئين'}
      />

              <Description
                  type='type2'
                  className='max-w-[700px] w-full text-start py-2'
                  text={language === 'en' ? "Emiraaz is dedicated to discovering and supporting emerging talent in the art world. Through our various platforms, we provide opportunities for young artists to showcase their work, receive mentorship, and gain exposure to larger audiences. We believe that investing in the next generation of creatives is vital to ensuring the continued growth and innovation of the arts." : 'أميراز ملتزم باكتشاف ودعم المواهب الناشئة في عالم الفن. من خلال منصاتنا المتنوعة، نوفر الفرص للفنانين الشباب لعرض أعمالهم وتلقي الإرشاد والتعرف على جماهير أكبر. نحن نؤمن بأن الاستثمار في الجيل القادم من المبدعين أمر حيوي لضمان استمرار النمو والابتكار في الفنون.'}
              />
    <div className="bg-[#FE133D] absolute -bottom-36 -left-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>
      <div className="bg-[#13B7FE] -right-32 absolute -top-20 w-40 h-40 rounded-full blur-xl opacity-55"></div>




             
          </div>

      </div>
  </section>
  )
}

export default SupportingEmerging
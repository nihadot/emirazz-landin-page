import { artAndTechnologyCollaboration, publicArtInstallation, theEmpiorSculpture } from '../../../assets/images'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import H2 from './components/H2'
import Image from './components/Image'
import H3 from './components/H3'

type Props = {}

function FeaturedArtProject({ }: Props) {
  const language = useSelector((state: RootState) => state.language.language);



  return (
    <section className="px-4 md:px-10 lg:px-20 pt-0 pb-0 overflow-hidden md:mt-0 md:mb-0  bg-black">

      <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

        <H2
          type='type4'
          className='mb-3'
          text={language === 'en' ? 'Featured Art Projects' : 'المشاريع الفنية المميزة'}
        />


      </div>


      <div className=" pb-4 md:pt-4 relative grid grid-cols-1 md:grid-cols-3 gap-3">



        <div className=" relative h-[433px]">
          <Image
            src={artAndTechnologyCollaboration}
            alt={language === 'en' ? 'The Emiraaz Sculpture Series' : 'سلسلة النحت أميراز'}
            className='brightness-95 w-full h-full rounded-[18px]  object-cover'
          />

          <div className="p-5 w-full  px-4 py-4  z-30 absolute bottom-0 left-0 ">

            <div className="bg-black px-6 py-4 rounded-xl w-full h-full">
              <H3

                text={language === 'en' ? 'The Emiraaz Sculpture Series' : 'سلسلة النحت أميراز'}
                type='type2'
              />

            </div>
          </div>

        </div>



        <div className="relative h-[433px]">
          <Image
            src={publicArtInstallation}
            alt={language === 'en' ? 'Art and Technology Collaboration' : 'التعاون الفني والتكنولوجي'}
            className='brightness-95 w-full h-full rounded-[18px]  object-cover'
          />

          <div className="p-5 w-full  px-4 py-4  z-30 absolute bottom-0 left-0 ">

            <div className="bg-black px-6 py-4 rounded-xl w-full h-full">
              <H3
                className=''
                text={language === 'en' ? 'Art and Technology Collaboration' : 'التعاون الفني والتكنولوجي'}
                type='type2'
              />

            </div>
          </div>

        </div>


        <div className="relative h-[433px]">
          <Image
            src={theEmpiorSculpture}
            alt={language === 'en' ? 'Public Art Installations' : 'المنشآت الفنية العامة'}
            className='brightness-95 w-full h-full rounded-[18px]  object-cover'
          />

          <div className="p-5 w-full  px-4 py-4  z-30 absolute bottom-0 left-0 ">

            <div className="bg-black px-6 py-4 rounded-xl w-full h-full">
              <H3

                text={language === 'en' ? 'Public Art Installations' : 'المنشآت الفنية العامة'}
                type='type1'
              />

            </div>
          </div>

        </div>
      </div>


      <div className="flex w-full justify-center ">

        {/* <ArrowIconButton
className=''

link='/'
text={language === 'en' ? 'View All' : 'عرض الكل'}
type='type2'
/> */}
      </div>


    </section>
  )
}

export default FeaturedArtProject
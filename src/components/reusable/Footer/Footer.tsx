import HeaderSix from '../Titles/MainHeading/HeaderSix'
import HeaderFive from '../Titles/MainHeading/HeaderFive'
import { footer_navlink_about, footer_navlink_business, footer_navlink_our_products } from '../../../data'
import Image from '../Image/Image'
import { linkedin, thread, x, youtube } from '../../../assets/svg'
import { Link, Links } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
type Props = {

}

function Footer({ }: Props) {

  const language = useSelector((state: RootState) => state?.language?.language);


  return (
    <footer className='px-4 pt-40 relative h-full md:px-20 overflow-hidden bg-black '>

      <div className="my-12 grid grid-cols-2 md:grid-cols-5 pe-0 md:pe-60">
        <div className="">


          <Link to={'/about'} >
            <HeaderFive
              content={ language  === 'en' ? 'About' : 'عن'}
              className='mb-4'
            />
          </Link>

          {footer_navlink_about.length > 0 && footer_navlink_about.map((item) => {
            return (
              <Link to={item.link}>
              <HeaderSix
                content={ language  === 'en' ? item.nameEn : item.nameAr}
                key={item.id}
                />
                </Link>
            )
          })}

        </div>


        <div className="pt-0 md:pt-0">


          <HeaderFive
            content={ language  === 'en' ? 'Business' : 'عمل'}

            className='mb-4'
          />
          {footer_navlink_business.length > 0 && footer_navlink_business.map((item) => {
            return (
              <Link to={item.link}>

              <HeaderSix
              content={ language  === 'en' ? item.nameEn : item.nameAr}
              key={item.id}
              />
              </Link>
            )
          })}

        </div>



        <div className="pt-14 md:pt-0">


          <HeaderFive
            content={ language  === 'en' ? 'Our Proudcts' : 'منتجاتنا'}

            className='mb-4'
          />
          {footer_navlink_our_products.length > 0 && footer_navlink_our_products.map((item) => {
            return (
              <HeaderSix
              content={ language  === 'en' ? item.nameEn : item.nameAr}
              key={item.id}
              />
            )
          })}

        </div>



        <div className="pt-14 md:pt-0 ">


          <HeaderFive
              content={ language  === 'en' ? 'Scale Up By Emiraaz' : 'توسيع نطاق طيران الإمارات'}
          
            className='mb-4'
          />


        </div>



        <div className="pt-4 md:pt-0">


          <HeaderFive
            content={ language  === 'en' ? 'Art' : 'فن'}
            
            className='mb-4'
          />


        </div>

      </div>


          <Link to={'/technology'}>
      <HeaderFive
            content={ language  === 'en' ? 'Technology' : 'تكنولوجيا'}
            className='mb-4' />
            </Link>

      <HeaderFive 
            content={ language  === 'en' ? 'Real Estate' : 'العقارات'}
       className='mb-4' />
      <HeaderFive content={language === 'en' ? 'Founder' : 'مؤسس'} className='mb-4' />
      <HeaderFive content={language === 'en' ? 'Media' : 'وسائط'} className='mb-4' />

      <div className="flex gap-12 mb-4">
        <HeaderSix content={language === 'en' ? 'News' : 'أخبار'} />
        <HeaderSix content={language === 'en' ? 'Gallery' : 'معرض الصور'} />
        <HeaderSix content={ language === 'en'? 'Blog' : 'مدونة'} />
      </div>

      <HeaderFive content={ language === 'en' ? 'Contact' : 'اتصال'} className='mb-20' />

      <div className=" flex md:flex-row flex-col items-center  justify-between">
        <div className="">
          <HeaderFive content='Follow Us' className='!text-lg text-center md:text-start mb-4 md:mb-0' />
          <div className="flex gap-3">
            {/* <Image
              src={instagram}
              alt='instagram'
            />
            <Image
            className='w-12 object-cover rounded-full h-12 bg-white'
              src={facebook}
              alt='facebook'
            /> */}
            <Image
            className=''
              src={linkedin}
              alt='linkedin'
            />
            <Image
            className=''

              src={x}
              alt='x platform'
            />
            <Image
            className=''

              src={thread}
              alt='thread'
            />
            <Image
            className=''

              src={youtube}
              alt='youtube'
            />
          </div>
        </div>

        <div className="flex items-end">
          <HeaderFive content='Copyright ⓒ emiraaz.com' className='mb-4 !font-light !text-sm' />

        </div>
      </div>

    </footer>
  )
}

export default Footer
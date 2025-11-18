import HeaderSix from '../Titles/MainHeading/HeaderSix'
import HeaderFive from '../Titles/MainHeading/HeaderFive'
import { footer_navlink_about, footer_navlink_business, footer_navlink_our_products } from '../../../../public/data'
import Image from '../Image/Image'
import {  facebook, instagram, linkedin, thread, x, youtube } from '../../../assets/svg'
import { Link } from 'react-router'
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
               item.link && <Link to={item.link}>
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
              item.link && <Link to={item.link}>

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
            content={ language  === 'en' ? 'Our Products' : 'منتجاتنا'}

            className='mb-4'
          />
          {footer_navlink_our_products.length > 0 && footer_navlink_our_products.map((item) => {
            return (
                            item.link && <Link to={item.link}>

              <HeaderSix
              content={ language  === 'en' ? item.nameEn : item.nameAr}
              key={item.id}
              />
                            </Link>

            )
          })}

        </div>


<div className="pt-14 md:pt-0">
  <Link to="/scaleup">
    <HeaderFive
      content={
        language === "en"
          ? "Scale Up By Emiraaz"
          : "توسيع نطاق طيران الإمارات"
      }
      className="mb-4"
    />
  </Link>
</div>


        <div className="pt-4 md:pt-0 pl-4">
  <Link to="/art">


          <HeaderFive
            content={ language  === 'en' ? 'Art' : 'فن'}
            
            className='mb-4'
          />

  </Link>

        </div>

      </div>


          <Link to={'/technology'}>
      <HeaderFive
            content={ language  === 'en' ? 'Technology' : 'تكنولوجيا'}
            className='mb-4' />
            </Link>

            <Link to={'/realestate'}>
      <HeaderFive 
            content={ language  === 'en' ? 'Real Estate' : 'العقارات'}
            className='mb-4' />
            </Link>

            <Link to={'/about-founder'}>
      <HeaderFive content={language === 'en' ? 'Founder' : 'مؤسس'} className='mb-4' />
            </Link>
            <Link to={'/'}>
      <HeaderFive content={language === 'en' ? 'Media' : 'وسائط'} className='mb-4' />
            </Link>

     <div className="flex gap-12 mb-4">
  <Link to="/newsall">
    <HeaderSix content={language === "en" ? "News" : "أخبار"} />
  </Link>

  <Link to="/gallery">
    <HeaderSix content={language === "en" ? "Gallery" : "معرض الصور"} />
  </Link>

  <Link to="/blogall">
    <HeaderSix content={language === "en" ? "Blog" : "مدونة"} />
  </Link>
</div>

      <Link to={'/contactus'}>
      <HeaderFive content={ language === 'en' ? 'Contact' : 'اتصال'} className='mb-20' />
      </Link>

      <div className="pb-10 flex md:flex-row flex-col items-center  justify-between">
        <div className="">
          <HeaderFive content='Follow Us' className='!text-lg text-center md:text-start mb-4 md:mb-0' />
          <div className="flex gap-3 pb-3 md:py-3 pt-0 md:pt-3">
            {/* <Image
              src={instagram}
              alt='instagram'
            />
            <Image
            className='w-12 object-cover rounded-full h-12 bg-white'
              src={facebook}
              alt='facebook'
            /> */}

<Link  target='_blank' to={'https://www.linkedin.com/company/emiraazgroup/'} >
            <div className="bg-white rounded-full w-7 h-7 p-1.5">
            <Image
            className='object-cover'
            src={linkedin}
            alt='linkedin'
            />
            </div>
            </Link>


<Link  target='_blank' to={'https://x.com/ashiqemiraaz'} >
            <div className="bg-white rounded-full w-7 h-7 p-1.5">
            <Image
            className='object-cover'
            src={x}
            alt='twitter'
            />
            </div>
            </Link>


            <Link  target='_blank' to={'/'} >

            <div className="bg-white rounded-full w-7 h-7 p-1.5">
            <Image
            className='object-cover'
            src={thread}
            alt='thread'
            />
            </div>
            </Link>


            <Link  target='_blank' to={'/'} >

            <div className="bg-white rounded-full w-7 h-7 p-1.5">
            <Image
            className='object-cover'
            src={youtube}
            alt='youtube'
            />
            </div>
           </Link>



           <Link  target='_blank' to={'https://www.instagram.com/emiraazdubai?igsh=YzljYTk1ODg3Zg=='} >

            <div className="bg-white rounded-full w-7 h-7 p-1.5">
            <Image
            className='object-cover'
            src={instagram}
            alt='instagram'
            />
            </div>
            </Link>



            <Link target='_blank' to={'https://m.facebook.com/emiraazdubai/'} >



            <div className="bg-white rounded-full w-7 h-7 p-[9px] items-center flex justify-center">
            <Image
            className='object-cover'
            src={facebook}
            alt='facebook'
            />
            </div>
            </Link>


    

            {/*  */}
          </div>
        </div>

        <div className="flex items-end ">
          <HeaderFive content='Copyright ⓒ emiraaz.com' className='mb-4 !font-light !text-sm' />

        </div>
      </div>

    </footer>
  )
}

export default Footer
import React from 'react'
import HeaderSix from '../Titles/MainHeading/HeaderSix'
import HeaderFive from '../Titles/MainHeading/HeaderFive'
import { footer_navlink, footer_navlink_about, footer_navlink_business, footer_navlink_our_products } from '../../../data'
import Image from '../Image/Image'
import {   linkedin, thread, x, youtube } from '../../../assets/svg'
import { Link } from 'react-router'
type Props = {

}

function Footer({ }: Props) {
  return (
    <footer className='px-4 pt-40 relative h-full md:px-20 overflow-hidden bg-black '>

      <div className="my-12 grid grid-cols-2 md:grid-cols-5 pe-0 md:pe-60">


        <div className="">


<Link to={'/about'} >
          <HeaderFive
            content='About'
            className='mb-4'
          />
</Link>

          {footer_navlink_about.length > 0 && footer_navlink_about.map((item) => {
            return (
              <HeaderSix
                content={item.name}
                key={item.id}
              />
            )
          })}

        </div>


        <div className="pt-0 md:pt-0">


          <HeaderFive
            content='Business'
            className='mb-4'
          />
          {footer_navlink_business.length > 0 && footer_navlink_business.map((item) => {
            return (
              <HeaderSix
                content={item.name}
                key={item.id}
              />
            )
          })}

        </div>



        <div className="pt-14 md:pt-0">


          <HeaderFive
            content='Our Proudcts'
            className='mb-4'
          />
          {footer_navlink_our_products.length > 0 && footer_navlink_our_products.map((item) => {
            return (
              <HeaderSix
                content={item.name}
                key={item.id}
              />
            )
          })}

        </div>



        <div className="pt-14 md:pt-0 ">


          <HeaderFive
            content='Scale Up By Emiraaz'
            className='mb-4'
          />


        </div>



        <div className="pt-4 md:pt-0">


          <HeaderFive
            content='Art'
            className='mb-4'
          />


        </div>

      </div>



      <HeaderFive content='Technology' className='mb-4' />
      <HeaderFive content='Real Estate' className='mb-4' />
      <HeaderFive content='Founder' className='mb-4' />
      <HeaderFive content='Media' className='mb-4' />

      <div className="flex gap-12 mb-4">
        <HeaderSix content={'News'} />
        <HeaderSix content={'Gallery'} />
        <HeaderSix content={'Blog'} />
      </div>

      <HeaderFive content='Contact' className='mb-20' />

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
              src={linkedin}
              alt='linkedin'
            />
            <Image
              src={x}
              alt='x platform'
            />
            <Image
              src={thread}
              alt='thread'
            />
            <Image
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
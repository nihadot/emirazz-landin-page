import React from 'react'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import Image from '../../components/reusable/Image/Image'
import { empoweringInnovation } from '../../assets/images'
import HeadingTwo from '../../components/reusable/Titles/MainHeading/HeadingTwo'
import Paragraph from '../../components/reusable/Paragraph/Paragraph'
import BlogCard from '../../components/reusable/BlogCard/BlogCard'

type Props = {}

function News({ }: Props) {
  return (
    <div className="m-auto max-w-[1440px]">


      <Header />

      <div className="px-4 pt-10 md:flex-row flex-col gap-20 flex md:px-10 relative lg:px-20 bg-black">

        <BlogBody />
        <div className="flex gap-6 flex-1 flex-col">

          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>


      {/* <SectionOne/> */}
      {/* // <SectionTwo/> */}
      {/* // <SectionNine/> */}
      <Footer />
    </div>
  )
}

export default News




function BlogBody() {
  return (
    <div className='max-w-[772px] w-full'>

      <Image
        src={empoweringInnovation}
        className='w-full rounded-[20px] h-[512px]'
      />

      <HeadingTwo
        className='pt-4'
        content='Discover the Essence of Luxury Living: Your Guide to Dubai Real Estate'
      />

      <Paragraph
        className='!text-sm'
        content='Date 18 - 07 - 2023'
      />

      <Paragraph
        className='!text-base pt-4'
        content="Welcome to the gateway of opulence, where the skyline echoes innovation and architectural marvels stand tall against the Arabian horizon. Dubai, a city synonymous with luxury and grandeur, continues to captivate the world with its vibrant real estate landscape.
  At [Company Name], we take pride in curating an exclusive collection of properties that epitomize Dubai's essence - a blend of modernity, comfort, and sophistication. Our commitment lies in connecting discerning individuals with homes that transcend the ordinary, offering an unparalleled lifestyle experience in this dynamic metropolis.
  Dubai: Where Dreams Find Their Address
  Dubai's real estate canvas is a masterpiece painted with diversity. From the iconic Palm Jumeirah to the sleek high-rises of Downtown Dubai, each neighborhood boasts its unique charm and allure. Whether you seek the tranquility of waterfront living, the buzz of a cosmopolitan center, or the tranquility of exclusive gated communities, Dubai has a residence tailored to your preferences.
  Unraveling Unrivaled Opportunities
  Investment opportunities in Dubai's real estate market continue to thrive. Boasting a business-friendly environment, tax incentives, and a robust infrastructure, Dubai stands as a beacon for global investors seeking lucrative ventures. Whether you're considering a property for residency, rental income, or capital appreciation, our team of experts stands ready to guide you through this thriving market.
  Unparalleled Service, Tailored Solutions
  At [Company Name], we prioritize personalized service. Our seasoned professionals understand that every client is unique, and we take pride in offering bespoke solutions that cater to your distinct requirements. Whether you're a first-time buyer or a seasoned investor, our commitment remains unwavering: to accompany you on your journey towards finding the perfect property that resonates with your aspirations.
  Embark on Your Real Estate Journey with [Company Name]
  Join us in exploring the world of luxurious living and investment opportunities in Dubai. From exclusive listings to insightful market analyses, our website serves as your portal to a world of unparalleled real estate possibilities.
  Let [Company Name] be your trusted companion in transforming your real estate aspirations into reality. Contact us today and unlock the door to a life of grandeur in Dubai."
      />
    </div>
  )
}

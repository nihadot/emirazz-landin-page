import React from 'react'
import HeadingTwo from '../../reusable/Titles/MainHeading/HeadingTwo'
import Paragraph from '../../reusable/Paragraph/Paragraph'

type Props = {}

function SectionTwo({}: Props) {
  return (
    <div className='px-4 md:px-10 lg:px-20 bg-black'>
        <HeadingTwo
        content='Description'
        />


<ul className='list-decimal text-white pl-3 pt-1  relative' style={{}}>
            <li className=''>
                <Paragraph
            className='!text-lg !max-w-[545px] !md:text-xl !font-normal !leading-7 !text-white/80'
                
                content='Mentorship & Advisory' />
                <Paragraph content={'We offer access to a network of seasoned professionals and industry experts who provide invaluable mentorship and strategic advice. Whether you need help with business strategy, operations, marketing, or innovation, our advisors guide you through every stage of growth.'}
                    className='!font-light !text-white/70 !text-lg' />
            </li>

            <li className=''>
                <Paragraph content='Funding & Investment Opportunities' />
                <Paragraph content={'Scale Up connects businesses with potential investors, venture capitalists, and funding opportunities to fuel growth. We help identify the right financial partners who share your vision and provide the capital required to scale effectively.'}
                    className='!font-light !text-white/70 !text-lg' />
            </li>

            <li className=''>
                <Paragraph content='Access to a Global Network' />
                <Paragraph content={'Through Emiraaz’s extensive network, you gain access to a global community of businesses, investors, and thought leaders. Our connections open doors to new markets, partnerships, and collaborative ventures, enabling businesses to expand their reach and create valuable relationships.'}
                    className='!font-light !text-white/70 !text-lg' />
            </li>




            <li className=''>
                <Paragraph content='Innovation & Technology' />
                <Paragraph content={'Emiraaz believes that innovation is the key to future growth. We provide businesses with the tools and resources needed to leverage cutting-edge technologies such as AI, IoT, and data analytics, helping them stay ahead of industry trends and create a competitive edge.'}
                    className='!font-light !text-white/70 !text-lg' />
            </li>

            <li className=''>
                <Paragraph content='Workshops & Training Programs' />
                <Paragraph content={'We offer a variety of workshops, seminars, and training programs that focus on key areas like leadership, operational excellence, and digital transformation. These sessions are designed to equip business leaders and their teams with the knowledge and skills needed to succeed in today’s dynamic market.'}
                    className='!font-light !text-white/70 !text-lg' />
            </li>

            {/* <div className="bg-[#BC13FE] absolute -left-24 bottom-0 w-28 h-28 rounded-full blur-xl opacity-55"></div> */}

        </ul>
    </div>
  )
}

export default SectionTwo
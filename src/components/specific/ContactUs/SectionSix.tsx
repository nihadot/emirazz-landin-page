import React from 'react'
import HeadingThree from '../../reusable/Titles/MainHeading/HeaderThree'
import Paragraph from '../../reusable/Paragraph/Paragraph'
import Card from '../../reusable/Card/Card'
import { IconButton } from '../../reusable/Buttons'
import { rightArrow } from '../../../assets/svg'

type Props = {}

function SectionSix({ }: Props) {
    return (
        <div>
            <div className="flex flex-col relative justify-center items-center pt-40">
                {/*  */}

                <div className="relative text-center justify-center items-center flex-1 pe-4 flex flex-col ">

                    <HeadingThree
                        className='text-[45px] max-w-max mb-4'
                        content='Our Proud Partners'

                    />

                    <Paragraph
                        className='!font-light !max-w-[900px] text-center !text-lg'

                        content="At Emiraaz, we build strategic partnerships that drive mutual growth and success. By collaborating with organizations across industries, we create new opportunities and enhance our collective impact. Partner with us to shape a brighter, more innovative future."
                    />
                </div>


<IconButton
iconUrl={rightArrow}
content='View All'
/>
                
                


            </div>
        </div>
    )
}

export default SectionSix
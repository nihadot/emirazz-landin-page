import React from 'react'
import Paragraph from '../../components/reusable/Paragraph/Paragraph'
import SectionOne from '../../components/specific/BlogAll/SectionOne'
import { Header } from '../../components/reusable/Headers'
import Footer from '../../components/reusable/Footer/Footer'
import SectionTwo from "../../components/specific/BlogAll/SectionTwo"
type Props = {}

function BlogAll({ }: Props) {
  return (
    <div className="m-auto bg-black max-w-[1440px]">
      <Header />
      <SectionOne />
      <SectionTwo />
      <Footer />

    </div>
  )
}

export default BlogAll
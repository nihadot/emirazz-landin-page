import React from 'react'
import Footer from '../../components/reusable/Footer/Footer';
import { Header } from '../../components/reusable/Headers';
import SectionOne from "../../components/specific/NewsAll/SectionOne";
import SectionTwo from "../../components/specific/NewsAll/SectionTwo"
type Props = {}

function NewsAll({ }: Props) {
    return (
        <div className="m-auto max-w-[1440px]">


            <Header />

            <SectionOne />
            <SectionTwo />
            <Footer />

        </div>
    )
}

export default NewsAll
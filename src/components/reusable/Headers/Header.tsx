import React from 'react'
import Image from '../Image/Image'
import { logo } from '../../../assets/images'
import { header_navlink } from '../../../data'
import { Link } from 'react-router'
// import { useLanguage } from '../../../LanguageContext'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLanguage } from '../../../languageSlice'
import { RootState } from '@reduxjs/toolkit/query'

function Header() {
    return (
        <div dir='ltr' className='px-4 md:px-20 bg-black '>
            <header className=' h-20 flex justify-between' >

                <Image
                    src={logo}
                    className=' object-contain w-[100px] h-full'
                    alt='logo'
                />


                <NavLinks />

            </header>

        </div>
    )
}

export default Header






function NavLinks({ }: Props) {

        // const { language, toggleLanguage } = useLanguage();
        const language = useSelector((state: RootState) => state.language.language);
        const dispatch = useDispatch();
    return (
        <div   className='hidden min-[910px]:flex gap-3 text-white justify-center items-center'>
            {
                header_navlink.length > 0 && header_navlink.map((item) => {
                    return (
                        <Link className='font-light font-poppins text-base ' to={'/'} key={item.id} >{item.name}</Link>
                    )
                })
            }

            <button onClick={()=> dispatch(toggleLanguage()) }>
            <Link className='font-light rounded-[6px] border border-white px-3 py-2 font-poppins text-base ' to={'/'}  >{ language === "en" ? 'العربية': 'English'}</Link>

            </button>
        </div>
    )
}

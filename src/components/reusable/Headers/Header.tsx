import { useEffect, useState } from 'react'
import Image from '../Image/Image'
// import { logo } from '../../../assets/images'
import { header_navlink } from '../../../data'
import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLanguage } from '../../../languageSlice'
import { RootState } from '../../../store'
import { closeIcon, logo, emirazzArLogo, greaterthan, menuIcon, emiraazArabicLogo } from '../../../assets/svg'
import { motion, AnimatePresence } from "framer-motion";

function Header() {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <div dir={language === 'en' ? 'ltr' : 'rtl'} className='px-4 fixed top-0 z-50 w-full md:px-20 bg-black '>
            <header className=' h-20 flex justify-between items-center' >

                <Link to={'/'}>
                    <Image
                        src={language === 'en' ? logo : emiraazArabicLogo}
                        className={` ${language === 'en' ? 'w-[130px] h-full ' : 'w-[150px] h-[50px] '} object-contain `}
                        alt='logo'
                    />
                </Link>


                <NavLinks />

            </header>

        </div>
    )
}

export default Header






function NavLinks({ }) {

    const language = useSelector((state: RootState) => state.language.language);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number>(0);
    const navigateHandler = (url: string) => navigate(url);
    const [activePage, setActivePage] = useState<number>(0);

    useEffect(() => {

    }, [activeDropdown])
    return (
        <>


            <ul className='hidden min-[910px]:flex gap-3 text-white justify-center items-center'>
                {
                    header_navlink.length > 0 && header_navlink.map((item, index: number) => {

                        return (
                            <li onClick={() => item.url && navigateHandler(item.url)} key={index} className='group'>
                                <button className={`${language === 'en' ?  'font-montserrat': 'font-almaraiLight'} h-full w-full font-light  cursor-default text-base`} key={item.id}>
                                    {language === 'en' ? item.nameEn : item.nameAr}
                                </button>
                                <label className='w-full group-hover:opacity-100 opacity-0 invisible group-hover:visible bg-white rounded-full h-[2px] flex mt-1'></label>

                                {item.dropDown && item.id === 1 && (
                                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                                        <ExploreEmiraaz />
                                    </div>
                                )}


                                {item.dropDown && item.id === 5 && (
                                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                                        <Media />
                                    </div>
                                )}
                            </li>
                        )
                    })
                }

                <button onClick={() => dispatch(toggleLanguage())}>
                    <label className={`font-light rounded-[6px] border border-white px-3 py-1.5 text-base ${language === 'en' ?  'font-poppins': 'font-almaraiLight'} `} >{language === "en" ? 'العربية' : 'English'}</label>

                </button>
            </ul>


            <nav className=" w-full md:hidden text-white flex flex-col  bg-black  p-0">
                {/* Menu Toggle Button */}
                <div className="w-full flex justify-end items-center ">

                    <button
                        className="text-white text-2xl  focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >


                        {isOpen ? <Image
                            src={closeIcon}
                            alt='close'
                            className='w-11 h-11 object-cover'
                        /> :
                            <Image
                                src={menuIcon}
                                alt='menu'
                                className='w-10 h-10 object-cover'
                            />}

                    </button>


                </div>

                {/* Menu Items */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial={{ opacity: 0, y: -700 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.4 }}
                            className="absolute px-4 h-screen md:relative w-full md:w-auto bg-black md:flex md:gap-3 top-20 left-0 md:top-0 flex flex-col md:flex-row text-center md:text-left"
                        >
                            {header_navlink.length > 0 &&
                                header_navlink.map((item, index) => (
                                    <li key={index} className="group relative">
                                        <button
                                            onClick={() => (item.url && navigateHandler(item.url) || setActiveDropdown(item.id))}
                                            className={`block ${language === 'en' ?  'font-poppins': 'font-almaraiLight'} w-full py-1 text-start md:ps-0 font-light  cursor-pointer text-base`}
                                        >
                                            {language === "en" ? item.nameEn : item.nameAr}
                                        </button>

                                        {/* Hover underline effect */}
                                        <motion.div
                                            className="w-full bg-white rounded-full h-[2px] mt-1"
                                            initial={{ opacity: 0, scaleX: 0 }}
                                            whileHover={{ opacity: 1, scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        ></motion.div>

                                        {/* Dropdowns */}
                                        {item.dropDown && (
                                            <div
                                                onMouseEnter={() => setActiveDropdown(item.id)}
                                                onMouseLeave={() => setActiveDropdown(0)}
                                            >
                                                <AnimatePresence>
                                                    {activeDropdown === item.id && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            transition={{ duration: 0.3 }}
                                                            className=" mt-1 bg-black w-full h-screen z-50 absolute top-0 left-0 p-2 rounded-md"
                                                        >
                                                            <div className="flex justify-start items-start ps-2 mt-0">

                                                                <label htmlFor="" className='font-bold' onClick={() => {
                                                                    setActiveDropdown(0)
                                                                    setActivePage(0);
                                                                }}>Back to menu </label>
                                                            </div>
                                                            {item.id === 1 && <ExploreEmiraazMobile activePage={activePage} setActivePage={setActivePage} />}

                                                            {item.id === 5 && <MediaMobile setActiveDropdown={setActiveDropdown} />}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        )}

                                    </li>
                                ))}

                            {/* Language Toggle */}
                            <div className="flex justify-start">

                                <button className={`font-light ${language === 'en' ?  'font-montserrat': 'font-almaraiLight'} rounded-[6px] border border-white px-3 py-1.5 text-base pt-1`} onClick={() => dispatch(toggleLanguage())}>
                                    {language === "en" ? "العربية" : "English"}
                                </button>
                            </div>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>



        </>
    )
}



function ExploreEmiraaz() {
    const language = useSelector((state: RootState) => state.language.language);

    const [activePage, setActivePage] = useState<number>(1);

   
    const menuData = {
        aboutEmiraaz: [
            { path: "/", label: { en: "Story", ar: "القصة" } },
            { path: "/", label: { en: "Leadership", ar: "القيادة" } },
            { path: "/about-founder", label: { en: "About Founder", ar: "عن المؤسس" } },
            { path: "/", label: { en: "Inspire", ar: "إلهام" } },
            { path: "/art", label: { en: "Culture & Values", ar: "الثقافة والقيم" } },
            { path: "/deepsea", label: { en: "Sustainability", ar: "الاستدامة" } },
            { path: "/invention", label: { en: "Procurement", ar: "المشتريات" } }
        ],
        business: [
            { path: "/our/partners", label: { en: "Partners", ar: "الشركاء" } },
            { path: "/sponsorship", label: { en: "Sponsorship", ar: "الرعاية" } },
            { path: "/investment", label: { en: "Investment", ar: "الاستثمار" } },
            { path: "/startup", label: { en: "Startup", ar: "الشركات الناشئة" } }
        ],
        ourProducts: [
            { path: "/our/products", label: { en: "Explore our products", ar: "استكشاف منتجاتنا" } }
        ]
    };
    
    const MenuList = ({ items }) => {
        return (
            <ul className={`text-[16px] w-full font-medium flex flex-col gap-4 ${language === 'en' ? 'font-sfbold' : 'font-almaraiLight'}`}>
                {items.map((item, index) => (
                    <li key={index} className="flex gap-6 items-center justify-between">
                        <Link to={item.path}>{item.label[language]}</Link>
                    </li>
                ))}
            </ul>
        );
    };
    
    const aboutEmiraaz = <MenuList items={menuData.aboutEmiraaz} />;
    const business = <MenuList items={menuData.business} />;
    const ourProducts = <MenuList items={menuData.ourProducts} />;

    
    const handleThePage = (number: number) => setActivePage(number);
    const navigate = useNavigate();
    return (
        <div className="left-0 px-4 md:px-10 lg:px-20 top-[80px] absolute w-screen h-[500px] bg-black">
            <div className=" flex pt-4 w-full max-h-[340px] h-full">
                <div className="pt-8 max-w-[280px] w-full border-r pe-6 border-white/60">

                <ul className={`${language === 'en' ? 'font-sfbold' : 'font-almaraiLight'} text-[18px] w-full px-6 font-medium flex flex-col gap-4 `}>
    <li onClick={() => handleThePage(1)} className='flex gap-6 items-center justify-between'>
        <label htmlFor="">{language === 'en' ? 'About Emiraaz' : 'عن إميراز'}</label>
        <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' />
    </li>

    <li onClick={() => handleThePage(2)} className='flex gap-6 items-center justify-between'>
        <label htmlFor="">{language === 'en' ? 'Business' : 'الأعمال'}</label>
        <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' />
    </li>

    <li onClick={() => handleThePage(3)} className='flex gap-6 items-center justify-between'>
        <label htmlFor="">{language === 'en' ? 'Our Products' : 'منتجاتنا'}</label>
        <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' />
    </li>

    <li className='flex gap-6 items-center justify-between'>
        <label htmlFor="">{language === 'en' ? 'Scale Up By Emiraaz' : 'التوسع بواسطة إميراز'}</label>
    </li>

    <li onClick={() => navigate('/art')} className='flex gap-6 items-center justify-between'>
        <label htmlFor="">{language === 'en' ? 'Art' : 'الفن'}</label>
    </li>

    <li onClick={() => navigate('/deepsea')} className='flex gap-6 items-center justify-between'>
        <label htmlFor="">{language === 'en' ? 'Deep Sea' : 'البحر العميق'}</label>
    </li>
</ul>

                </div>
                <div className="flex-1 ps-6 pt-8">

                    {activePage === 1 && aboutEmiraaz}
                    {activePage === 2 && business}
                    {activePage === 3 && ourProducts}

                </div>
            </div>
        </div>
    );
}


function Media() {


    const navigate = useNavigate()
    const language = useSelector((state: RootState) => state.language.language);

    const navigateHandler = (url: string) => navigate(url);

    return (
        <div className={`left-0 px-4 md:px-10 lg:px-20 top-[80px] absolute w-screen h-[500px] bg-black ${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} `}>
            <div className=" flex pt-4 w-full max-h-[340px] h-full">
                <div className="pt-8 max-w-[280px] w-full border-r pe-6 border-white/60">

                <ul className='text-[18px] px-6 w-full font-medium flex flex-col gap-4'>
    <li className='flex gap-6 items-center justify-between'>
        <label onClick={() => navigateHandler('/newsall')}>
            {language === 'en' ? 'News' : 'الأخبار'}
        </label>
    </li>

    <li className='flex gap-6 items-center justify-between'>
        <label onClick={() => navigateHandler('/gallery')}>
            {language === 'en' ? 'Gallery' : 'المعرض'}
        </label>
    </li>

    <li className='flex gap-6 items-center justify-between'>
        <label onClick={() => navigateHandler('/blogall')}>
            {language === 'en' ? 'Blog' : 'المدونة'}
        </label>
    </li>
</ul>

                </div>
                <div className="flex-1 ps-6 pt-8">

                </div>
            </div>
        </div>
    );
}


function ExploreEmiraazMobile({ activePage, setActivePage }: { activePage: any, setActivePage: any }) {

    const language = useSelector((state: RootState) => state.language.language);

    const navigate = useNavigate();

    const aboutEmiraaz = (
        <ul className={`w-full ${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} py-0 -mt-10 text-start font-light bg-black cursor-pointer text-base text-[16px] flex flex-col gap-4`}>
          
          <li className='flex gap-6 items-center justify-between'>
            <label className='font-bold' onClick={() => setActivePage(0)}>
              {language === 'en' ? 'Back to Previous' : 'العودة إلى السابق'}
            </label>  
          </li>
      
          <li className='flex gap-6 items-center justify-between'> 
            <Link to="/">{language === 'en' ? 'Story' : 'القصة'}</Link>  
          </li>
      
          <li className='flex gap-6 items-center justify-between'> 
            <Link to="/">{language === 'en' ? 'Leadership' : 'القيادة'}</Link>  
          </li>
      
          <li className='flex gap-6 items-center justify-between'> 
            <Link to="/about-founder">{language === 'en' ? 'About Founder' : 'عن المؤسس'}</Link>  
          </li>
      
          <li className='flex gap-6 items-center justify-between'> 
            <Link to="/">{language === 'en' ? 'Inspire' : 'إلهام'}</Link>  
          </li>
      
          <li className='flex gap-6 items-center justify-between'> 
            <Link to="/art">{language === 'en' ? 'Culture & Values' : 'الثقافة والقيم'}</Link>  
          </li>
      
          <li className='flex gap-6 items-center justify-between'> 
            <Link to="/deepsea">{language === 'en' ? 'Sustainability' : 'الاستدامة'}</Link>  
          </li>
      
          <li className='flex gap-6 items-center justify-between'> 
            <Link to="/invention">{language === 'en' ? 'Procurement' : 'المشتريات'}</Link>  
          </li>
      
        </ul>
      );
      


const business = (
    <ul className={` ${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} w-full py-0 -mt-10 text-start font-light bg-black cursor-pointer text-base text-[16px] flex flex-col gap-4`}>
      
      <li className='flex gap-6 items-center justify-between'>
        <label className='font-bold' onClick={() => setActivePage(0)}>
          {language === 'en' ? 'Back to Previous' : 'العودة إلى السابق'}
        </label>  
      </li>
  
      <li className='flex gap-6 items-center justify-between'> 
        <Link to="/our/partners">{language === 'en' ? 'Partners' : 'الشركاء'}</Link>  
      </li>
  
      <li className='flex gap-6 items-center justify-between'> 
        <Link to="/sponsorship">{language === 'en' ? 'Sponsorship' : 'الرعاية'}</Link>  
      </li>
  
      <li className='flex gap-6 items-center justify-between'> 
        <Link to="/investment">{language === 'en' ? 'Investment' : 'الاستثمار'}</Link>  
      </li>
  
      <li className='flex gap-6 items-center justify-between'> 
        <Link to="/startup">{language === 'en' ? 'Startup' : 'الشركات الناشئة'}</Link>  
      </li>
  
    </ul>
  );
  



  const ourProducts = (
    <ul className={`w-full py-0 -mt-10 text-start font-light bg-black font-poppins cursor-pointer text-base text-[16px] flex flex-col gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <li className='flex gap-6 items-center justify-between'> 
            <label className='font-bold' onClick={() => setActivePage(0)}>
                {language === 'ar' ? 'العودة إلى السابق' : 'Back to Previous'}
            </label>  
        </li>

        <li className='flex gap-6 items-center justify-between'> 
            <Link to="/our/products">
                {language === 'ar' ? 'استكشاف منتجاتنا' : 'Explore our products'}
            </Link>  
        </li>
    </ul>
);

    const handleThePage = (number: number) => setActivePage(number);

    return (
        <div className="left-0 px-4 top-10 absolute w-screen ">
            <div className=" flex ps-6 md:ps-0 pt-2  w-full max-h-[340px] h-full">
                {activePage === 0 && <div className="pt-0 w-full md:max-w-[280px] pe-0 md:pe-6 border-white/60">

                    <ul className={`w-full py-0 text-start font-light cursor-pointer text-base text-[18px] flex flex-col gap-4  ${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'}`}>

<li onClick={() => handleThePage(1)} className='flex gap-6 items-center justify-between'>
    <label htmlFor="">{language === 'en' ? 'About Emiraaz' : 'عن إميراز'}</label> 
    <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' />
</li>

<li onClick={() => handleThePage(2)} className='flex gap-6 items-center justify-between'>
    <label htmlFor="">{language === 'en' ? 'Business' : 'الأعمال'}</label> 
    <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' />
</li>

<li onClick={() => handleThePage(3)} className='flex gap-6 items-center justify-between'>
    <label htmlFor="">{language === 'en' ? 'Our Products' : 'منتجاتنا'}</label> 
    <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' />
</li>

<li className='flex gap-6 items-center justify-between'>
    <label htmlFor="">{language === 'en' ? 'Scale Up By Emiraaz' : 'التوسع بواسطة إميراز'}</label>  
</li>

<li onClick={() => navigate('/art')} className='flex gap-6 items-center justify-between'>
    <label htmlFor="">{language === 'en' ? 'Art' : 'فن'}</label>  
</li>

<li onClick={() => navigate('/deepsea')} className='flex gap-6 items-center justify-between'>
    <label htmlFor="">{language === 'en' ? 'Deep Sea' : 'أعماق البحر'}</label>  
</li>

</ul>

                </div>}
                <div className="  flex-1 pt-0">

                    {activePage === 1 && aboutEmiraaz}
                    {activePage === 2 && business}
                    {activePage === 3 && ourProducts}

                </div>
            </div>
        </div>
    );
}




function MediaMobile({ setActiveDropdown }: { setActiveDropdown: any }) {

    const language = useSelector((state: RootState) => state.language.language);

    const navigate = useNavigate()

    const navigateHandler = (url: string) => navigate(url);

    return (
        <div className="left-0 px-4 -top-40 h-full  bg-black absolute w-full">
            <div className=" flex pt-0 w-full max-h-[340px] h-full">
                <div className="pt-0 max-w-[280px] w-full  border-white/60">

                    <ul className='w-full py-0 text-start font-light font-poppins cursor-pointer text-base text-[18px] flex flex-col gap-4'>
                        <label htmlFor="" className='font-bold' onClick={() => {
                            setActiveDropdown(null)
                        }}>    {language === 'en' ? 'العودة إلى القائمة' : 'Back to menu'} </label>
                        <li className={`${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} flex gap-6 items-center justify-between`}> <label onClick={() => navigateHandler('/newsall')}>{language === 'en' ? 'News' : 'أخبار'}</label> </li>
                        <li className={`${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} flex gap-6 items-center justify-between`}> <label onClick={() => navigateHandler('/gallery')}>{language === 'en' ? 'Gallery' : 'معرض'}</label> </li>
                        <li className={`${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} flex gap-6 items-center justify-between`}> <label onClick={() => navigateHandler('/blogall')}>{language === 'en' ? 'Blog' : 'مدونة'}</label> </li> </ul>


                </div>


                <div className="flex-1 ps-6 pt-8">

                </div>
            </div>
        </div>
    );
}
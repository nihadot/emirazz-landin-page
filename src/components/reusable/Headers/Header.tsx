import  { useEffect, useState } from 'react'
import Image from '../Image/Image'
import { logo } from '../../../assets/images'
import { header_navlink } from '../../../data'
import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLanguage } from '../../../languageSlice'
import { RootState } from '../../../store'
import { closeIcon, emirazzArLogo, greaterthan, menuIcon } from '../../../assets/svg'
import { motion, AnimatePresence } from "framer-motion";

function Header() {

    const language = useSelector((state: RootState) => state.language.language);

    return (
        <div dir={language === 'en' ? 'ltr' : 'rtl'} className='px-4 fixed top-0 z-50 w-full md:px-20 bg-black '>
            <header className=' h-20 flex justify-between' >

                <Link to={'/'}>
                    <Image
                        src={ language === 'en' ? logo : emirazzArLogo}
                        className=' object-contain w-[100px] h-full '
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
    const navigateHandler = (url:string)=> navigate(url); 
    const [activePage, setActivePage] = useState<number>(0);

    useEffect(()=>{
      console.log(activeDropdown,'active')

    },[activeDropdown])
    return (
       <>
       
       
       <ul className='hidden min-[910px]:flex gap-3 text-white justify-center items-center'>
            {
                header_navlink.length > 0 && header_navlink.map((item, index: number) => {

                    return (
                        <li onClick={()=>item.url && navigateHandler(item.url)} key={index} className='group'>
                            <button className={`h-full w-full font-light font-poppins cursor-default text-base`} key={item.id}>
                                { language === 'en' ?  item.nameEn : item.nameAr}
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
                <Link className='font-light rounded-[6px] border border-white px-3 py-2 font-poppins text-base ' to={'/'}  >{language === "en" ? 'العربية' : 'English'}</Link>

            </button>
        </ul>


        <nav className=" w-full md:hidden text-white flex flex-col  bg-black  p-4">
      {/* Menu Toggle Button */}
      <div className="w-full flex justify-end items-center ">

      <button
        className="text-white text-2xl  focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        >
           

{ isOpen ?  <Image
        src={closeIcon}
        alt='close'
        className='w-11 h-11 object-cover'
        />  : 
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
            className="absolute h-screen md:relative w-full md:w-auto bg-black md:flex md:gap-3 top-20 left-0 md:top-0 flex flex-col md:flex-row text-center md:text-left"
          >
            {header_navlink.length > 0 &&
              header_navlink.map((item, index) => (
                <li key={index} className="group relative">
                  <button
                    onClick={() => (item.url && navigateHandler(item.url) || setActiveDropdown(item.id))}
                    className="block w-full py-1 text-start ps-4 md:ps-0 font-light font-poppins cursor-pointer text-base"
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

                            <label htmlFor="" className='font-bold' onClick={()=> {
                              setActiveDropdown(0)
                              setActivePage(0);
                            } }>Back to menu </label>
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

            <button className="ps-4 pt-4" onClick={() => dispatch(toggleLanguage())}>
              <Link
                className="font-light rounded-[6px] border border-white px-3 py-2 font-poppins text-base"
                to={"/"}
                >
                {language === "en" ? "العربية" : "English"}
              </Link>
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

    const [activePage, setActivePage] = useState<number>(1);

    const aboutEmiraaz = <ul className='text-[16px] w-full  font-medium flex flex-col gap-4 font-sfbold'>
        <li className='flex gap-6 items-center justify-between'> <Link to="/">Story</Link>  </li>
        <li className='flex gap-6 items-center justify-between'> <Link to="/">Leadership</Link>  </li>
        <li className='flex gap-6 items-center justify-between'> <Link to="about-founder">About Founder</Link>  </li>
        <li className='flex gap-6 items-center justify-between'> <Link to="/">Inspire</Link>  </li>
        <li className='flex gap-6 items-center justify-between'> <Link to="/art">Culture & Values</Link>  </li>
        <li className='flex gap-6 items-center justify-between'> <Link to="/deepsea">Sustainablility</Link>  </li>
        <li className='flex gap-6 items-center justify-between'> <Link to="/invention">Procurement</Link>  </li>
    </ul>


    const business = <ul className='text-[16px] w-full  font-medium flex flex-col gap-4 font-sfbold'>
        <li className='flex gap-6 items-center justify-between'> <Link to="/our/partners">Partners</Link>  </li>
        <li className='flex gap-6 items-center justify-between'> <Link to="/sponsorship">Sponsorship</Link>  </li>
        <li className='flex gap-6 items-center justify-between'> <Link to="/investment">Investment</Link>  </li>
        <li className='flex gap-6 items-center justify-between'> <Link to="/startup">Startup</Link>  </li>
    </ul>



    const ourProducts = <ul className='text-[16px] w-full  font-medium flex flex-col gap-4 font-sfbold'>
        <li className='flex gap-6 items-center justify-between'> <Link to="/our/products">Explore our products</Link>  </li>
        {/* <li className='flex gap-6 items-center justify-between'> <Link to="/business">Product 1</Link>  </li> */}
    </ul>

    const handleThePage = (number: number) => setActivePage(number);

    return (
        <div className="left-0 px-4 md:px-10 lg:px-20 top-[80px] absolute w-screen h-[500px] bg-black">
            <div className=" flex pt-4 w-full max-h-[340px] h-full">
                <div className="pt-8 max-w-[280px] w-full border-r pe-6 border-white/60">

                    <ul className='text-[18px] w-full px-6 font-medium flex flex-col gap-4 font-sfbold'>
                        <li onClick={() => handleThePage(1)} className='flex gap-6 items-center justify-between'> <label htmlFor="">About Emiraaz</label> <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' /> </li>
                        <li onClick={() => handleThePage(2)} className='flex gap-6 items-center justify-between'> <label htmlFor="">Business</label> <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' /> </li>
                        <li onClick={() => handleThePage(3)} className='flex gap-6 items-center justify-between'> <label htmlFor="">Our Products</label> <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' /> </li>
                        <li className='flex gap-6 items-center justify-between'> <label htmlFor="">Scale Up By Emiraaz</label>  </li>
                        <li className='flex gap-6 items-center justify-between'> <label htmlFor="">Art</label>  </li>
                        <li className='flex gap-6 items-center justify-between'> <label htmlFor="">Deep Sea</label>  </li>
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

    const navigateHandler = (url:string)=> navigate(url); 

    return (
        <div className="left-0 px-4 md:px-10 lg:px-20 top-[80px] absolute w-screen h-[500px] bg-black">
            <div className=" flex pt-4 w-full max-h-[340px] h-full">
                <div className="pt-8 max-w-[280px] w-full border-r pe-6 border-white/60">

                    <ul className='text-[18px] px-6 w-full  font-medium flex flex-col gap-4 font-sfbold'>
                        <li className='flex gap-6 items-center justify-between'> <label onClick={()=>navigateHandler('/newsall')}>News</label> </li>
                        <li className='flex gap-6 items-center justify-between'> <label onClick={()=>navigateHandler('/gallery')}>Gallery</label> </li>
                        <li className='flex gap-6 items-center justify-between'> <label onClick={()=>navigateHandler('/blogall')}>Blog</label> </li> </ul>
                </div>
                <div className="flex-1 ps-6 pt-8">

                </div>
            </div>
        </div>
    );
}


  function ExploreEmiraazMobile({activePage,setActivePage}:{activePage:any,setActivePage:any}) {


  const aboutEmiraaz = <ul className=' w-full py-0 -mt-10  text-start font-light bg-black font-poppins cursor-pointer text-base text-[16px]   flex flex-col gap-4'>
      <li className='flex gap-6 items-center justify-between'> <label className='font-bold' onClick={()=>setActivePage(0)}>Back to Previous</label>  </li>
      <li className='flex gap-6 items-center justify-between'> <Link to="/">Story</Link>  </li>
      <li className='flex gap-6 items-center justify-between'> <Link to="/">Leadership</Link>  </li>
      <li className='flex gap-6 items-center justify-between'> <Link to="about-founder">About Founder</Link>  </li>
      <li className='flex gap-6 items-center justify-between'> <Link to="/">Inspire</Link>  </li>
      <li className='flex gap-6 items-center justify-between'> <Link to="/art">Culture & Values</Link>  </li>
      <li className='flex gap-6 items-center justify-between'> <Link to="/deepsea">Sustainablility</Link>  </li>
      <li className='flex gap-6 items-center justify-between'> <Link to="/invention">Procurement</Link>  </li>
  </ul>


  const business = <ul className='w-full py-0 -mt-10  text-start font-light bg-black font-poppins cursor-pointer text-base text-[16px]   flex flex-col gap-4'>
      <li className='flex gap-6 items-center justify-between'> <label className='font-bold' onClick={()=>setActivePage(0)}>Back to Previous</label>  </li>

      <li className='flex gap-6 items-center justify-between'> <Link to="/our/partners">Partners</Link>  </li>
      <li className='flex gap-6 items-center justify-between'> <Link to="/sponsorship">Sponsorship</Link>  </li>
      <li className='flex gap-6 items-center justify-between'> <Link to="/investment">Investment</Link>  </li>
      <li className='flex gap-6 items-center justify-between'> <Link to="/startup">Startup</Link>  </li>
  </ul>



  const ourProducts = <ul className='w-full py-0 -mt-10  text-start font-light bg-black font-poppins cursor-pointer text-base text-[16px]   flex flex-col gap-4'>
      <li className='flex gap-6 items-center justify-between'> <label className='font-bold' onClick={()=>setActivePage(0)}>Back to Previous</label>  </li>

      <li className='flex gap-6 items-center justify-between'> <Link to="/our/products">Explore our products</Link>  </li>
      {/* <li className='flex gap-6 items-center justify-between'> <Link to="/business">Product 1</Link>  </li> */}
  </ul>

  const handleThePage = (number: number) => setActivePage(number);

  return (
      <div className="left-0 px-4 top-10 absolute w-screen ">
          <div className=" flex pt-2 w-full max-h-[340px] h-full">
             { activePage === 0 &&  <div className="pt-0 max-w-[280px] w-full  pe-6 border-white/60">

                  <ul className='w-full py-0 text-start font-light font-poppins cursor-pointer text-base text-[18px] flex flex-col gap-4'>
                      <li onClick={() => handleThePage(1)} className='flex gap-6 items-center justify-between'> <label htmlFor="">About Emiraaz</label> <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' /> </li>
                      <li onClick={() => handleThePage(2)} className='flex gap-6 items-center justify-between'> <label htmlFor="">Business</label> <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' /> </li>
                      <li onClick={() => handleThePage(3)} className='flex gap-6 items-center justify-between'> <label htmlFor="">Our Products</label> <img src={greaterthan} alt="more options" className='w-[10px] h-[15px] object-cover' /> </li>
                      <li className='flex gap-6 items-center justify-between'> <label htmlFor="">Scale Up By Emiraaz</label>  </li>
                      <li className='flex gap-6 items-center justify-between'> <label htmlFor="">Art</label>  </li>
                      <li className='flex gap-6 items-center justify-between'> <label htmlFor="">Deep Sea</label>  </li>
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




function MediaMobile({setActiveDropdown}:{setActiveDropdown:any}) {


  const navigate = useNavigate()

  const navigateHandler = (url:string)=> navigate(url); 

  return (
      <div className="left-0 px-4 -top-40 h-full  bg-black absolute w-full">
          <div className=" flex pt-0 w-full max-h-[340px] h-full">
              <div className="pt-0 max-w-[280px] w-full  border-white/60">

                  <ul className='w-full py-0 text-start font-light font-poppins cursor-pointer text-base text-[18px] flex flex-col gap-4'>
                  <label htmlFor="" className='font-bold' onClick={()=> {
                              setActiveDropdown(null)
                            } }>Back to menu </label>
                      <li className='flex gap-6 items-center justify-between'> <label onClick={()=>navigateHandler('/newsall')}>News</label> </li>
                      <li className='flex gap-6 items-center justify-between'> <label onClick={()=>navigateHandler('/gallery')}>Gallery</label> </li>
                      <li className='flex gap-6 items-center justify-between'> <label onClick={()=>navigateHandler('/blogall')}>Blog</label> </li> </ul>
              
                     
              </div>


              <div className="flex-1 ps-6 pt-8">

              </div>
          </div>
      </div>
  );
}
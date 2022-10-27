import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/images/logo.png'
import { FiInstagram, FiMenu } from 'react-icons/fi';
import SearchIcon from '@mui/icons-material/Search';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineDown, AiOutlineTwitter } from 'react-icons/ai';
import { IoIosFlash } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';

import NavImage from "../assets/images/navbar-image.png"



const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "BLOGS", link: "/blogs" },
        { name: "CONTACT", link: "/contact" },
    ];
    let [open, setOpen] = useState(false);
    const [show, setShow] = useState(false)
    const [navShow, setNavShow] = useState(false)

    // const onMouseEnter = () => {
    //     if (window.innerWidth < 467) {

    //     }
    // }


    return (
        <div className=''>
            <div className=' shadow-md z-50 w-full fixed top-0 left-0'>

                <div className=' md:flex lg-flex  justify-between items-center bg-white  '
                    style={{ backgroundImage: `url(${NavImage})`, backgroundPosition: 'center', backgroundSize: 'cover', }}
                >
                    <div className='relative lg:flex-basis-1/4 py-5 '>
                        <Link to='/' class="">
                            <img className='w-34 pl-5 lg:w-25' src={logo} alt="" />
                        </Link>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-9 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}><FiMenu /></ion-icon>
                    </div>

                    <div className=' px-0 basis-3/4 w-[900px] '>
                        <div className='hidden lg:block mx-auto'>

                            <div className=' flex items-start justify-start w-100 bg-red-600 p-2 text-white'>
                                <div className='flex text-sm gap-x-16'>

                                    <p className='py-3 px-6 flex items-center'>
                                        <span className='inline-flex pt-1 text-lg'>
                                            <span className='pt-1'><IoIosFlash /></span>
                                        </span> Need Help: Providing Innovative and Easy Solutions, Call (012) 2569 2453 1215</p>

                                    <p className='cursor-pointer hover:text-gray-800 transition-all duration-500 py-3 px-2 flex items-center text-white '>
                                        <span><TbWorld /></span>
                                        <span className='mx-2'> ENGLISH</span>
                                        <span><AiOutlineDown /></span>
                                    </p>
                                </div>
                                <hr className='horizontal hor w-[10px] h-2 rotate-90 my-auto' />
                                <div className=' flex text-lg  py-3 gap-5 px-2'>
                                    <a className='hover:text-black' href=""><FaFacebookF /></a>
                                    <a className='hover:text-black' href=""><AiOutlineTwitter /></a>
                                    <a className='hover:text-black' href=""> <FiInstagram /></a>
                                </div>
                            </div>
                        </div>

                        <ul className={` lg:pl-4 md:flex justify-start md:items-center lg:py-0  md:pb-0 pb-8 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 lg:gap-60 transition-all duration-500 ease-in ${open ? 'top-[80px]' : 'top-[-480px]'}`}>
                            <div className='md:flex md:justify-between md:items-center '>
                                {
                                    Links.map((link) => (
                                        <li key={link.name} className='md:ml-3 text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                            <Link to={link.link} className='md:text-sm lg:text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>{link.name}</Link>
                                        </li>
                                    ))
                                }
                            </div>


                            {/* ********************************** */}
                            {/* tailwind dropdown menu start */}
                            {/* ********************************** */}

                            {/*   <div className="md:flex md:justify-between md:items-center">

                                <li className={`relative group md:ml-8 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}>
                                    <Link to="/" className='text-lg text-gray-900 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'>
                                        Home</Link>

                                    <ul className='border-b-2 border-primary lg:absolute top-[60px] left-0 px-5 bg-white w-56 hidden  group-hover:block '>

                                        <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                            <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-semibold transition-all duration-400' to="/">HOME Two</Link>
                                        </li>
                                        <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                            <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-semibold transition-all duration-400' to="/">HOME Two</Link>
                                        </li>
                                        <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                            <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-semibold transition-all duration-400' to="/">HOME Two</Link>
                                        </li>
                                    </ul>

                                </li>
                                <li className={`relative group md:ml-8 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}>
                                    <Link to="/about" className='text-lg text-gray-900 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'>
                                        About</Link>

                                    <ul className='border-b-2 border-primary lg:absolute top-[60px] left-0 px-5 bg-white w-56 hidden  group-hover:block '>

                                        <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                            <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-semibold transition-all duration-400' to="/">About One</Link>
                                        </li>
                                        <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                            <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-semibold transition-all duration-400' to="/">About Two</Link>
                                        </li>
                                        <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                            <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-semibold transition-all duration-400' to="/">About Three</Link>
                                        </li>
                                    </ul>

                                </li>


                                //  <li className={`relative group md:ml-8 text-xl md:my-0  py-4 transition-all duration-500 ease-in`}>
                                //     <Link to="/" className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                //         About</Link>
                                //     <ul className='relative lg:absolute top-[60px] left-0 px-5 bg-white w-56 hidden group-hover:block transition-all duration-300'>

                                //         <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                //             <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400' to="/">About 01</Link>
                                //         </li>
                                //         <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                //             <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400' to="/">About 02</Link>
                                //         </li>
                                //         <li onMouseOver={() => setNavShow(!navShow)} className='bg-red-700 text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                //             <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400' to="/">About 0#</Link>

                                //             {navShow && <ul onMouseOver={() => setNavShow(!navShow)} className='bg-red-400 absolute w-52 bottom-90 left-full'>
                                //                 <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                //                     <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400' to="/">About 01</Link>
                                //                 </li>
                                //                 <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                //                     <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400' to="/">About 01</Link>
                                //                 </li>
                                //             </ul>

                                //             }
                                //         </li>
                                //     </ul>
                                // </li> 



                                <li className={`relative group md:ml-8 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}>
                                    <Link to="/blogs" className='text-lg text-gray-900 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-800'>
                                        Blogs</Link>

                                    <ul className='border-b-2 border-primary lg:absolute top-[60px] left-0 px-5 bg-white w-56 hidden  group-hover:block '>

                                        <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                            <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-semibold transition-all duration-400' to="/">Blogs 01</Link>
                                        </li>
                                        <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                            <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-semibold transition-all duration-400' to="/">Blogs 02</Link>
                                        </li>
                                        <li className=' text-xl md:my-0  py-4 transition-all duration-500 ease-in '>
                                            <Link className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-semibold transition-all duration-400' to="/">Blogs 03</Link>
                                        </li>
                                    </ul>

                                </li>


                                <li className='md:ml-8 md:my-0  py-4 transition-all duration-500 ease-in '>
                                    <Link to="/contact" className='text-lg text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                        CONTACT</Link>
                                </li>

                            </div> */}




                            {/* ********************************** */}
                            {/* tailwind dropdown menu end */}
                            {/* ********************************** */}




                            <div class="grid-cols-1 md:grid-cols-2 inline-grid pr-5">
                                <div>
                                    <span onClick={() => setShow(!show)} className='text-left hidden md:block  md:text-center  lg:mb-0 my-auto hover:text-red-600 cursor-pointer mr-[-50px]'><SearchIcon /></span>
                                    {
                                        show &&
                                        <div className="hidden md:block ">
                                            <div className=' lg:flex  justify-center items-center absolute left-20 bottom-20 md:top-[130px] md:right-[-15vw] lg:top-[170px] lg:left-[50vw]'>
                                                <input type="text" placeholder="Type here" class="input w-full max-w-xs rounded-full p-5 bg-slate-200 focus:outline-0 " />
                                                <button className='w-10 h-10  rounded-full bg-primary text-white ml-[-45px] lg:ml-[-45px] hover:bg-black'><SearchIcon className='' /></button>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <Link to='#' class="btn btn-sm btn-primary bg-gradient-to-r from-[rgba(237,28,35,0.98)] to-[#ed541ce6] rounded-full ">Contact Us</Link>
                            </div>
                        </ul>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Navbar;



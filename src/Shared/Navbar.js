import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/images/logo.png'
import { FiInstagram, FiMenu } from 'react-icons/fi';
import SearchIcon from '@mui/icons-material/Search';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import NavImage from "../assets/images/navbar-image.png"



const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "BLOGS", link: "/blogs" },
        { name: "CONTACT", link: "/contact" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className=''

        >
            <div className=' shadow-md z-50 w-full fixed top-0 left-0'>

                <div className=' md:flex lg-flex items-center justify-between bg-white  '
                    style={{ backgroundImage: `url(${NavImage})`, backgroundPosition: 'center', backgroundSize: 'cover', }}
                >
                    <div className='relative lg:flex-basis-1/4 py-5'>
                        <Link to='/' class="">
                            <img className='w-34 pl-5 lg:w-25' src={logo} alt="" />
                        </Link>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}><FiMenu /></ion-icon>
                    </div>

                    <div className=' px-5 basis-3/4 w-[900px] '>
                        <div className='hidden lg:block mx-auto'>
                            <div className=' flex justify-center w-100 bg-red-600 p-2 text-white'>
                                <div className='flex text-sm  '>
                                    <p className='py-3 px-2 '>Need Help: Providing Innovative and Easy Solutions, Call (012) 2569 2453 1215</p>
                                    <p className='py-3 px-2 '>ENGLISH</p>
                                </div>
                                <div className='flex text-lg  py-3 gap-5 px-2'>
                                    <a className='hover:text-black' href=""><FaFacebookF /></a>
                                    <a className='hover:text-black' href=""><AiOutlineTwitter /></a>
                                    <a className='hover:text-black' href=""> <FiInstagram /></a>
                                </div>
                            </div>
                        </div>


                        <ul className={`md:flex md:items-center lg:py-5 md:pb-0 pb-8 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[60px]' : 'top-[-480px]'}`}>
                            {
                                Links.map((link) => (
                                    <li key={link.name} className='md:ml-8 text-xl md:my-0 mt-7 mb-5 '>
                                        <a href={link.link} className='text-sm text-gray-900 hover:text-red-600 font-semibold duration-500'>{link.name}</a>
                                    </li>
                                ))
                            }

                            <div class="grid-cols-1 md:grid-cols-2 inline-grid">
                                <span className='text-left md:text-center mb-3 lg:mb-0 my-auto hover:text-red-600 cursor-pointer'><SearchIcon /></span>
                                <Link to='#' class="btn btn-sm btn-primary bg-gradient-to-r from-[rgba(237,28,35,0.98)] to-[#ed541ce6]  rounded-full ">Contact Us</Link>
                            </div>
                        </ul>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Navbar;
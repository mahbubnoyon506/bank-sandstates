import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/images/logo.png'
import { FiMenu } from 'react-icons/fi';
import SearchIcon from '@mui/icons-material/Search';



const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "BLOGS", link: "/blogs" },
        { name: "CONTACT", link: "/contact" },
    ];
    let [open, setOpen] = useState(false);
    const [show, setShow] = useState(false)

    return (
        <div>
            <div className='shadow-md z-50 w-full fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                    {/* <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]  text-gray-800'> */}
                    <div>
                        <Link to='/' class="w"><img className='w-24 lg:w-25' src={logo} alt="" /></Link>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}><FiMenu /></ion-icon>
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-8  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[60px]' : 'top-[-480px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-xl md:my-0 mt-7 mb-5 '>
                                    <a href={link.link} className='text-sm text-gray-900 hover:text-red-600 font-semibold duration-500'>{link.name}</a>
                                </li>
                            ))
                        }
                        {/* <Button>
                            Get Started
                        </Button> */}
                        <div class="grid-cols-1 md:grid-cols-2 inline-grid ml-2 my-auto">
                                <span onClick={() => setShow(!show)} className='text-left md:text-center mb-3 lg:mb-0 my-auto hover:text-red-600 cursor-pointer mr-[-50px]'><SearchIcon /></span>
                                {
                                    show && 
                                <div className='flex justify-center items-center absolute left-20 bottom-20 md:top-[100px] md:right-[0px] lg:top-[95px] lg:left-[45vw]'> <input type="text" placeholder="Type here" class="input w-full max-w-xs rounded-full p-5 bg-slate-100 md:bg-base-100 " /> <button className='w-10 h-10 rounded-full bg-primary text-white ml-[-45px] lg:ml-[-45px] hover:bg-black'><SearchIcon className=' ' /></button>  </div>
                                }
                            <Link to='#' class="btn btn-sm btn-primary rounded-full mt-5 md:mt-0 ">Contact Us</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;



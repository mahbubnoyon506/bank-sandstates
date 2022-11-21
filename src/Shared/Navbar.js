import React, { useEffect, useState } from 'react';
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
import Loader from '../Components/Loader/Loader';

import banksandestatesLogo from '../../src/assets/logo/banksandestates.jpg'

const Navbar = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, [1000])
    }, [])

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

                <div className=' md:flex lg:flex  justify-between items-center bg-white  '
                    style={{ backgroundImage: `url(${NavImage})`, backgroundPosition: 'center', backgroundSize: 'cover', }}>

                    <div className='relative lg:flex-basis-1/4 lg:py-2 '>
                        <Link to='/' class="">
                            <img className=' ml-8 lg:ml-20 w-32 h-28 lg:w-28 rounded-lg' src={banksandestatesLogo} alt="" />
                        </Link>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-9 cursor-pointer lg:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}><FiMenu /></ion-icon>
                    </div>

                    <div className=' px-0 basis-3/4 w-[900px] '>
                        <div className='hidden lg:block mx-auto'>

                            <div className=' w-100 bg-red-600 p-2 px-3 text-white'>
                                <div className='flex text-sm justify-between'>

                                    <p className='py-3 px-0 flex items-center'>
                                        <span className='inline-flex pt-1 text-lg lg:text-sm'>
                                            <span className='pt-1'><IoIosFlash /></span>
                                        </span> 2 Barnfield Crescent, Exeter, Devon, United Kingdom, EX1 1QT +44 (0) 7782455837
                                    </p>

                                    <p className='cursor-pointer hover:text-gray-800  transition-all duration-500 py-3 px-2 flex items-center text-white '>
                                        <span><TbWorld /></span>
                                        <span className='mx-2'> ENGLISH</span>
                                        <span><AiOutlineDown /></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ************** */}
                        {/* Navbar menu  */}
                        {/* ************** */}

                        <ul className={`  lg:flex  justify-between lg:pr-5 lg:items-center lg:py-0  lg:pb-0 pb-8 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 lg:gap-30 transition-all duration-500 ease-in ${open ? 'top-[100px]' : 'top-[-480px]'}`}>
                            {/* <div className='md:flex md:justify-between md:items-center'>
                                {
                                    Links.map((link) => (
                                        <li onClick={() => setOpen(!open)} key={link.name} className='md:ml-3 text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link to={link.link} className='md:text-sm lg:text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400'>{link.name}</Link>
                                        </li>
                                    ))
                                }
                            </div> */}


                            {/* ********************************** */}
                            {/* tailwind dropdown menu start */}
                            {/* ********************************** */}

                            <div className="lg:flex lg:justify-between">

                                <li className={`relative group md:ml-3 text-xl md:my-0 py-2 transition-all duration-500 ease-in`}>
                                    <Link onClick={() => setOpen(!open)} to="/" className='text-lg lg:text-sm text-gray-900 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-800'>
                                        HOME
                                    </Link>
                                </li>

                                <li className={`relative group md:ml-3 text-xl md:my-0 py-2 transition-all duration-500 ease-in`}>
                                    <Link to="" className='text-lg lg:text-sm text-gray-900 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-800'>
                                        SERVICES</Link>

                                    <ul onClick={() => setOpen(!open)} className='border-b-2 border-primary lg:absolute top-[40px] left-0 px-5 bg-white w-56 hidden  group-hover:block '>

                                        <li onClick={() => setOpen(!open)} className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/">Loan</Link>
                                        </li>
                                        <li onClick={() => setOpen(!open)} className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/travelInsurance">Insurance</Link>
                                        </li>

                                        <li onClick={() => setOpen(!open)} className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/mortgase">Mortagages</Link>
                                        </li>
                                        <li onClick={() => setOpen(!open)} className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/">Fore closure</Link>
                                        </li>
                                    </ul>

                                </li>


                                <li onClick={() => setOpen(!open)} className={`relative group md:ml-3 text-xl md:my-0 py-2 transition-all duration-500 ease-in`}>
                                    <Link to="/personal" className='text-lg lg:text-sm text-gray-900 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-800'>
                                        PERSONAL</Link>

                                    {/* <ul className='border-b-2 border-primary lg:absolute top-[60px] left-0 px-5 bg-white w-56 hidden  group-hover:block '>

                                        <li className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/">Blogs 01</Link>
                                        </li>
                                        <li className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/">Blogs 02</Link>
                                        </li>
                                        <li className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/">Blogs 03</Link>
                                        </li>
                                    </ul> */}

                                </li>
                                <li onClick={() => setOpen(!open)} className={`relative group md:ml-3 text-xl md:my-0 py-2 transition-all duration-500 ease-in`}>
                                    <Link to="/corporate" className='text-lg lg:text-sm text-gray-900 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-800'>
                                        CORPORATE</Link>
                                </li>




                                <li className={`relative group md:ml-3 text-xl md:my-0 py-2 transition-all duration-500 ease-in`}>
                                    <Link to="" className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400'>
                                        NEWS
                                    </Link>

                                    <ul className='border-b-2 border-primary lg:absolute top-[40px] left-0 px-3 bg-white w-56 hidden  group-hover:block '>

                                        <li onClick={() => setOpen(!open)} className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/">Digital Assets</Link>
                                        </li>
                                        <li onClick={() => setOpen(!open)} className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/">Covid</Link>
                                        </li>

                                        <li onClick={() => setOpen(!open)} className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/">Property Investments</Link>
                                        </li>
                                        <li onClick={() => setOpen(!open)} className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/">Share index</Link>
                                        </li>
                                        <li onClick={() => setOpen(!open)} className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/">Insurance</Link>
                                        </li>
                                        <li onClick={() => setOpen(!open)} className=' text-xl md:my-0  py-2 transition-all duration-500 ease-in '>
                                            <Link className='text-lg lg:text-sm text-gray-900 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[10px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-400' to="/">Others</Link>
                                        </li>
                                    </ul>

                                </li>
                                <li onClick={() => setOpen(!open)} className={`relative group md:ml-3 text-xl md:my-0 py-2 transition-all duration-500 ease-in`}>
                                    <Link to="/aboutUs" className='text-lg lg:text-sm text-gray-900 p-2 group-hover:border-b-2 border-b-primary translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-medium lg:font-semibold transition-all duration-800'>
                                        ABOUT</Link>
                                </li>
                            </div>




                            {/* ********************************** */}
                            {/* tailwind dropdown menu end */}
                            {/* ********************************** */}




                            <div class=" lg:grid-cols-2 inline-grid">
                                <div className='my-auto'>
                                    <span onClick={() => setShow(!show)} className='text-left hidden md:block  md:text-center  lg:mb-0 my-auto hover:text-red-600 cursor-pointer mr-[-50px]'><SearchIcon /></span>
                                    {
                                        show &&
                                        <div className="hidden md:block ">
                                            <div className=' lg:flex  justify-center items-center absolute left-20 bottom-20 md:top-[130px] md:right-[-15vw] lg:top-[170px] lg:left-[50vw]'>
                                                <input type="text" placeholder="Type here" class="input max-w-xs rounded-full py-5 bg-slate-200 focus:outline-0 " />
                                                <button className='col-span-2 w-10 h-10  rounded-full bg-primary text-white ml-[-45px] lg:ml-[-45px] hover:bg-black'><SearchIcon className='' /></button>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div onClick={() => setOpen(!open)}>
                                    <Link to='/contact' class="btn btn-sm btn-primary bg-gradient-to-r from-[rgba(237,28,35,0.98)] to-[#ed541ce6] rounded-full ">Contact Us</Link>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Navbar;



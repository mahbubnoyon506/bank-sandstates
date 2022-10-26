import React, { useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import background from '../assets/images/footer-bg.jpg'
import image_1 from '../assets/images/1.jpg'
import { AiFillPhone } from "react-icons/ai"
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });

    })

    const date = new Date().getFullYear()
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <div className=' p-2 md:p-7 lg:p-10 pt-10'>

                <footer className='md:flex pl-3  justify-between items-center w-full'>
                    <div>
                        <p className='text-lg mt-4 lg:text-4xl text-base-100 font-bold mb-3'>Sign up for latest news and <br /> insights from <span className='text-primary'>Quera.</span></p>
                    </div>
                    <div className='md:flex'>
                        <input type="text" placeholder="Type here" class="input rounded-full max-w-xs -full " />
                        <div className='md:ml-[-50px] md:mt-0 mt-2'>
                            <input className='btn bg-gradient-to-r from-[#ED1C24] to-[#ED521C] rounded-full border-0  hover:bg-gradient-to-l from-[#ED521C] to-[#ED1C24] ' type="submit" value="Subscribe" />
                        </div>
                    </div>
                </footer>
                <div className='py-20'><hr /></div>


                {/*  */}

                <footer class=" px-5 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div data-aos="fade-up">
                        <h3 class="mb-5 text-xl text-white font-semibold capitalize ">Do you have questions? <br /> Call or visit us.</h3>
                        <a href="+569 2316 2156" className=' flex gap-2 text-[20px] font-bold'>
                            <AiFillPhone className='text-red-500 text-2xl' />
                            <span class=""> <span className='text-red-500'>+569 2316 2156</span> </span>
                        </a>
                        <a href='_#' class="text-[#6c6c6c]  pb-2 font-[16px] font-bold mb-[18px]">2659 Dancing Street, New York,<br /> NY 25630, USA</a>
                        <br />
                        <a href='contact@example.com' class="text-whie hover:text-red-500 hover:underline transition-all">contact@example.com</a>
                    </div>
                    <div data-aos="fade-up" >
                        <h3 class="mb-5 text-xl text-white font-semibold capitalize ">Usefull Links</h3>
                        <div className='text-xs '>
                            <a class=" hover:text-red-600 transition-all duration-300 text-[#6c6c6c] flex mt-1 cursor-pointer">Our Company</a>
                            <a class=" hover:text-red-600 transition-all duration-300 text-[#6c6c6c] flex mt-1 cursor-pointer">About Us</a>
                            <a class=" hover:text-red-600 transition-all duration-300 text-[#6c6c6c] flex mt-1 cursor-pointer">Latest News</a>
                            <a class=" hover:text-red-600 transition-all duration-300 text-[#6c6c6c] flex mt-1 cursor-pointer">Contact Us</a>
                            <a class=" hover:text-red-600 transition-all duration-300 text-[#6c6c6c] flex mt-1 cursor-pointer">Privacy Policy</a>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <span class="mb-10 lg:mb-5 text-xl text-white font-semibold  capitalize ">Latest Posts</span>

                        <div className='flex mt-5'>
                            <img className='w-20 h-20' src='https://themewar.com/html/quera/assets/images/blog/t1.jpg' alt="" />
                            <a class="ml-2">
                                <span className=' text-sm text-gray-500 '>10 June, 2021</span>
                                <br />

                                <div className='font-semibold hover:text-primary transition-all duration-300 cursor-pointer'>
                                    <span> Losing never felt so good <br /> energy everything</span>
                                </div>
                            </a>
                        </div>

                        <div className='flex mt-5 lg:mt-2 mb-5 md:mb-0'>
                            <img className='w-20 h-20 ' src='https://themewar.com/html/quera/assets/images/blog/t2.jpg' alt="" />
                            <a class="ml-2">
                                <span className=' text-sm text-gray-500 '>10 June, 2021</span>
                                <br />
                                <div className='font-semibold hover:text-primary transition-all duration-300 cursor-pointer'>
                                    <span className='text-sm'> Losing never felt so good <br /> energy everything</span>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div data-aos="fade-up">
                        <h3 class="mb-5 text-xl text-white font-semibold capitalize ">Post Gallery</h3>
                        <div className='flex flex-cols-2 gap-4'>
                            <div className=''>
                                <img className='w-20 h-20 mb-2' src='https://themewar.com/html/quera/assets/images/blog/g1.jpg' alt="" />
                                <img className='w-20 h-20 ' src='https://themewar.com/html/quera/assets/images/blog/g2.jpg' alt="" />
                            </div>
                            <div>
                                <img className='w-20 h-20 mb-2' src='https://themewar.com/html/quera/assets/images/blog/g3.jpg' alt="" />
                                <img className='w-20 h-20 ' src='https://themewar.com/html/quera/assets/images/blog/g4.jpg' alt="" />
                            </div>
                            <div>
                                <img className='w-20 h-20 mb-2' src='https://themewar.com/html/quera/assets/images/blog/g5.jpg' alt="" />
                                <img className='w-20 h-20 ' src='https://themewar.com/html/quera/assets/images/blog/g6.jpg' alt="" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* <footer class=" footer w-full px-10 py-4 bg-black text-white "> */}
            <footer class=" flex flex-col md:flex-row lg:fles-row lg:justify-between md:justify-between lg:px-16 md:px-16 gap-4 justify-center bg-black py-5 text-white">

                <div class="items-center md:items-start lg:items-start grid-flow-col text-center">
                    <p>&copy; {date} Quera. All Rights Reserved.</p>
                </div>

                <div class="flex justify-center md:place-self-center md:justify-self-end">
                    <div class="grid grid-flow-col gap-4 ">
                        <a className='cursor-pointer hover:text-red-700 transition-all duration-300 '>Privacy</a>
                        <a className='cursor-pointer hover:text-red-700 transition-all duration-300 '>Terms</a>
                        <a className='cursor-pointer hover:text-red-700 transition-all duration-300 '>Cntact</a>
                        <a className='cursor-pointer hover:text-red-700 transition-all duration-300 '>About</a>

                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;
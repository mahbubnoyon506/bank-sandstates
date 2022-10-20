import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import background from '../assets/images/footer-bg.jpg'
import image_1 from '../assets/images/1.jpg'
import { AiFillPhone } from "react-icons/ai"

const Footer = () => {
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
                            <input className='btn btn-primary -full -py-2 rounded-full' type="submit" value="Subscribe" />
                        </div>
                    </div>
                </footer>
                <div className='py-20'><hr /></div>


                {/*  */}

                <footer class=" px-5 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <h3 class="mb-5 text-xl text-white font-semibold capitalize ">Do you have questions? <br /> Call or visit us.</h3>
                        <a href="+569 2316 2156" className=' flex gap-2 text-[20px] font-bold'>
                            <AiFillPhone className='text-red-500 text-2xl' />
                            <span class=""> <span className='text-red-500'>+569 2316 2156</span> </span>
                        </a>
                        <a href='_#' class="text-[#6c6c6c]  pb-2 font-[16px] font-bold mb-[18px]">2659 Dancing Street, New York,<br /> NY 25630, USA</a>
                        <br />
                        <a href='contact@example.com' class="text-whie hover:text-red-500 hover:underline transition-all">contact@example.com</a>
                    </div>
                    <div>
                        <h3 class="mb-5 text-xl text-white font-semibold capitalize ">Usefull Links</h3>
                        <div className='text-xs '>
                            <a class=" hover:text-red-600 transition-all duration-300 text-[#6c6c6c] flex mt-1 cursor-pointer">Our Company</a>
                            <a class=" hover:text-red-600 transition-all duration-300 text-[#6c6c6c] flex mt-1 cursor-pointer">About Us</a>
                            <a class=" hover:text-red-600 transition-all duration-300 text-[#6c6c6c] flex mt-1 cursor-pointer">Latest News</a>
                            <a class=" hover:text-red-600 transition-all duration-300 text-[#6c6c6c] flex mt-1 cursor-pointer">Contact Us</a>
                            <a class=" hover:text-red-600 transition-all duration-300 text-[#6c6c6c] flex mt-1 cursor-pointer">Privacy Policy</a>
                        </div>
                    </div>
                    <div>
                        <span class="mb-5 text-xl text-white font-semibold  capitalize ">Latest Posts</span>

                        <div className='flex mt-5'>
                            <img className='w-16 h-14 ' src={image_1} alt="" />
                            <a class="ml-2">
                                <span className=' text-sm text-gray-500 '>10 June, 2021</span>
                                <br />

                                <div className='font-semibold hover:text-primary transition-all duration-300 cursor-pointer'>
                                    <span> Losing never felt so good <br /> energy everything</span>
                                </div>
                            </a>
                        </div>

                        <div className='flex  mt-2 '>
                            <img className='w-16 h-14 ' src={image_1} alt="" />
                            <a class="ml-2">
                                <span className=' text-sm text-gray-500 '>10 June, 2021</span>
                                <br />
                                <div className='font-semibold hover:text-primary transition-all duration-300 cursor-pointer'>
                                    <span className='text-sm'> Losing never felt so good <br /> energy everything</span>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div>
                        <h3 class="mb-5 text-xl text-white font-semibold capitalize ">Post Gallery</h3>
                        <div className='flex flex-cols-2 gap-4'>
                            <div className=''>

                                <img className='w-16 h-14 mb-2' src={image_1} alt="" />
                                <img className='w-16 h-14 ' src={image_1} alt="" />

                            </div>
                            <div>

                                <img className='w-16 h-14 mb-2' src={image_1} alt="" />
                                <img className='w-16 h-14 ' src={image_1} alt="" />
                            </div>
                        </div>
                    </div>
                </footer>


            </div>
            {/* <footer class=" footer w-full px-10 py-4 bg-black text-white "> */}
            <footer class=" flex flex-col md:flex-row lg:fles-row lg:justify-between md:justify-between lg:px-10 md:px-8 gap-4 justify-center bg-black py-5 text-white">

                <div class="items-center md:items-start lg:items-start grid-flow-col text-center">
                    <p>&copy; {date} Quera. All Rights Reserved.</p>
                </div>

                <div class="flex justify-center md:place-self-center md:justify-self-end">
                    <div class="grid grid-flow-col gap-4 ">
                        <a className='cursor-pointer hover:text-red-700 transition-all duration-300 '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a className='cursor-pointer hover:text-red-700 transition-all duration-300 '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a className='cursor-pointer hover:text-red-700 transition-all duration-300 '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;
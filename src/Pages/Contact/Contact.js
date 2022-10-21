import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import contactbg from '../../assets/images/16.jpg'
import Button from '../../Shared/Button';

const Contact = () => {
    return (
        <div>
            <div className='lg:grid grid-cols-3 gap-10 p-5 lg:p-20 bg-[#FFEDEE]'>
                <div className='flex items-center'>
                    <div className='border-2 border-[#FFD1D3] rounded-full p-3 hover:border-primary'>
                        <div className='w-[50px] h-[50px] bg-base-100 rounded-full flex items-center justify-center text-primary hover:text-white hover:bg-primary'><PlaceIcon /></div>
                    </div>
                    <div className='ml-5'>
                        <h2 className='text-2xl font-bold mb-2'>Office Address:</h2>
                        <p className='text-[#74777C] text-lg'>
                            3556 Hartford Way Vlg, Mount
                            <br />
                            Pleasant, SC, 29466, Australia.
                        </p>
                    </div>
                </div>
                <div className='flex items-center my-5 lg:my-0'>
                    <div className='border-2 border-[#FFD1D3] rounded-full p-3 hover:border-primary'>
                        <div className='w-[50px] h-[50px] bg-base-100 rounded-full flex items-center justify-center text-primary hover:text-white hover:bg-primary'><LocalPhoneIcon /></div>
                    </div>
                    <div className='ml-5'>
                        <h2 className='text-2xl font-bold mb-2'>Call Us For Help:</h2>
                        <p className='text-lg text-[#74777C]'>+259 2563 2562, <br /> +256 3654 2156</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='border-2 border-[#FFD1D3] rounded-full p-3 hover:border-primary'>
                        <div className='w-[50px] h-[50px] bg-base-100 rounded-full flex items-center justify-center text-primary hover:text-white hover:bg-primary'><EmailIcon /></div>
                    </div>
                    <div className='ml-5'>
                        <h2 className='text-2xl font-bold mb-2'>Mail info:</h2>
                        <p className='text-lg text-[#74777C]'>example@quera.com <br /> info@example.com</p>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-3 gap-10 px-5 py-10 lg:p-20 bg-base-100'>
                <div className='col-span-2 md:pr-10 sm:mb-5 md:mb-0'>
                    <p className='text-primary font-bold text-lg'>Your email address will not be published*</p>
                    <h2 className='text-3xl lg:text-5xl text-neutral font-extrabold my-3'>Send Us a Message</h2>
                    <form className='mb-10 lg:mb-0' action="">
                        <div className='my-10 lg:flex items-center'>
                            <input type="text" placeholder="Your Name" class="input w-full rounded-full p-7 shadow-md mr-5 mb-5 lg:mb-0" />
                            <input type="text" placeholder="Your Email" class="input w-full rounded-full p-7 shadow-md " />
                        </div>
                        <div>
                            <select class="select w-full rounded-full shadow-md mb-5">
                                <option className=' text-[#74777C]' disabled selected>Select Subjects</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                        <textarea class="w-full rounded-3xl p-5 shadow-md" placeholder="Write text here"></textarea>
                        <div className='flex my-5'><input type="checkbox" name="" id="" /><p className='ml-2 text-[#74777C]'>I Agree to get-e- mails about future conferences.</p></div>
                        <div className='flex justify-center lg:justify-start'>
                            <input className=' btn btn-primary rounded-full bg-gradient-to-r from-[rgba(237,28,35,0.98)] to-[#ed541ce6] ' type="submit" value="Submit Now" />
                        </div>
                    </form>
                </div>
                <div className='p-5 pb-[50px] pt-[550px] md:pt-[800px] lg:pt-[350px]' style={{ backgroundImage: `url(${contactbg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <h2 className='text-3xl font-bold text-primary text-center'>Chat With Support</h2>
                    <p className='text-neutral text-lg font-bold text-center py-5'>Let's chat our live experts to get answer your question</p>
                    <div className='flex justify-center'>
                        <Button>Live Chat</Button>
                        {/* <button className='bg-gradient-to-r from-[rgba(237,28,35,0.5)] to-[#ed541ce6]   btn btn-primary rounded-full'>Live Chat</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
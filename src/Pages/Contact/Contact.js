import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import contactbg from '../../assets/images/16.jpg'

const Contact = () => {
    return (
        <div>
            <div className='md:grid grid-cols-3 gap-10 p-20 bg-[#FFEDEE]'>
                <div className='flex items-center'>
                    <div className='btn btn-link bg-base-100 rounded-full hover:bg-base-100'><PlaceIcon /></div>
                    <div className='ml-3'>
                        <h2 className='text-2xl font-bold mb-2'>Office Address:</h2>
                        <p className='text-[#74777C]'>3556 Hartford Way Vlg, Mount
                            Pleasant, SC, 29466, Australia.</p>
                    </div>
                </div>
                <div className='flex items-center sm:my-5 md:my-0'>
                    <div className='btn btn-link bg-base-100 rounded-full hover:bg-base-100'><LocalPhoneIcon /></div>
                    <div className='ml-3'>
                        <h2 className='text-2xl font-bold mb-2'>Call Us For Help:</h2>
                        <p className='text-[#74777C]'>+259 2563 2562, <br /> +256 3654 2156</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='btn btn-link bg-base-100 rounded-full hover:bg-base-100'><EmailIcon /></div>
                    <div className='ml-3'>
                        <h2 className='text-2xl font-bold mb-2'>Mail info:</h2>
                        <p className='text-[#74777C]'>example@quera.com <br /> info@example.com</p>
                    </div>
                </div>
            </div>
            <div className='md:grid grid-cols-3 gap-10 p-20 bg-base-100'>
                <div className='col-span-2 md:pr-10 sm:mb-5 md:mb-0'>
                    <p className='text-primary font-bold text-lg'>Your email address will not be published*</p>
                    <h2 className='text-5xl text-neutral font-extrabold my-3'>Send Us a Message</h2>
                    <form action="">
                        <div className='my-10 md:flex items-center'>
                            <input type="text" placeholder="Your Name" class="input w-full rounded-full p-7 shadow-md mr-5 sm:mb-5 md:mb-0" />
                            <input type="text" placeholder="Your Email" class="input w-full rounded-full p-7 shadow-md " />
                        </div>
                        <div>
                            <select class="select w-full rounded-full shadow-md mb-5">
                                <option className='text-[#74777C]' disabled selected>Select Subjects</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            </div>
                            <textarea class="w-full rounded-3xl p-5 shadow-md" placeholder="Write text here"></textarea>
                            <div className='flex my-5'><input type="checkbox" name="" id="" /><p className='ml-2 text-[#74777C]'>I Agree to get-e- mails about future conferences.</p></div>
                            <input className='btn btn-primary rounded-full' type="submit" value="Submit Now" />
                    </form>
                </div>
                <div className='md:pt-[350px] pb-[50px] sm:pt-[550px]' style={{ backgroundImage: `url(${contactbg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <h2 className='text-3xl font-bold text-primary text-center'>Chat With Support</h2>
                    <p className='text-neutral text-lg font-bold text-center py-5'>Let's chat our live experts to get answer your question</p>
                    <div className='flex justify-center'><button className='btn btn-primary rounded-full'>Live Chat</button></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
import React, { useEffect, useState } from 'react';
import member1 from '../../assets/images/1.jpg';
import AddIcon from '@mui/icons-material/Add';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Members = ({ member, index }) => {
    const { id, name, image, designation } = member;
    const [show, setShow] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    })

    return (
        <div className='text-center' data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
        >
            <img className='w-full' src={image} alt="" />
            <div className='w-[100px] h-[100px] bg-slate-500 flex items-center justify-center mx-auto mt-[-100px]'>

                {
                    show &&
                    <div
                        data-aos="fade-up"
                        className='flex justify-center items-center'>
                        <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href={member.facebook}> <FaFacebookF /> </a>
                        <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href={member.linkedin}> <FaLinkedinIn /> </a>
                        <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral  hover:text-white hover:bg-primary' href={member.twitter}> <FaTwitter /> </a>
                    </div>
                }
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={() => setShow((!show && id))} className='btn btn-link rounded-t-full text-primary mt-[-30px] bg-base-100 hover:bg-base-100'><AddIcon /></button>
            </div>
            <h2 className='text-2xl text-bold hover:text-primary'>{name}</h2>
            <p className='text-primary'>{designation}</p>
        </div>
    );
};

export default Members;
import React, { useState } from 'react';
import member1 from '../../assets/images/1.jpg';
import AddIcon from '@mui/icons-material/Add';
import {FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Members = ({member, index}) => {
    const {id, name, designation} = member;
    const [show, setShow] = useState(false);
    console.log(show)
    return (
        <div className='text-center'>
            <img className='w-full' src={member1} alt="" />
            <div className='w-[100px] h-[100px] bg-slate-500 flex items-center justify-center mx-auto mt-[-100px]'>

                {
                 show &&
                    <div className='flex justify-center items-center'>
                        <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href={member.facebook}> <FaFacebookF /> </a>
                        <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href={member.linkedin}> <FaLinkedinIn /> </a>
                        <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral  hover:text-white hover:bg-primary' href={member.twitter}> <FaTwitter /> </a>
                    </div>
                }
            </div>
            <button onClick={() => setShow((!show && id))} className='btn btn-link rounded-t-full text-primary mt-[-50px] bg-base-100 hover:bg-base-100'><AddIcon /></button>
            <h2 className='text-2xl text-bold hover:text-primary'>{name}</h2>
            <p className='text-primary'>{designation}</p>
        </div>
    );
};

export default Members;
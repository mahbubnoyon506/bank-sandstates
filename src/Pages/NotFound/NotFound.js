import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/404.png'

const NotFound = () => {
    return (
        <div className='bg-base-100 py-20'>
            <img className='mx-auto' src={notFound} alt="" />
            <h2 className='text-5xl font-extrabold text-neutral text-center'>Oops! That page can't be found.</h2>
            <p className='text-[#74777c] text-center py-8 text-lg'>Unfortunately, something went wrong and this page does not exist. Try <br /> using the search or return to the previous page.</p>
            <div className='flex justify-center'>

                <Link className='text-white btn bg-gradient-to-r from-[#ED1C24] to-[#ED521C] rounded-full border-0  hover:bg-gradient-to-l from-[#ED521C] to-[#ED1C24] ' to='/'>Go Back to Home </Link>
            </div>
        </div>
    );
};

export default NotFound;
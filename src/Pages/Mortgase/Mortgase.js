import React, { useEffect } from 'react';
import Button from '../../Shared/Button';

const Mortgase = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='p-5 lg:p-20 bg-white'>
            <h1 className='text-4xl font-bold'>Mortgases</h1>
            <div>
                <h3 className='text-xl font-bold pt-8 pb-4'>Buying your first home</h3>
                <p>Let us guide you into your new home with our helpful articles and tools.</p>
                <h3 className='text-xl font-bold pt-8 pb-4'>Renewing your mortgage</h3>
                <p>Find out how mortgage renewal works, when to renew and what documents you need.</p>
                <h3 className='text-xl font-bold pt-8 pb-4'>Buying your next property</h3>
                <p>Browse through and seek advice about purchasing your next home, investment property or cottage.</p>
                <div className='mt-5'>
                    <Button>Login</Button> <span className='mr-3'></span>
                    <Button>Register</Button>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[rgba(237,28,35,0.9)] to-[#ed541ce6] text-white font-semibold py-5 mt-10 rounded-sm'>
                <p className='text-xl px-4'>We are committed to providing you with customized services designed to suit your individual requirements whether it is high earning deposits, easy and convenient loans, or enabling you to keep track of your finances, thereby saving your time.</p>
            </div>
        </div>
    );
};

export default Mortgase;
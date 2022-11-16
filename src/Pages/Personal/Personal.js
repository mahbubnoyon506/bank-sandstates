import React, { useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import Button from '../../Shared/Button';

const Personal = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='p-5 lg:p-20 bg-white'>
            <h1 className='text-4xl font-bold'>Personal</h1>
            <div>
                <h3 className='text-xl font-bold pt-8 pb-4'>Personal Loans</h3>
                <p>3.5% APR Representative on loans between £7,500 and £25,000 over 1 to 5 years. Other loan amounts and terms are available at different rates. Our loans start at £1,000.</p>
                <h3 className='text-xl font-bold pt-8 pb-4'>You can apply for a loan if</h3>
                <ul>
                    <li className='flex items-center'> <FaCircle className='pr-2' />You’re aged 18 or over and live in the UK (excluding the Channel Islands and the Isle of Man)</li>
                    <li className='flex items-center'> <FaCircle className='pr-2' />You’re in paid employment or have a regular income</li>
                    <li className='flex items-center'> <FaCircle className='pr-2' />You’re not a full–time student</li>
                    <li className='flex items-center'> <FaCircle className='pr-2' />You haven’t had a request for credit declined in the past month</li>
                    <li className='flex items-center'> <FaCircle className='pr-2' />You don’t have a history of bad credit, such as bankruptcy or CCJs</li>
                    <li className='flex items-center'> <FaCircle className='pr-2' />You are not applying for any of these reasons</li>
                    <li className='flex items-center'> <FaCircle className='pr-2' />Lending and rate are subject to our assessment of your circumstances.</li>
                </ul>
                <h3 className='text-xl font-bold pt-8'>Why choose BE?</h3>
                <h4 className='font-bold pt-4 pb-2'>Take a repayment holiday</h4>
                <p>You can ask for up to two repayment holidays a year, subject to approval. Interest will still be charged for the months that you don’t make any payments, so you'll pay more interest overall and your original term will be extended.</p>
                <h4 className='font-bold pt-4 pb-2'>No charge for making extra payments</h4>
                <p>We won’t charge you for paying more than the agreed monthly amount, if you find you have some spare cash.</p>
                <p>It's quick and easy to apply online, with no paper forms to sign.</p>
                <h4 className='font-bold pt-4 pb-2'>A bank you can trust</h4>
                <p>We’ve been taking care of our customers for over 160 years, so you know you’re in safe hands.</p>
                <div className='mt-5'>
                    <Button>Login</Button> <span className='mr-3'></span>
                    <Button>Register</Button>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[rgba(237,28,35,0.9)] to-[#ed541ce6] text-white font-semibold py-5 mt-10 rounded-sm'>
                <p className='text-xl px-4'>BE Bank’s wide range of services can make banking easier and more convenient, than ever. See why BE Bank is the smartest choice for helping you meet your financial goals.</p>
            </div>
        </div>
    );
};

export default Personal;
import React from 'react';
import { useEffect } from 'react';

const Loan = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div className='p-5 lg:p-20 bg-white'>
            <h1 className='text-4xl font-bold text-center'>Loan Page</h1>
            <p className='text-lg font-bold text-center'>Will publish soon !!</p>
        </div>
    );
};

export default Loan;
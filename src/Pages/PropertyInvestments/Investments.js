import React from 'react';
import { useEffect } from 'react';

const Investments = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div className='p-5 lg:p-20 bg-white pt-16'>
            <h1 className='text-4xl font-bold text-center'>Property Investments Page</h1>
            <p className='text-lg font-bold text-center'>Will publish soon !!</p>
        </div>
    );
};

export default Investments;
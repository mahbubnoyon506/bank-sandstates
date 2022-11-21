import React from 'react';
import { useEffect } from 'react';

const Closure = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div className='p-5 lg:p-20 bg-white'>
            <h1 className='text-4xl font-bold text-center'>For Closure Page</h1>
            <p className='text-lg font-bold text-center'>Will publish soon !!</p>
        </div>
    );
};

export default Closure;
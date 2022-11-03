import React from 'react';
import { RiseLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex justify-center items-center' style={{height: '100vh'}}>
            <RiseLoader color="#DC2626" />
        </div>
    );
};

export default Loader;
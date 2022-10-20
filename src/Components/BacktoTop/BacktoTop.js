import React, { useEffect, useState } from 'react';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

const BacktoTop = () => {
    const [backtoTop, setBacktoTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setBacktoTop(true)
            } else {
                setBacktoTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            {
              backtoTop &&  <button style={{ position: 'fixed', bottom: '50px', right: '50px' }} className='bg-primary z-10 rounded-full p-2 text-white' onClick={scrollUp}><VerticalAlignTopIcon /></button>
            }
            
        </div>
    );
};

export default BacktoTop;
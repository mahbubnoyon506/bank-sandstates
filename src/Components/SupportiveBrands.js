import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo1 from '../../src/assets/logo/Picture1.jpg'
import logo2 from '../../src/assets/logo/Picture2.jpg'
import logo3 from '../../src/assets/logo/Picture3.jpg'
import logo4 from '../../src/assets/logo/Picture4.jpg'



const SupportiveBrands = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });

    })
    const Logos = [
        { "logo": logo1 },
        { "logo": logo2 },
        { "logo": logo3 },
        { "logo": logo4 },
        { "logo": logo1 },
        { "logo": logo2 },
        { "logo": logo3 },
        { "logo": logo4 },
    ]

    const brands = [
        { 'logo': 'https://i.ibb.co/82zc8kH/1.png' },
        { 'logo': 'https://i.ibb.co/f4zSgMw/2.png' },
        { 'logo': 'https://i.ibb.co/NW56VRd/3.png' },
        { 'logo': 'https://i.ibb.co/TLJFvj9/4.png' },
        { 'logo': 'https://i.ibb.co/82zc8kH/1.png' },
        { 'logo': 'https://i.ibb.co/f4zSgMw/2.png' },
        { 'logo': 'https://i.ibb.co/NW56VRd/3.png' },
        { 'logo': 'https://i.ibb.co/TLJFvj9/4.png' },
    ]

    return (
        <div className='bg-primary'>
            <div className='px-5 md:px-10 py-20 lg:flex flex-row justify-center items-center'>

                <p data-aos="fade-up" className='basis-1/4 text-4xl font-bold text-base-100 lg:text-center text-center pr-2'>Our partners</p>

                <div className='basis-1/2 py-5 sm:mx-20 md:mx-0'>
                    <Marquee speed={70} gradient={false}>
                        {
                            Logos.map((brand, index) =>
                                <>
                                    <img className="mx-5 w-[110px] rounded-lg" src={brand.logo} alt="" />
                                </>
                            )
                        }
                    </Marquee>
                </div>

                {/* <div className='basis-1/4 text-center'>
                    <div data-aos="fade-up px-5">
                        <Link to='/contact' className='w-full lg:w-32 btn bg-base-100 rounded-full text-primary border-0 hover:text-white'>Join With Us</Link>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default SupportiveBrands;
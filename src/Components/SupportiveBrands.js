import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';



const SupportiveBrands = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });

    })

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
            <div className='px-5 md:px-20 py-20 lg:flex flex-row justify-between items-center'>
                <p data-aos="fade-right" className='basis-1/4 text-2xl font-bold text-base-100 lg:text-left text-center pr-2'>Our Supportive Brands</p>
                <div className='basis-1/2 py-5 sm:mx-20 md:mx-0'>
                    <Marquee speed={70} gradient={false}>
                        {
                            brands.map((brand, index) =>
                                <>
                                    <img className="mx-5" src={brand.logo} alt="" />
                                </>
                            )
                        }
                    </Marquee>
                </div>
                <div data-aos="fade-left" className='basis-1/4'>
                    <Link to='/contact' className='w-full btn bg-base-100 rounded-full text-primary border-0 hover:text-white'>Join With Us</Link>
                </div>
            </div>
        </div>
    );
};

export default SupportiveBrands;
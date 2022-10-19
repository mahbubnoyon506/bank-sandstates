import React from "react";
import Marquee from "react-fast-marquee";

const SupportiveBrands = () => {

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
            <div className='sm:px-5 md:px-20 py-20 lg:flex flex-row justify-between items-center'>
                <p className='basis-1/4 text-2xl font-bold text-base-100 lg:text-left text-center pr-2'>Our Supportive Brands</p>
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
                <div className='basis-1/4 px-5'>
                    <button className='w-full btn bg-base-100 rounded-full text-primary border-0'>Join With Us</button>
                </div>
            </div>
        </div>
    );
};

export default SupportiveBrands;
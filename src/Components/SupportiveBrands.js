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
        <div className='bg-primary p-5'>
            <div className='sm:p-5 md:p-20 md:flex flex-row justify-between items-center'>
                <p className='basis-1/4 text-4xl font-bold text-base-100'>Our Supportive <br /> Brands</p>
                <div className='basis-1/2 sm:py-3 sm:my-2 md:my-0'>
                    <Marquee speed={70} gradient={false}>
                        {
                            brands.map((brand, index) =>
                                <>
                                    <img className=" mx-5" src={brand.logo} alt="" />
                                </>
                            )
                        }
                    </Marquee>
                </div>
                <div className='basis-1/4 pl-5'>
                    <button className='btn bg-base-100 rounded-full text-primary border-0'>Join With Us</button>
                </div>
            </div>
        </div>
    );
};

export default SupportiveBrands;
import React, { useEffect } from 'react';
import AgencyBg from '../assets/images/agency-bg.png'
import AgencySubBG from '../assets/images/agency-sub-bg.png'
import CardBG from '../assets/images/card-bg.jpg'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import { MdScreenSearchDesktop } from "react-icons/md";
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Agency = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });

    })

    const services = [

        {
            'image': 'https://i.ibb.co/PZ9cLnT/analysis.png',
            'title': 'Market Research',
            'description': 'A typical business holds many different assets called capital, including office...'
        },
        {
            'image': 'https://i.ibb.co/HrT88BT/business-and-finance.png',
            'title': 'Startup Business',
            'description': 'A typical business holds many different assets called capital, including office...'
        },
        {
            'image': 'https://i.ibb.co/wwQc9Tc/growth.png',
            'title': 'Business Growth',
            'description': 'A typical business holds many different assets called capital, including office...'
        },
        {
            'image': 'https://i.ibb.co/XLgZffV/mentor.png',
            'title': 'Insurance Task',
            'description': 'A typical business holds many different assets called capital, including office...'
        },
        {
            'image': 'https://i.ibb.co/tBzp5Tb/advisor.png',
            'title': 'Consultancy',
            'description': 'A typical business holds many different assets called capital, including office...'
        },
        {
            'image': 'https://i.ibb.co/TBf937Q/advice.png',
            'title': 'Financial Advices',
            'description': 'A typical business holds many different assets called capital, including office...'
        }
    ]


    return (
        <div className='px-5 md:px-10 lg:px-20 py-10 lg:py-20' style={{ backgroundImage: `url(${AgencyBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', }}>
            <div className=''>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='bg-auto p-3 lg:p-16 bg-[#F3F3F3]' style={{ backgroundImage: `url(${AgencySubBG})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', zIndex: "1", }}>
                        <div className='px-7 py-10 sm:mb-2 z-20' >
                            <h2 data-aos="fade-right" className='text-3xl md:text-3xl lg:text-5xl  font-bold leading-normal pb-10'>We Make Your <br /> Agency <span className='text-primary'>Full <br /> Bright</span> </h2>
                            <p className='lg:pr-10'>This Cheat Sheet offers tips and advice to help you get the essentials right. here's a list of the most important tasks of business accounting and their meaning.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {
                            services.slice(0, 2).map((service, index) =>
                                <div data-aos="fade-up" className=''>
                                    <Card key={index} className='sm:mb-2 sm:flex justify-center py-12 px-8 relative bg-no-repeat bg-cente  hover:bg-[#202124]  mx-auto hover:z-20 hover:text-white' >
                                        <div className='absolute inset-0 opacity-40 '
                                            style={{ backgroundImage: `url(${CardBG})`, backgroundPosition: 'center', backgroundSize: 'cover', zIndex: "-10" }}
                                        ></div>

                                        <div className=''>
                                            <div className='border-2 border-primary rounded-full w-[100px] h-[100px] flex justify-center items-center mb-5'>
                                                <AcUnitIcon className='text-primary text-center' />
                                                {/* <img className='w-50 h-50 p-5' src={service.image} alt="" /> */}
                                            </div>
                                            <div >
                                                <Typography className=' hover:text-red-600' gutterBottom variant="h5" component="div">
                                                    {service.title}
                                                </Typography>

                                                <p className='py-3'>  {service.description}</p>

                                            </div>
                                            <Link to='/about' className='text-lg text-primary pt-7 font-semibold'>Read More <ArrowForwardIcon /></Link>
                                        </div>
                                    </Card>
                                </div>
                            )
                        }

                    </div>

                </div>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center mt-10'>
                    {
                        services.slice(2, 6).map((service, index) =>
                            <div data-aos="fade-up" className='' >
                                <Card key={index} className='sm:mb-2 sm:flex justify-center py-12 px-8 relative bg-no-repeat bg-cente  hover:bg-[#202124]  mx-auto hover:z-20 hover:text-white' >
                                    <div className='absolute inset-0 opacity-40 '
                                        style={{ backgroundImage: `url(${CardBG})`, backgroundPosition: 'center', backgroundSize: 'cover', zIndex: "-10" }}
                                    ></div>

                                    <div className=''>
                                        <div className='border-2 border-primary rounded-full w-[100px] h-[100px] flex justify-center items-center mb-5'>
                                            <AcUnitIcon className='text-primary text-center' />
                                        </div>
                                        <div >
                                            <Typography className=' hover:text-red-600' gutterBottom variant="h5" component="div">
                                                {service.title}
                                            </Typography>

                                            <p className='py-3'>  {service.description}</p>

                                        </div>
                                        <Link to='/about' className='text-lg text-primary pt-7 font-semibold'>Read More <ArrowForwardIcon /></Link>
                                    </div>
                                </Card>
                            </div>
                        )
                    }
                </div>
                <p className='text-lg text-center pt-12'>You can also find our <Link to='#' className='text-primary underline hover:no-underline'> Consultant Service to contact for the consulting</Link></p>
            </div >
        </div>
    );
};

export default Agency;